import { LucideIcon } from "lucide-react";
import React from "react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  desc: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="flex w-full rounded-xl flex-col gap-3 border p-5 shadow">
      <section className="flex justify-between gap-5">
        <h2 className="text-sm">{props.label}</h2>
        <props.icon className="h-4 w-4 text-gray-400" />
      </section>
      <section className="flex flex-col gap-5">
        <p className="text-2xl font-semibold">{props.amount}</p>
        <p className="text-xs text-gray-500">{props.desc}</p>
      </section>
    </div>
  );
};

export default Card;
