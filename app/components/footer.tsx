import { Link } from "@remix-run/react";
import { useTranslation } from "~/i18n/context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t("product")}</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/features" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("features")}
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("testimonials")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t("company")}</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("careers")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t("resources")}</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/documentation" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("documentation")}
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("helpCenter")}
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("guides")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t("legal")}</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-600 hover:text-gray-900">
                  {t("cookies")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-900/10 pt-8">
        <p className="text-center text-xs leading-5 text-gray-500">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}