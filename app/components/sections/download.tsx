import { useTranslation } from "~/i18n/context";
import { MockupGenerator } from "~/components/ui/mockup-generator";

export function DownloadSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("downloadApp")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            {t("downloadSubtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            {/* App Store Button */}
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-black px-6 py-3 hover:bg-gray-900"
            >
              <span className="flex items-center">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="ml-3">
                  <span className="block text-xs text-gray-200">
                    {t("availableOn")}
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {t("appStore")}
                  </span>
                </span>
              </span>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-black px-6 py-3 hover:bg-gray-900"
            >
              <span className="flex items-center">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 20.5v-17c0-.76.43-1.42 1.05-1.76L14.1 8.5 3 15.25v5.25zm1.5-17.1L14.06 8.5 20.5 4.5 14.06.47 4.5 3.4zm0 17.1l10.06-5.14L20.5 19.5l-6.44 4.03-9.56-2.93zM3 15.25l11.1 6.76c.62.34 1.4.34 2 0l5.9-3.58-6.44-4.18L3 15.25z" />
                </svg>
                <span className="ml-3">
                  <span className="block text-xs text-gray-200">
                    {t("availableOn")}
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {t("playStore")}
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-150 bg-blue-500 opacity-30 blur-3xl" />
            <MockupGenerator
              type="app-preview"
              width={300}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}