/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

export type SalesProps = {
  name: string;
  email: string;
  amount: string;
};

const Sales = (props: SalesProps) => {
  return (
    <div className="flex justify-between gap-3 flex-wrap">
      <section className="flex justify-between items-center gap-3">
        <div className="w-12 h-12 rounded-xl p-1 bg-gray-100">
          <img
            width={200}
            height={200}
            alt=""
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}`}
          />
        </div>
        <div>
          <p className="text-gray-700 font-bold text-lg">{props.name}</p>
          <p className="text-gray-500 text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto">
            {props.email}
          </p>
        </div>
      </section>
      <div>
        <h1 className="text-gray-700 font-bold text-lg">{props.amount}</h1>
      </div>
    </div>
  );
};

export default Sales;
