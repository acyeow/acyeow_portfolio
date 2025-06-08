"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 text-gray-200 text-[0.85rem] font-semibold">
      <div className="w-1/3 md:w-1/3">
        <Link href="/" prefetch={true}>
          <span className="cursor-pointer hover:text-green-200 transition-colors duration-200">
            Andrew Yeow
          </span>
        </Link>
      </div>
      <div className="w-1/6 hidden md:block"></div>
      <div className="w-2/3 md:w-1/6">
        <span>Software Engineer</span>
      </div>
      <div className="w-1/3 md:w-1/3 hidden md:block">
        <span>Sacramento, CA</span>
      </div>
    </div>
  );
};

export default Header;
