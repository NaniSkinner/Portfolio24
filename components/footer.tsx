import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full pt-6 border-t border-neutral-100 dark:border-neutral-800">
      <div className="container flex items-center justify-between">
        <div>Built by Nani Skinner @naniskinner | 2024</div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
