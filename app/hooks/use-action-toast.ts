import { useEffect, useRef } from "react";
import { useToast } from "~/components/ui/use-toast";
import { useTranslation } from "~/i18n/context";

interface ActionResult {
  success?: boolean;
  error?: string;
}

export function useActionToast<T extends ActionResult>(
  actionData: T | undefined,
  successMessage: string,
  options: {
    onlyOnce?: boolean;
    resetOn?: unknown[];
  } = {}
) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const hasShownToast = useRef(false);
  const { onlyOnce = true, resetOn = [] } = options;

  useEffect(() => {
    if (!actionData) return;

    if (onlyOnce && hasShownToast.current) return;

    toast({
      variant: actionData.success ? "default" : "destructive",
      title: actionData.success ? t("success") : t("error"),
      description: actionData.success ? successMessage : actionData.error,
    });

    if (onlyOnce) {
      hasShownToast.current = true;
    }
  }, [actionData, successMessage, t, toast, onlyOnce]);

  // Reset the toast flag when any of the resetOn dependencies change
  useEffect(() => {
    hasShownToast.current = false;
  }, resetOn);

  return null;
}