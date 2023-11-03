'use client';

import { Card, Flex, Heading, Inset, Separator } from "@radix-ui/themes";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      color: "black",
      text: "Dados para o ano de 2022",
    },
  },
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
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

const pix = [300, 500, 2000, 1350, 705, 1030, 400];
const mensalista = [1000, 200, 4500, 10, 450, 50, 40];

const data = {
  labels,
  datasets: [
    {
      label: "Pix",
      data: pix,
      backgroundColor: "#96D279",
      stack: "Stack 0",
    },
    {
      label: "Mensalista",
      data: mensalista,
      backgroundColor: "#5F6832",
      stack: "Stack 1",
    },
  ],
};




const RevenueCard = () => {
  return (
    <Card className="w-fit h-fit">
      <Inset clip="padding-box" side="top" pb="current" className="h-[250px] ">
        <Bar
          options={options}
          data={data}
          className="  w-[500px]   bg-gradient-to-br from-[#F3B4B0] to-[#e66a63]  p-3"
        />
      </Inset>
      <Flex direction="column" justify="between" align="center" gap="3">
        <Heading size="7">Doações</Heading>
        <Separator orientation="horizontal" size="4" />

        <Heading size="5" color="sky">{`Total: R$ ${pix.map((element, index)=>{return element += mensalista[index]}).reduce((acumulator, currentElement)=>{ return acumulator += currentElement}).toFixed(2)}`}</Heading>
      </Flex>
    </Card>
  );
};

export default RevenueCard;
