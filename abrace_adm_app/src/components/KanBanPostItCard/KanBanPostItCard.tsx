"use client";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import React from "react";
import { useState, ReactNode, FC } from "react";
import VOLUNTEER from "../../public/icons/volunteer-icon-10 1.png";
import DONATION from "../../public/icons/donation.png";
import ADOPTION from "../../public/icons/adoption.png";
import NextImage, { StaticImageData } from "next/image";

interface MyProps {
  children?: ReactNode;
  userName?: string;
  date?: string;
  type?: string;
}

function postItInteractiveSelector(type = "volunteer"): {
  title: string;
  icon: StaticImageData;
} {
  switch (type) {
    case "volunteer":
      return { title: "Novo Voluntário", icon: VOLUNTEER };
      break;
    case "donation":
      return { title: "Nova Doação", icon: DONATION };
      break;
    case "adoption":
      return { title: "Novo Pedido de Adoção", icon: ADOPTION };
      break;
    default:
      return { title: "Novo Voluntário", icon: VOLUNTEER };
  }
}

const KanBanPostItCard: FC<MyProps> = (props) => {
  const { title, icon } = postItInteractiveSelector(props.type);
  return (
    <Card className="w-full" variant="classic">
      <Flex direction="row" justify="between" gap="3" align="center">
        <Box>
          <Flex direction="row" justify="between" align="center" gap="2">
            <NextImage src={icon} alt={"voluntário"} width="32" />
            <Separator orientation="vertical" size="3" />
            <Box>
              <Flex direction="column" justify="between" align="start" gap="1">
                <Text as="div" size="1">
                  {title}
                </Text>
                <Heading size="3" color="lime">
                  {props.userName}
                </Heading>
                <Text as="div" size="1">
                  {props.date}
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box>
          <Flex
            direction="column"
            justify="between"
            gap="1"
            align="center"
            className="w-fit"
          >
            <Text as="div" size={"1"}>
              Marcar como:
            </Text>
            <Button size={"1"} color="tomato" className="w-full">
              Não Atendido
            </Button>

            <Button size={"1"} color="amber" className="w-full">
              Atendendo
            </Button>
            <Button size={"1"} color="lime" className="w-full">
              Atendido
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default KanBanPostItCard;
