import { useTranslation } from "~/i18n/context";

const clients = [
  {
    name: "Company 1",
    logo: (
      <svg className="h-8 fill-gray-500" viewBox="0 0 100 40">
        <rect width="100" height="40" rx="8" />
        <text x="50" y="25" fontSize="16" fill="white" textAnchor="middle">
          Client 1
        </text>
      </svg>
    ),
  },
  {
    name: "Company 2",
    logo: (
      <svg className="h-8 fill-gray-500" viewBox="0 0 100 40">
        <rect width="100" height="40" rx="8" />
        <text x="50" y="25" fontSize="16" fill="white" textAnchor="middle">
          Client 2
        </text>
      </svg>
    ),
  },
  {
    name: "Company 3",
    logo: (
      <svg className="h-8 fill-gray-500" viewBox="0 0 100 40">
        <rect width="100" height="40" rx="8" />
        <text x="50" y="25" fontSize="16" fill="white" textAnchor="middle">
          Client 3
        </text>
      </svg>
    ),
  },
  {
    name: "Company 4",
    logo: (
      <svg className="h-8 fill-gray-500" viewBox="0 0 100 40">
        <rect width="100" height="40" rx="8" />
        <text x="50" y="25" fontSize="16" fill="white" textAnchor="middle">
          Client 4
        </text>
      </svg>
    ),
  },
  {
    name: "Company 5",
    logo: (
      <svg className="h-8 fill-gray-500" viewBox="0 0 100 40">
        <rect width="100" height="40" rx="8" />
        <text x="50" y="25" fontSize="16" fill="white" textAnchor="middle">
          Client 5
        </text>
      </svg>
    ),
  },
  {
    name: "Company 6",
    logo: (
      <svg className="h-8 fill-gray-500" viewBox="0 0 100 40">
        <rect width="100" height="40" rx="8" />
        <text x="50" y="25" fontSize="16" fill="white" textAnchor="middle">
          Client 6
        </text>
      </svg>
    ),
  },
  {
    name: "Company 7",
    logo: (
      <svg className="h-8 fill-gray-500" viewBox="0 0 100 40">
        <rect width="100" height="40" rx="8" />
        <text x="50" y="25" fontSize="16" fill="white" textAnchor="middle">
          Client 7
        </text>
      </svg>
    ),
  },
  {
    name: "Company 8",
    logo: (
      <svg className="h-8 fill-gray-500" viewBox="0 0 100 40">
        <rect width="100" height="40" rx="8" />
        <text x="50" y="25" fontSize="16" fill="white" textAnchor="middle">
          Client 8
        </text>
      </svg>
    ),
  },
];

export function ClientsSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
            {t("ourClients")}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("trustedByCompanies")}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
          {clients.map((client) => (
            <div key={client.name} className="col-span-1 flex justify-center">
              {client.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}