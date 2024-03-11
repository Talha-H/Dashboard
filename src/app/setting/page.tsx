/* eslint-disable @next/next/no-img-element */
"use client";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Payment = {
  Category: string;
  Value: string;
};

export const data: Payment[] = [
  {
    Category: "Account",
    Value: "Profile Settings",
  },
  {
    Category: "Notification",
    Value: "Email",
  },
  {
    Category: "Language",
    Value: "English",
  },
  {
    Category: "Logout",
    Value: "Sign Out",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "Category",
    header: "Category",
  },
  {
    accessorKey: "Value",
    header: "Value",
  },
];

const page = (props: Payment) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Setting" />
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default page;
