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

const adocoes = [3, 5, 2, 1, 7, 10, 5];
const devolucoes = [1, 0, 0, 0, 0, 5, 4];

const data = {
  labels,
  datasets: [
    {
      label: "Adoções",
      data: adocoes,
      backgroundColor: "#F7EB7A",
      stack: "Stack 0",
    },
    {
      label: "Desistências",
      data: devolucoes,
      backgroundColor: "#F5382D",
      stack: "Stack 1",
    },
  ],
};

const AdoptionCard = () => {
  return (
    <Card className="w-fit h-fit">
      <Inset
        clip="padding-box"
        side="top"
        pb="current"
        className="h-[250px] "
      >
        <Bar
          options={options}
          data={data}
          className="  w-[500px] bg-gradient-to-br from-[#DDFDFF] to-[#9CCCCE] p-3"
        />
      </Inset>
      <Flex direction="column" justify="between" align="center" gap="3">
        <Heading size="7">Adoções</Heading>

        <Separator orientation="horizontal" size="4" />
        <Heading size="5" color="sky">{` total para ${labels[5]}: ${
          adocoes[5] - devolucoes[5]
        }`}</Heading>
      </Flex>
    </Card>
  );
};

export default AdoptionCard;
