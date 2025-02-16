import { Button } from "./ui/button";
import { useTranslation } from "~/i18n/context";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <Button
      variant="ghost"
      className="text-sm font-medium"
      onClick={toggleLanguage}
      type="button" // Explicitly set type to prevent form submission
    >
      {t(language === "en" ? "switchToFr" : "switchToEn")}
    </Button>
  );
}