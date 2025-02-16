import { Link } from "@remix-run/react";
import { useTranslation } from "~/i18n/context";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "./ui/button";
import type { User } from "~/utils/user";

interface HeaderProps {
  user: User | null;
}

export function Header({ user }: HeaderProps) {
  const { t } = useTranslation();

  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">ElectricMeter</span>
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              <Link
                to="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {t("home")}
              </Link>
              <Link
                to="/features"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {t("features")}
              </Link>
              <Link
                to="/pricing"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {t("pricing")}
              </Link>
              <Link
                to="/contact"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {t("contact")}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            {user ? (
              <div className="flex items-center space-x-4">
                {user.isAdmin && (
                  <Link
                    to="/admin/waitlist"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    {t("admin")}
                  </Link>
                )}
                <Link
                  to="/dashboard"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {t("dashboard")}
                </Link>
                <Form action="/logout" method="post">
                  <Button type="submit" variant="ghost">
                    {t("logout")}
                  </Button>
                </Form>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="outline">{t("login")}</Button>
              </Link>
            )}
          </div>
        </div>
        {/* Mobile menu */}
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          <Link
            to="/"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            {t("home")}
          </Link>
          <Link
            to="/features"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            {t("features")}
          </Link>
          <Link
            to="/pricing"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            {t("pricing")}
          </Link>
          <Link
            to="/contact"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            {t("contact")}
          </Link>
        </div>
      </nav>
    </header>
  );
}

// Import at the top to avoid circular dependency
import { Form } from "@remix-run/react";