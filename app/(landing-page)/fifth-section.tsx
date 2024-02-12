"use client";

import Image from "next/image";
import { useState } from "react";
import {
  PiBookOpenTextLight,
  PiCompassLight,
  PiHeadset,
  PiMegaphoneLight,
  PiRocketLaunchFill,
  PiSparkleLight,
} from "react-icons/pi";

const tabs = [
  {
    icon: <PiSparkleLight />,
    name: "Engineering",
    image: "/assets/DancingDoodle.svg",
  },
  {
    icon: <PiBookOpenTextLight />,
    name: "Design",
    image: "/assets/DogJumpDoodle.svg",
  },
  {
    icon: <PiRocketLaunchFill />,
    name: "Product",
    image: "/assets/MeditatingDoodle.svg",
  },
  {
    icon: <PiMegaphoneLight />,
    name: "Marketing",
    image: "/assets/ReadingDoodle.svg",
  },
  {
    icon: <PiCompassLight />,
    name: "Operations",
    image: "/assets/SittingDoodle.svg",
  },
  {
    icon: <PiHeadset />,
    name: "HR",
    image: "/assets/SleekDoodle.svg",
  },
];

const FifthSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="relative flex justify-center flex-col px-8 md:px-0 xl:w-3/4 2xl:w-[55%] mx-auto">
      <div className="pt-20 lg:pt-0 text-3xl xl:text-5xl font-medium text-center pb-8">
        Every team, side-by-side
      </div>

      <article className="flex justify-center gap-2 xl:gap-4 mt-8 w-full mx-auto">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex items-center justify-center p-1 md:p-6 cursor-pointer bg-[#f6f5f4]/60 rounded-md md:rounded-xl
                ${
                  activeTab.name === tab.name
                    ? "md:bg-white border-gray-200 md:border transition-all duration-200"
                    : "hover:bg-[#f6f5f4]"
                } `}
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="hidden md:block text-2xl">{tab.icon}</div>
              <div className="font-medium text-sm xl:text-base mt-1">
                {tab.name}
              </div>
            </div>
          </div>
        ))}
      </article>

      {/* Display content based on the active tab */}
      <div className="py-10 lg:px-16 xl:px-0 md:px-16 w-full lg:ml-4">
        {activeTab && (
          <div className="flex justify-center items-center flex-col">
            <Image
              src={activeTab.image}
              width={1025}
              height={500}
              alt="logo"
              className="w-full border p-20 xl:p-40 rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FifthSection;
