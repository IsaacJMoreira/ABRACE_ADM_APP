import {
  Badge,
  Box,
  Card,
  Flex,
  Separator,
  colorProp,
  Text,
  Heading,
  Button,
  Tooltip as ToolTip,
} from "@radix-ui/themes";
import React, { FC } from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

{
  /* <PolarArea data={data} style={{width: 300, height: 300}}/> */
}

interface SingleUserProps {
  name: string;
  testData: Array<number>;
  aptitude: string;
  dateOfRegistry: string;
}

interface AptitudeBadge {
  [type: string]: {
    aptitudeColor: typeof colorProp.default;
    aptitudeText: string;
  };
}

const aptitudeBadge: AptitudeBadge = {
  apto: { aptitudeColor: "lime", aptitudeText: "Apto" },
  inapto: { aptitudeColor: "tomato", aptitudeText: "Inapto" },
  pendente: { aptitudeColor: "amber", aptitudeText: "Pendente" },
};

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const SingleUserCard: FC<SingleUserProps> = (props) => {
  const data = {
    labels: [
      "Renda",
      "Membros na mesma Residência",
      "Segurança",
      "Espaço",
      "Transporte",
      "Preparativos",
    ],

    datasets: [
      {
        options: {
          pluins: {
            legend: {
              display: false,
            },
          },
        },
        label: "Nota",
        data: props.testData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const { aptitudeColor, aptitudeText } = aptitudeBadge[props.aptitude];
  return (
    <Card>
      <Flex direction="row" justify="between" align="center" gap="3">
        <Box>
          <Flex direction="row" justify="between" align="center" gap="3">
            <Heading color={aptitudeColor} size="4">
              {props.name}
            </Heading>
          </Flex>
        </Box>
        <Box></Box>
        <Box>
          <Flex direction="row" justify="between" align="center" gap="3">
            <Flex direction="column" justify="between" gap="1">
              <Text size='1' weight='bold'>Data de Registro</Text>
              <Text as="div" align="center"  className="bg-lime-100 rounded-xl">{props.dateOfRegistry}</Text>
              
            </Flex>

            <Flex direction="column" justify="between" gap="1">
              <Button size="1" variant="surface" color={aptitudeColor}>
                Perfil Completo
                <Separator orientation="vertical" size='1'/>
                <DotsHorizontalIcon/>
              </Button>
            </Flex>
            <Separator orientation="vertical" size="3" />
            <Box style={{ width: 70 }}>
              <Flex justify="center" align="center">
                <Badge variant="solid" color={aptitudeColor}>
                  <ToolTip
                    content={`Estatus da Ficha de Adoção: ${aptitudeText}`}
                  >
                    <Text as="div">{aptitudeText}</Text>
                  </ToolTip>
                </Badge>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default SingleUserCard;
