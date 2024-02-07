"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="pr-2">
      <div className="hidden xl:flex items-center justify-center">
        <div className="flex xl:space-x-4">
          <Link href={"/contact-sales"}>
            <div className="">Request a demo</div>
          </Link>

          <div className="font-thin">|</div>
        </div>

        <div className="flex xl:space-x-4 items-center pr-4">
          <Link href={"/free"}>
            <Button variant={"outline"} className="border-none text-md">
              Log in
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button>Get Bird free</Button>
          </Link>
        </div>
      </div>

      {isDropdownVisible && (
        <div onClick={toggleDropdown} className="rounded-full sm:hidden">
          <X className="h-5 w-5 items-center justify-center rounded-full" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}

      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex sm:hidden">
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}
    </div>
  );
};

export default ActionButtons;
