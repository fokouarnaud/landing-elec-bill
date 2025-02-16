import { useTranslation } from "~/i18n/context";
import type { TranslationKey } from "~/i18n/context";

interface Testimonial {
  id: string;
  content: TranslationKey;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    content: "testimonial1",
    author: {
      name: "Sarah Johnson",
      role: "Home Owner",
      image: "/images/testimonials/sarah.jpg",
    },
  },
  {
    id: "2",
    content: "testimonial2",
    author: {
      name: "Marc Dubois",
      role: "Property Manager",
      image: "/images/testimonials/marc.jpg",
    },
  },
  {
    id: "3",
    content: "testimonial3",
    author: {
      name: "Elena Martinez",
      role: "Business Owner",
      image: "/images/testimonials/elena.jpg",
    },
  },
  {
    id: "4",
    content: "testimonial4",
    author: {
      name: "Thomas Weber",
      role: "Energy Consultant",
      image: "/images/testimonials/thomas.jpg",
    },
  },
];

export function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
            {t("testimonials")}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("testimonialTitle")}
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
              >
                <blockquote className="text-gray-600">
                  {t(testimonial.content)}
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.author.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}