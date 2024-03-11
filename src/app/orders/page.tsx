/* eslint-disable @next/next/no-img-element */
"use client";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Payment = {
  Status: "Completed" | "Pending" | "Processing";
  LastOrder: string;
  PaymentMethod: string;
  Order: number;
};

export const data: Payment[] = [
  {
    Order: 1,
    Status: "Completed",
    LastOrder: "2024-03-10",
    PaymentMethod: "Credit Card",
  },
  {
    Order: 2,
    Status: "Pending",
    LastOrder: "2024-03-09",
    PaymentMethod: "PayPal",
  },
  {
    Order: 3,
    Status: "Processing",
    LastOrder: "2024-03-08",
    PaymentMethod: "Debit Card",
  },
  {
    Order: 4,
    Status: "Pending",
    LastOrder: "2024-03-07",
    PaymentMethod: "Bank Transfer",
  },
  {
    Order: 5,
    Status: "Processing",
    LastOrder: "2024-03-06",
    PaymentMethod: "Credit Card",
  },
  {
    Order: 6,
    Status: "Completed",
    LastOrder: "2024-03-05",
    PaymentMethod: "PayPal",
  },
  {
    Order: 7,
    Status: "Processing",
    LastOrder: "2024-03-04",
    PaymentMethod: "Debit Card",
  },
  {
    Order: 8,
    Status: "Pending",
    LastOrder: "2024-03-03",
    PaymentMethod: "Bank Transfer",
  },
  {
    Order: 9,
    Status: "Processing",
    LastOrder: "2024-03-02",
    PaymentMethod: "Credit Card",
  },
  {
    Order: 10,
    Status: "Pending",
    LastOrder: "2024-03-01",
    PaymentMethod: "PayPal",
  },

  {
    Order: 11,
    Status: "Completed",
    LastOrder: "2024-03-15",
    PaymentMethod: "Credit Card",
  },
  {
    Order: 12,
    Status: "Pending",
    LastOrder: "2024-03-14",
    PaymentMethod: "Venmo",
  },
  {
    Order: 13,
    Status: "Processing",
    LastOrder: "2024-03-13",
    PaymentMethod: "Debit Card",
  },
  {
    Order: 14,
    Status: "Pending",
    LastOrder: "2024-03-12",
    PaymentMethod: "Cash",
  },
  {
    Order: 15,
    Status: "Processing",
    LastOrder: "2024-03-11",
    PaymentMethod: "Apple Pay",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "Order",
    header: "Order",
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-300": row.getValue("Status") === "Pending",
            "bg-orange-300": row.getValue("Status") === "Processing",
            "bg-green-300": row.getValue("Status") === "Completed",
          })}
        >
          {row.getValue("Status")}
        </div>
      );
    },
  },
  {
    accessorKey: "LastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "PaymentMethod",
    header: "Method",
  },
];

const page = (props: Payment) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default page;
