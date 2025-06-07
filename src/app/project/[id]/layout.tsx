import React from "react";
import type { Metadata } from "next";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Project - Andrew Yeow",
  description: "Project details",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black selection:bg-transparent selection:text-green-200">
      <Header />
      <div className="mx-auto max-w-[98%] border-b border-zinc-800 border-opacity-50"></div>
      <div className="py-2"></div>
      {children}
    </div>
  );
}
