import { useState } from "react";
import { useTranslation } from "~/i18n/context";
import type { TranslationKey } from "~/i18n/context";

interface FaqItem {
  id: string;
  question: TranslationKey;
  answer: TranslationKey;
}

const faqs: FaqItem[] = [
  {
    id: "1",
    question: "faqQuestion1",
    answer: "faqAnswer1",
  },
  {
    id: "2",
    question: "faqQuestion2",
    answer: "faqAnswer2",
  },
  {
    id: "3",
    question: "faqQuestion3",
    answer: "faqAnswer3",
  },
  {
    id: "4",
    question: "faqQuestion4",
    answer: "faqAnswer4",
  },
];

export function FaqSection() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            {t("frequentlyAskedQuestions")}
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-6">
                <dt>
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="flex w-full items-start justify-between text-left text-gray-900"
                  >
                    <span className="text-base font-semibold leading-7">
                      {t(faq.question)}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {openId === faq.id ? (
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 12H6"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                </dt>
                {openId === faq.id && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {t(faq.answer)}
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}