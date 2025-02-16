import { HeroSection } from "~/components/sections/hero";
import { FeaturesSection } from "~/components/sections/features";
import { ClientsSection } from "~/components/sections/clients";
import { TestimonialsSection } from "~/components/sections/testimonials";
import { FaqSection } from "~/components/sections/faq";
import { DownloadSection } from "~/components/sections/download";

export default function Index() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <ClientsSection />
      <TestimonialsSection />
      <FaqSection />
      <DownloadSection />
    </div>
  );
}
