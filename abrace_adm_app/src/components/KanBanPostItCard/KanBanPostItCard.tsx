"use client";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Separator,
  Text,
  Tooltip,
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
  type: string;
}

interface PostIt {
  [type: string]: {
    title: string;
    icon: StaticImageData;
  };
}

const PostItInteractiveSelector: PostIt = {
  volunteer: { title: "Novo Voluntário", icon: VOLUNTEER },
  donation: { title: "Nova Doação", icon: DONATION },
  adoption: { title: "Novo Pedido de Adoção", icon: ADOPTION },
};

const KanBanPostItCard: FC<MyProps> = (props) => {
  const { title, icon } = PostItInteractiveSelector[props.type];
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
              <Tooltip content='Passar para "Novas Atividades"'>
                <Text as='div'>Não Atendido</Text>
              </Tooltip>
            </Button>

            <Button size={"1"} color="amber" className="w-full">
              <Tooltip content='Passar para "Atividades em Atendimento"'>
                <Text as='div'>Atendendo</Text>
              </Tooltip>
            </Button>
            <Button size={"1"} color="lime" className="w-full">
              <Tooltip content='Passar para "Atividades Atendidas"'>
                <Text as='div'>Atendido</Text>
              </Tooltip>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default KanBanPostItCard;
