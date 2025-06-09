import React from "react";

const HeroAbout = () => {
  return (
    <div className="text-gray-200 text-[0.80rem] font-semibold">
      Andrew (He/Him) builds software. He excels in complex, ambigious problem
      spaces focused around AI engineering, database systems, and machine
      learning. He studied Computer Science at University of California, Davis.
      If you have an interesting idea, please{" "}
      <a
        href="mailto:andrewcyeow@gmail.com"
        className="hover:text-green-200 transition-colors duration-200 underline decoration-gray-600 decoration-1 underline-offset-2 inline-flex items-center gap-1"
      >
        get in touch
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
      .
    </div>
  );
};

export default HeroAbout;
