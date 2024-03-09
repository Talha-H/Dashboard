import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Card, { CardProps } from "@/components/Card";
import { Activity, CreditCard, DollarSignIcon, User } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Item 1",
    amount: "10.99",
    icon: DollarSignIcon,
    desc: "Description of item 1",
  },
  {
    label: "Item 2",
    amount: "20.49",
    icon: User,
    desc: "Description of item 2",
  },
  {
    label: "Item 3",
    amount: "5.99",
    icon: CreditCard,
    desc: "Description of item 3",
  },
  {
    label: "Item 4",
    amount: "15.75",
    icon: Activity,
    desc: "Description of item 4",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 transition-all gap-x-8 gap-4">
        {cardData.map((item, index) => (
          <Card
            amount={item.amount}
            desc={item.desc}
            icon={item.icon}
            label={item.label}
            key={index}
          />
        ))}
      </section>
    </div>
  );
}
