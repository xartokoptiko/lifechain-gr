import {
  MapPinIcon,
  PhoneArrowUpRightIcon
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Sharing your location",
    description:
      "with you tour leader/tour guide/responsible along with photos or comments when you are in an emergency",
    icon: MapPinIcon,
  },
  {
    name: "Call emergency numbers",
    description:
      "of every country/region, providing easy access to police number, ambulance number, etc",
    icon: PhoneArrowUpRightIcon,
  },
//   {
//     name: "Database backups.",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//     icon: ServerIcon,
//   },
];

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-700">
                Travel danger free
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Upgrade your travel experience!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Every destination is unique and that is why we offer
                personalized and customized services for every one of them.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-red-700"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="woman-help.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

// https://tailwindui.com/img/component-images/dark-project-app-screenshot.png
