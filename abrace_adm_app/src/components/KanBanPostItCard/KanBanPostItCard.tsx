"use client";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogClose,
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
import SPONSOR from "../../public/icons/pet-dog.png";
import NextImage, { StaticImageData } from "next/image";
import {
  Cross1Icon,
  DotsHorizontalIcon,
  MinusIcon,
} from "@radix-ui/react-icons";

interface MyProps {
  children?: ReactNode;
  userName?: string;
  userID?: string;
  petName?: string;
  petID?: string;
  eventName?: string;
  eventID?: string;
  donationValue?: string;
  sponsorType?: string;
  sponsoredValue?: string;
  sponsoredItem?: string;
  donationMessage?: string;
  date?: string;

  type: string;
}

interface PostIt {
  [type: string]: {
    title: string;
    icon: StaticImageData;
    detailText: string;
  };
}

const PostItInteractiveSelector: PostIt = {
  volunteer: {
    title: "Novo Voluntário",
    icon: VOLUNTEER,
    detailText: "se voluntariou para",
  },
  donation: { title: "Nova Doação", icon: DONATION, detailText: "doou" },
  adoption: {
    title: "Novo Pedido de Adoção",
    icon: ADOPTION,
    detailText: "pediu para adotar",
  },
  sponsor: {
    title: "Novo Apadrinhamento",
    icon: SPONSOR,
    detailText: "apadrinhou",
  },
};

const KanBanPostItCard: FC<MyProps> = (props) => {
  const { title, icon, detailText } = PostItInteractiveSelector[props.type];

  const explanation = `${props.userName} ${detailText}${
    props.type === "donation" ? ` R$${props.donationValue}` : ""
  } ${props.eventName ? props.eventName : ""} ${
    props.petName ? props.petName : ""
  }`;

  const sponsorDetails =
    props.type === "sponsor"
      ? `Tipo de Apadrinhamento: ${props.sponsorType} - ${
          props.sponsoredItem
            ? props.sponsoredItem
            : `R$ ${props.sponsoredValue}`
        }`
      : "";

  return (
    <Card className="w-full" variant="classic">
      <Flex direction="row" justify="between" gap="3" align="center">
        <Box>
          <Flex direction="row" justify="between" align="center" gap="2">
            <NextImage src={icon} alt={"voluntário"} width="32" />
            <Separator orientation="vertical" size="3" />
            <Box>
              <Flex direction="column" justify="between" align="start" gap="1">
                <Box>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button variant="ghost" size="1" color="gold">
                        <Text as="p" weight="bold">
                          {title}
                        </Text>

                        <Separator orientation="vertical" size="1" />
                        <Tooltip content={`Detalhes de ${title}`}>
                          <DotsHorizontalIcon />
                        </Tooltip>
                      </Button>
                    </Dialog.Trigger>
                    <Dialog.Content style={{ width: 1000 }}>
                      <Dialog.Title>
                        <Flex direction="row" justify="between">
                          {title}
                          <Dialog.Close>
                            <Button variant="surface" color="tomato">
                              <Cross1Icon />
                            </Button>
                          </Dialog.Close>
                        </Flex>
                      </Dialog.Title>

                      <Dialog.Description>
                        <Text as="div" weight="medium">
                          {explanation}
                        </Text>
                        <Text as="div" size="1">
                          {sponsorDetails}
                        </Text>
                      </Dialog.Description>
                      <Separator orientation="horizontal" size="4" />
                      <br />

                      <Flex direction="row" justify="between" gap="3">
                        <Box className="p-1 w-full">
                          <Flex
                            direction="column"
                            justify="start"
                            align="start"
                            gap="1"
                          >
                            <Text as="div">
                              {props.donationMessage ? (
                                <>
                                  <Flex
                                    direction="column"
                                    align="start"
                                    justify="start"
                                    gap="3"
                                  >
                                    <Card
                                      variant="ghost"
                                      className="bg-gradient-to-br from-slate-500 to-slate-800 shadow-md shadow-slate-600"
                                    >
                                      <Flex
                                        direction="column"
                                        justify="between"
                                        gap="1"
                                      >
                                        <Text
                                          as="div"
                                          weight="medium"
                                          size="2"
                                          className="bg-gradient-to-r from-amber-300 to-orange-400   text-transparent bg-clip-text  w-fit "
                                        >
                                          {`${props.userName}`}
                                        </Text>
                                        <Text
                                          as="div"
                                          size="1"
                                          weight="bold"
                                          className="bg-gradient-to-br from-lime-200 to-amber-400 inline-block text-transparent bg-clip-text"
                                        >
                                          "{props.donationMessage}"
                                        </Text>
                                      </Flex>
                                    </Card>
                                  </Flex>
                                </>
                              ) : (
                                ""
                              )}
                            </Text>
                            <br />

                            <Flex direction="row" justify="between" gap="3">
                              <Button
                                variant="soft"
                                color="cyan"
                              >{`Perfil de ${props.userName}`}</Button>
                              {props.type === "adoption" ||
                              props.type === "sponsor" ? (
                                <Button
                                  variant="soft"
                                  color="orange"
                                >{`Perfil de ${props.petName}`}</Button>
                              ) : props.type === "donation" ? (
                                ""
                              ) : (
                                <Button variant="soft" color="orange">
                                  {props.eventName}
                                </Button>
                              )}
                            </Flex>
                          </Flex>
                        </Box>

                        <Box>
                          <Flex
                            direction="column"
                            justify="between"
                            gap="1"
                            align="center"
                            className="w-fit min-w-[110px] p-1 border-zinc-300 border rounded-lg"
                          >
                            <Text as="div" size={"1"}>
                              Marcar como
                            </Text>
                            <Dialog.Close>
                              <Button
                                size={"1"}
                                color="tomato"
                                className="w-full"
                              >
                                <Tooltip content='Passar para "Novas Atividades"'>
                                  <Text as="div">Não Atendido</Text>
                                </Tooltip>
                              </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                              <Button
                                size={"1"}
                                color="amber"
                                className="w-full"
                              >
                                <Tooltip content='Passar para "Atividades em Atendimento"'>
                                  <Text as="div">Atendendo</Text>
                                </Tooltip>
                              </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                              <Button
                                size={"1"}
                                color="lime"
                                className="w-full"
                              >
                                <Tooltip content='Passar para "Atividades Atendidas"'>
                                  <Text as="div">Atendido</Text>
                                </Tooltip>
                              </Button>
                            </Dialog.Close>
                          </Flex>
                        </Box>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>
                </Box>
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
            className="w-fit p-1 border-zinc-300 border rounded-lg"
          >
            <Text as="div" size={"1"}>
              Marcar como
            </Text>
            <Button size={"1"} color="tomato" className="w-full">
              <Tooltip content='Passar para "Novas Atividades"'>
                <Text as="div">Não Atendido</Text>
              </Tooltip>
            </Button>

            <Button size={"1"} color="amber" className="w-full">
              <Tooltip content='Passar para "Atividades em Atendimento"'>
                <Text as="div">Atendendo</Text>
              </Tooltip>
            </Button>
            <Button size={"1"} color="lime" className="w-full">
              <Tooltip content='Passar para "Atividades Atendidas"'>
                <Text as="div">Atendido</Text>
              </Tooltip>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default KanBanPostItCard;
