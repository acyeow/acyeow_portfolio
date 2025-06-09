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
    <div className="min-h-screen selection:bg-transparent selection:text-green-200">
      <Header />
      <div>{children}</div>
    </div>
  );
}
