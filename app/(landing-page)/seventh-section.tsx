import {
  PiAirplaneFill,
  PiArrowRight,
  PiCalendarCheckFill,
  PiCheckCircleFill,
  PiClipboardLight,
  PiFlagCheckeredFill,
  PiHouseFill,
  PiWatchFill,
} from "react-icons/pi";
import Image from "next/image";

const items = [
  {
    icon: <PiHouseFill className="text-2xl text-red-500" />,
    name: "Company wiki",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
    image: "/images/company-wiki-template.webp",
  },
  {
    icon: <PiFlagCheckeredFill className="text-2xl text-sky-600" />,
    name: "Product roadmap",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  },
  {
    icon: <PiCheckCircleFill className="text-2xl text-orange-500" />,
    name: "OKRs",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  },
  {
    icon: <PiClipboardLight className="text-2xl text-green-500" />,
    name: "Meeting notes",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  },
  {
    icon: <PiAirplaneFill className="text-2xl text-red-500" />,
    name: "Vacation Planner",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  },
  {
    icon: <PiCalendarCheckFill className="text-2xl text-emerald-500" />,
    name: "Editorial calendar",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  },

  {
    icon: <PiWatchFill className="text-2xl text-indigo-500" />,
    name: "Habit tracker",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Get template <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
];

const SeventhSection = () => {
  return (
    <section className="md:w-full lg:w-5/6 2xl:w-[55%] mx-auto">
      <div className="flex flex-col pt-32 items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium">
          Endless ways to use it
        </div>
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
          Browse all templates
          <PiArrowRight className="ml-3 mt-[0.18rem] text-sm" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 px-8 md:px-16 lg:px-0">
        {items.map((item, index) => (
          <div
            key={index}
            className={`bg-[#f6f5f4] p-6 rounded-xl flex ${
              index === 0
                ? "lg:row-span-3 md:col-span-2 flex-col xl:flex-col justify-between"
                : "col-span-1"
            }`}
          >
            <div className="flex flex-col">
              {item.icon}
              <div className="text-lg font-medium mt-2">{item.name}</div>
              {item.button}
            </div>
            {item.image && (
              <Image
                src={item.image}
                alt={`${item.name} Image`}
                width={1000}
                height={1000}
                className="mt-5 p-8 md:p-20 lg:p-8 rounded-xl"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeventhSection;
