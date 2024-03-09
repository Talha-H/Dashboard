"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
  ChevronRight,
  Inbox,
  Settings,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { Button } from "./ui/button";

type Props = {};

export default function SideBar({}: Props) {
  const [isCollapsed, setisCollapsed] = useState(false);
  const toggleSideBar = () => {
    setisCollapsed(!isCollapsed);
  };
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <div className="absolute top-7 right-[-20px]">
        <Button
          variant={"secondary"}
          onClick={toggleSideBar}
          className="rounded-full p-2"
        >
          <ChevronRight />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: Inbox,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UserRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Setting",
            href: "/setting",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
