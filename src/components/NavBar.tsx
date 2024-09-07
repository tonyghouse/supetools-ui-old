"use client";

import { useRouter } from "next/navigation";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { IThemeContextType, ThemeContext } from "@/context/ThemeContext";
// import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import { LuGithub } from "react-icons/lu";
import { RxGithubLogo, RxMoon, RxSun } from "react-icons/rx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function NavBar() {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  const router = useRouter();
  const handleSelectionChange = (value: any) => {
    router.push(value);
  };

  const toggleTheme = (): void => {
    themeContext.toggleThemeMode();
  };

  return (
    <header
      id="navbar"
      className={` ${themeContext.themeMode === "dark" ? " " : ""} 
              flex h-[1.7rem] w-full items-center justify-between top-0 z-50 backdrop-blur-sm
        py-6 `}
    >
      <div className="container px-2 md:px-4 py-1 flex items-center justify-between">
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-2xl font-semibold text-[#FF6B6B]"
            prefetch={false}
          >
            Supetools
          </Link>
          <Select onValueChange={handleSelectionChange}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Tools" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="graphvis">Graph Visualizer</SelectItem>
              <SelectItem value="tablevis">Table Visualizer</SelectItem>
              <SelectItem value="diff">Diff Editor</SelectItem>
              <SelectItem value="markdown">Markdown Editor</SelectItem>
            </SelectContent>
          </Select>
        </nav>
        <div
          className="flex
           z-[100] justify-center
         h-auto w-auto flex-row items-center "
        >
          <ul
            className=" mr-4 flex text-[0.7rem] 
           md:text-[0.9rem] flex-row "
          >
            <li key="theme" className="px-2 py-3 md:px-[0.9rem] md:py-0">
              <button onClick={toggleTheme}>
                {themeContext.themeMode === "dark" ? <RxMoon /> : <RxSun />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
