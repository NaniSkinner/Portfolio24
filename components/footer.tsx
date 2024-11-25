import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const Footer = () => {
  return (
    <div className="w-full pt-6 text-xs border-t border-neutral-200 dark:border-neutral-800 p-6 flex items-center justify-between">
      <div>Built by Nani Skinner @naniskinner | 2024</div>
      <ThemeToggle />
    </div>
  );
};

export default Footer;
