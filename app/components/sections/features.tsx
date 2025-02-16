import { useTranslation } from "~/i18n/context";
import type { TranslationKey } from "~/i18n/context";
import { MockupGenerator } from "~/components/ui/mockup-generator";

interface Feature {
  id: string;
  title: TranslationKey;
  description: TranslationKey;
  type: "feature-monitoring" | "feature-cost" | "feature-setup";
}

const features: Feature[] = [
  {
    id: "monitoring",
    title: "realTimeMonitoring",
    description: "realTimeMonitoringDesc",
    type: "feature-monitoring",
  },
  {
    id: "cost",
    title: "costSaving",
    description: "costSavingDesc",
    type: "feature-cost",
  },
  {
    id: "setup",
    title: "easySetup",
    description: "easySetupDesc",
    type: "feature-setup",
  },
];

export function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            {t("whyChooseUs")}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col lg:flex-row items-center gap-16 py-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <MockupGenerator
                  type={feature.type}
                  width={500}
                  height={300}
                  className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {t(feature.title)}
                </h3>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {t(feature.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}