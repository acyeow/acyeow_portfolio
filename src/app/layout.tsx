import type { Metadata } from "next";
import { Shadows_Into_Light } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import HeroHeader from "./components/HeroHeader";
import ProjectGrid from "./components/ProjectGrid";

const shadowsIntoLight = Shadows_Into_Light({
  variable: "--font-shadows-into-light",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Andrew Yeow - Software Engineer",
  description: "Andrew's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shadowsIntoLight.variable} antialiased selection:bg-transparent selection:text-green-200`}
      >
        <Header />
        <div className="mx-auto max-w-[98%] border-b border-zinc-800 border-opacity-50"></div>
        <div className="py-2"></div>
        <HeroHeader />
        <ProjectGrid />
        {children}
      </body>
    </html>
  );
}
