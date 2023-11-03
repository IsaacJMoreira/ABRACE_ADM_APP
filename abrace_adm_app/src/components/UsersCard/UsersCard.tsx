'use client';
import { Card, Flex, Heading, Inset, Separator } from "@radix-ui/themes";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      color: "black",
      display: true,
      text: "Dados para o ano de 2022",
    },
  },
};

const labels = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const users = [3, 5, 2, 1, 7, 10, 5];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Novos Usuários",
      data: users,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const RevenueCard = () => {
  return (
    <Card className="w-fit h-fit  ">
      <Inset clip="padding-box" side="top" pb="current" className="h-[250px] ">
        <Line
          options={options}
          data={data}
          className="  w-[500px]  bg-gradient-to-br from-[#FFF9C4] to-[#F7EB7Af0] p-3"
        />
      </Inset>
      <Flex direction="column" justify="between" align="center" gap="3">
        <Heading size="7">
          Usuários
        </Heading>
        

        <Separator orientation="horizontal" size="4" />
        <Heading size="5" color="sky">{`Total: ${users.reduce(
          (acumulator, currentValue) => {
            return (acumulator += currentValue);
          }
        )}`}</Heading>
      </Flex>
    </Card>
  );
};

export default RevenueCard;
