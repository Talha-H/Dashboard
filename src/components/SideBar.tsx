"use client";
import React from "react";
import { Nav } from "./ui/nav";
import { Inbox, Settings, ShoppingCart, UserRound } from "lucide-react";

type Props = {};

export default function SideBar({}: Props) {
  return (
    <div>
      <Nav
        isCollapsed={false}
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
