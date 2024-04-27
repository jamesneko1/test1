import React from "react"

import { Button } from "@/components/ui/button"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import MainMenu from "./MainMenu"

export default function Header() {
  return (
    <div className="container max-w-6xl">
      <MainMenu />
    </div>
  )
}
