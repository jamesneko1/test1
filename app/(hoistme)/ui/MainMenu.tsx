"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Codesandbox, MenuIcon } from "lucide-react";
import React from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { useMediaQuery } from "@/components/ui/hooks/useMediaQuery";


export default function MainMenu() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
    <div><NavigationMenuDemo className="bg-red-500"  /></div>
  ) : (
    <div className="bg-red-100 flex items-center justify-between ">
      <Codesandbox size={64} />
      <Drawer direction="right">
        <DrawerTrigger>
          <MenuIcon size={64} />
        </DrawerTrigger>
        <DrawerContent className="text-lg text-green-500  ">
            Some drawer content 

        </DrawerContent>
      </Drawer>
    </div>
  );
}
