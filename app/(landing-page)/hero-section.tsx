"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

const tabs = [
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "AI",
    feature: "Now with Q&A",
    description: "Ask literally anything. Bird Will answer.",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Wikis",
    description: "Centralize your knowledge. Make it accessible.",
    more: (
      <div className="text-red-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },
  {
    icon: (
      <PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Projects",
    description: "Manage complex projects without the chaos",
    more: (
      <div className="text-blue-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <PiFileThin className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
    ),
    name: "Docs",
    description: "Simple, powerful, & beautiful. Next-gen notes & docs.",
    more: (
      <div className="text-yellow-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/RunningDoodle.svg",
  },
];

const HeroSection = () => {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="md:items-center flex flex-col">
      <div className="font-medium 2xl:w-1/3 md:w-2/3 lg:px-0 px-8 text-5xl xl:text-6xl flex justify-center xl:pt-14 text-center pt-6">
        Write, plan, share. With AI at your side.
      </div>
      <p className="text-2xl pt-4 text-center w-2/3 mx-auto">
        Bird is the connected workspace where better, faster work happens.
      </p>

      <div className="flex gap-4 pt-6 items-center justify-center">
        <Link href="/">
          <Button className="py-1">
            <div className="text-lg">Get bird free</div>
            <PiArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>

      <Image
        src="/assets/ReadingSideDoodle.svg"
        alt="hero image"
        width={1000}
        height={1000}
        className="flex items-center justify-center pt-10 xl:pt-20 mx-auto w-60 xl:w-80"
      />

      {isSmallScreen ? (
        <div className="flex flex-col items-center justify-center gap-4 mt-8 px-8">
          <div className="flex items-center justify-center gap-4">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`px-6 cursor-pointer font-medium text-sm mt-1 text-center
                ${
                  activeTab === tab
                    ? "rounded-md bg-[#f6f5f4] border-gray-200 p-1"
                    : "rounded-md p-1 hover:bg-[#f6f5f4]"
                } `}
                onClick={() => setActiveTab(tab)}
              >
                {tab.name}
              </motion.div>
            ))}
          </div>

          {/* Display content based on the active tab - Mobile Screen */}
          <div className="w-full pt-6">
            {activeTab && (
              <Image
                src={activeTab.image}
                width={350}
                height={350}
                alt="logo"
                className="w-full border p-20 rounded-xl"
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`xl:flex justify-center space-x-4 xl:pt-4 sm:my-10 xl:my-0 w-60 h-36
                ${
                  activeTab === tab
                    ? "border rounded-xl pt-2 bg-white"
                    : "shadow-md rounded-xl pt-2 bg-[#f6f5f4] m"
                }
              `}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium">{tab.name}</div>

                  {/* Render feature tag only for "AI" tab */}
                  {tab.name === "AI" && (
                    <div className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full ml-2">
                      {tab.feature}
                    </div>
                  )}
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 5 : 25 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Only animate the description */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {tab.description}
                  </motion.div>

                  {/* Conditional rendering for "Learn more" link */}
                  {activeTab === tab && (
                    <div className="text-sm my-2">{tab.more}</div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Display content based on the active tab */}
      <div className="hidden md:flex py-10 px-8 md:px-0 lg:w-3/4 2xl:w-[55%]">
        {activeTab && (
          <div className="md:flex items-center justify-center space-x-6 hover:cursor-pointer w-full">
            <Image
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
              className="w-full p-10 xl:p-40 shadow-md rounded-xl bg-[#f6f5f4]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
