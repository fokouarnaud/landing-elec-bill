import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation, Form } from "@remix-run/react";
import { useTranslation } from "~/i18n/context";
import { requireAdminUser } from "~/utils/session.server";
import {
  getWaitlistEntries,
  updateWaitlistEntry,
  deleteWaitlistEntry,
  type WaitlistEntry,
} from "~/utils/waitlist.server";
import { Button } from "~/components/ui/button";
import { useActionToast } from "~/hooks/use-action-toast";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAdminUser(request);
  const result = await getWaitlistEntries();
  
  if (!result.success) {
    throw new Response("Failed to load waitlist entries", { status: 500 });
  }

  return Response.json({ entries: result.entries });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAdminUser(request);
  const formData = await request.formData();
  const action = formData.get("action");
  const entryId = formData.get("entryId");

  if (!entryId || typeof entryId !== "string") {
    return Response.json({ success: false, error: "Invalid entry ID" }, { status: 400 });
  }

  if (action === "delete") {
    const result = await deleteWaitlistEntry(entryId);
    return Response.json(result);
  }

  if (action === "update-status") {
    const status = formData.get("status");
    if (!status || typeof status !== "string") {
      return Response.json({ success: false, error: "Invalid status" }, { status: 400 });
    }

    const result = await updateWaitlistEntry(entryId, {
      status,
      lastContactedAt: new Date(),
    });
    return Response.json(result);
  }

  if (action === "add-note") {
    const note = formData.get("note");
    if (!note || typeof note !== "string") {
      return Response.json({ success: false, error: "Invalid note" }, { status: 400 });
    }

    const result = await updateWaitlistEntry(entryId, {
      notes: note,
    });
    return Response.json(result);
  }

  return Response.json({ success: false, error: "Invalid action" }, { status: 400 });
}

export default function AdminWaitlist() {
  const { t } = useTranslation();
  const { entries } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useActionToast(navigation.formData ? { success: true } : undefined, t("updateSuccess"), {
    resetOn: [isSubmitting],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">{t("waitlistEntries")}</h1>

      {entries.length === 0 ? (
        <p className="text-gray-500">{t("noEntries")}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {t("emailLabel")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {t("status")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {t("lastContacted")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {t("notes")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {t("actions")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {entries.map((entry: WaitlistEntry) => (
                <tr key={entry.id}>
                  <td className="whitespace-nowrap px-6 py-4">{entry.email}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Form method="post" className="inline">
                      <input type="hidden" name="entryId" value={entry.id} />
                      <input type="hidden" name="action" value="update-status" />
                      <select
                        name="status"
                        defaultValue={entry.status}
                        onChange={(e) => e.target.form?.submit()}
                        className="rounded-md border-gray-300 text-sm"
                      >
                        <option value="pending">{t("pending")}</option>
                        <option value="contacted">{t("contacted")}</option>
                        <option value="completed">{t("completed")}</option>
                      </select>
                    </Form>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {entry.lastContactedAt
                      ? new Date(entry.lastContactedAt).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="px-6 py-4">
                    <Form method="post" className="flex gap-2">
                      <input type="hidden" name="entryId" value={entry.id} />
                      <input type="hidden" name="action" value="add-note" />
                      <input
                        type="text"
                        name="note"
                        defaultValue={entry.notes || ""}
                        className="w-full rounded-md border-gray-300 text-sm"
                        placeholder={t("addNote")}
                      />
                      <Button type="submit" size="sm">
                        {t("submit")}
                      </Button>
                    </Form>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Form method="post" className="inline">
                      <input type="hidden" name="entryId" value={entry.id} />
                      <input type="hidden" name="action" value="delete" />
                      <Button
                        type="submit"
                        variant="destructive"
                        size="sm"
                        disabled={isSubmitting}
                        onClick={() => {
                          if (!confirm(t("confirmDelete"))) {
                            return false;
                          }
                        }}
                      >
                        {t("deleteEntry")}
                      </Button>
                    </Form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}