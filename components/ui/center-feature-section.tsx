import {
  CalendarDaysIcon,
  SparklesIcon,
  PhotoIcon,
  LanguageIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Trip schedule",
    description:
      "The program of the trip fully integrated into the application, with Times, locations, and details of every meeting.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Suggestions",
    description:
      "Suggestions for food, restaurants, and coffee The recommendation can be fully Customizable based on your Preference and we can add new categories Like beaches, entertainment, etc.",
    icon: SparklesIcon,
  },
  {
    name: "Useful expressions",
    description:
      "Useful expressions in the local language, Which can be adjusted based on your preference.",
    icon: LanguageIcon,
  },
  {
    name: "Top sightseeing",
    description:
      "Top sightseeing with descriptions, reviews and locations on the map",
    icon: PhotoIcon,
  },
];

export default function CenterFeatureSections() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Modern Travel
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Modern times, modern travel
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            In modern times you need modern ways to protect yourself ! Life
            chain does just that ensuring you having a great time with your trip
            schedule and much more ...
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
