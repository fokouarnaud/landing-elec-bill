import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useTranslation } from "~/i18n/context";
import { requireUserId } from "~/utils/session.server";
import { getWaitlistStats } from "~/utils/waitlist.server";
import { getUserById } from "~/utils/user";

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  const userResult = await getUserById(userId);
  
  if (!userResult.success) {
    throw new Response("User not found", { status: 404 });
  }

  const statsResult = await getWaitlistStats();
  
  if (!statsResult.success) {
    throw new Response("Failed to load stats", { status: 500 });
  }

  return Response.json({
    user: userResult.user,
    stats: statsResult.stats,
  });
}

interface StatCardProps {
  title: string;
  value: number;
  className?: string;
}

function StatCard({ title, value, className = "" }: StatCardProps) {
  return (
    <div className={`rounded-lg p-6 shadow-lg ${className}`}>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-3xl font-semibold text-gray-700">{value}</p>
    </div>
  );
}

export default function Dashboard() {
  const { t } = useTranslation();
  const { user, stats } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">
        {t("dashboard")}
      </h1>

      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title={t("totalEntries")}
          value={stats.total}
          className="bg-blue-50"
        />
        <StatCard
          title={t("pendingEntries")}
          value={stats.pending}
          className="bg-yellow-50"
        />
        <StatCard
          title={t("contactedEntries")}
          value={stats.contacted}
          className="bg-green-50"
        />
        <StatCard
          title={t("completedEntries")}
          value={stats.completed}
          className="bg-purple-50"
        />
      </div>

      {/* Admin Actions */}
      {user.isAdmin && (
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">{t("admin")}</h2>
          <div className="space-y-4">
            {/* Add admin actions here */}
          </div>
        </div>
      )}
    </div>
  );
}