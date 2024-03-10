// "use client"
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import React from "react";

type Payment = {
  id: number;
  amount: number;
  status: "Active" | "Inactive" | "success" | "failed";
  email: string;
  name: string;
  paymentMethod: string;
};

export const data: Payment[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    amount: 100,
    paymentMethod: "Credit Card",
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    status: "Inactive",
    amount: 200,
    paymentMethod: "PayPal",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    status: "Active",
    amount: 150,
    paymentMethod: "Bitcoin",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    status: "Inactive",
    amount: 300,
    paymentMethod: "Venmo",
  },
  {
    id: 5,
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    status: "Active",
    amount: 180,
    paymentMethod: "Debit Card",
  },
  {
    id: 6,
    name: "Sophia Taylor",
    email: "sophia.taylor@example.com",
    status: "Inactive",
    amount: 250,
    paymentMethod: "Credit Card",
  },
  {
    id: 7,
    name: "William Anderson",
    email: "william.anderson@example.com",
    status: "Active",
    amount: 120,
    paymentMethod: "PayPal",
  },
  {
    id: 8,
    name: "Emma Martinez",
    email: "emma.martinez@example.com",
    status: "Inactive",
    amount: 220,
    paymentMethod: "Bitcoin",
  },
  {
    id: 9,
    name: "Daniel Hernandez",
    email: "daniel.hernandez@example.com",
    status: "Active",
    amount: 170,
    paymentMethod: "Venmo",
  },
  {
    id: 10,
    name: "Olivia Lopez",
    email: "olivia.lopez@example.com",
    status: "Inactive",
    amount: 280,
    paymentMethod: "Debit Card",
  },
  {
    id: 11,
    name: "James Gonzalez",
    email: "james.gonzalez@example.com",
    status: "Active",
    amount: 140,
    paymentMethod: "Credit Card",
  },
  {
    id: 12,
    name: "Ava Perez",
    email: "ava.perez@example.com",
    status: "Inactive",
    amount: 260,
    paymentMethod: "PayPal",
  },
  {
    id: 13,
    name: "Logan Rodriguez",
    email: "logan.rodriguez@example.com",
    status: "Active",
    amount: 160,
    paymentMethod: "Bitcoin",
  },
  {
    id: 14,
    name: "Mia Lee",
    email: "mia.lee@example.com",
    status: "Inactive",
    amount: 240,
    paymentMethod: "Venmo",
  },
  {
    id: 15,
    name: "Benjamin Walker",
    email: "benjamin.walker@example.com",
    status: "Active",
    amount: 130,
    paymentMethod: "Debit Card",
  },
  {
    id: 16,
    name: "Charlotte Hall",
    email: "charlotte.hall@example.com",
    status: "Inactive",
    amount: 200,
    paymentMethod: "Credit Card",
  },
  {
    id: 17,
    name: "Elijah Young",
    email: "elijah.young@example.com",
    status: "Active",
    amount: 190,
    paymentMethod: "PayPal",
  },
  {
    id: 18,
    name: "Harper Allen",
    email: "harper.allen@example.com",
    status: "Inactive",
    amount: 270,
    paymentMethod: "Bitcoin",
  },
  {
    id: 19,
    name: "Amelia King",
    email: "amelia.king@example.com",
    status: "Active",
    amount: 110,
    paymentMethod: "Venmo",
  },
  {
    id: 20,
    name: "Matthew Wright",
    email: "matthew.wright@example.com",
    status: "Inactive",
    amount: 230,
    paymentMethod: "Debit Card",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    // cell: ({ row }) => {
    //   return (
    //     <div>
    //       <Image
    //         width={100}
    //         height={100}
    //         alt="img"
    //         src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
    //           "name"
    //         )}`}
    //       />
    //       <p>{row.getValue("name")}</p>
    //     </div>
    //   );
    // },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
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
