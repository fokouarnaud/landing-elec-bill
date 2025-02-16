import { Form, useNavigation } from "@remix-run/react";
import { useTranslation } from "~/i18n/context";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { MockupGenerator } from "~/components/ui/mockup-generator";

export function HeroSection() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="relative isolate overflow-hidden bg-blue-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
          <div className="lg:max-w-lg">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              {t("heroSubtitle")}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Form method="post" className="flex w-full max-w-sm gap-x-4">
                <Input
                  type="email"
                  name="email"
                  placeholder={t("emailPlaceholder")}
                  required
                  className="flex-1 bg-white/10 text-white placeholder:text-blue-200"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  {isSubmitting ? "..." : t("joinWaitlist")}
                </Button>
              </Form>
            </div>
          </div>
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <MockupGenerator
                type="app-preview"
                width={300}
                height={600}
                className="w-[300px] transform rotate-6 rounded-2xl bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}