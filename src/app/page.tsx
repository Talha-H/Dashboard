import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Card, { CardProps } from "@/components/Card";
import { Activity, CreditCard, DollarSignIcon, User } from "lucide-react";
import BarChart from "@/components/BarChart";
import Sales, { SalesProps } from "@/components/Sales";
import Users from "@/app/users/page";

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
const UserSaleData: SalesProps[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    amount: "+$342.50",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    amount: "+$485.50",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    amount: "+$1992.50",
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    amount: "+$862.00",
  },
  {
    name: "Dely down",
    email: "dely.down@example.com",
    amount: "+$3262.00",
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
      <section className="grid w-full grid-cols-1 lg:grid-cols-2 gap-x-8 gap-4 transition-all">
        <div className="flex w-full rounded-xl flex-col gap-3 border p-5 shadow">
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </div>
        <div className="flex w-full rounded-xl flex-col gap-3 border p-5 shadow justify-between">
          <section>
            <p>Recent Sales</p>
            <p className="text-gray-400 text-sm">
              You made 144 sale this month
            </p>
          </section>
          {UserSaleData.map((ind, dat) => (
            <Sales
              key={dat}
              name={ind.name}
              email={ind.email}
              amount={ind.amount}
            />
          ))}
        </div>
      </section>

      <section>
        <Users
          id={0}
          amount={0}
          status={"Active"}
          email={""}
          name={""}
          paymentMethod={""}
        />
      </section>
    </div>
  );
}
