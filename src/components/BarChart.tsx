"use client";
import React from "react";
import {
  ResponsiveContainer,
  BarChart as BarGraph,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

type Props = {};

const data = [
  {
    name: "jan",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "Feb",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "Mar",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "Apr",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "May",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "jun",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "jul",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "Aug",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "Sep",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "Oct",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "Nov",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
  {
    name: "Dec",
    bar: Math.floor(Math.random() * 50000) + 5000,
  },
];

const BarChart = (props: Props) => {
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={350}>
        <BarGraph data={data}>
          <XAxis
            dataKey={"name"}
            tickLine={false}
            axisLine={false}
            stroke="#888888"
            fontSize={12}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            stroke="#888888"
            fontSize={12}
          />
          <Bar dataKey={"bar"} radius={[4, 4, 0, 0]} />
        </BarGraph>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
