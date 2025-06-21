"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle click on name to scroll to top if on home page
  const handleNameClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0a0a0a] fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between p-4 text-gray-200 text-[0.85rem] font-semibold">
        <div className="w-1/3">
          {isHomePage ? (
            <span
              className="cursor-pointer hover:text-green-200 transition-colors duration-200"
              onClick={handleNameClick}
            >
              Andrew Yeow
            </span>
          ) : (
            <Link href="/" prefetch={true}>
              <span className="cursor-pointer hover:text-green-200 transition-colors duration-200">
                Andrew Yeow
              </span>
            </Link>
          )}
        </div>
        <div className="w-1/6 hidden md:block"></div>
        <div className="w-2/3 md:w-1/6">
          <span>Software Engineer</span>
        </div>
        <div className="w-1/3 hidden md:block">
          <span>Sacramento, CA</span>
        </div>
      </div>
      <div className="mx-auto max-w-[98%] border-b border-zinc-800 border-opacity-50"></div>
    </div>
  );
};

export default Header;
