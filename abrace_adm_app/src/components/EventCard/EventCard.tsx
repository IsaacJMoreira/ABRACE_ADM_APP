"use client";
import {
  Card,
  Flex,
  Text,
  Button,
  ScrollArea,
  Inset,
  Dialog,
  Link,
  Box,
  Heading,
} from "@radix-ui/themes";
import NextImage, { StaticImageData } from "next/image";

import DONATEIcon from "../../public/assets/icons/2904845 1.png";

import { FC, ReactNode, useEffect } from "react";
import React from "react";

import { ChevronLeftIcon, HeartFilledIcon } from "@radix-ui/react-icons";

interface IMGProps {
  URL?: string;
  ALT?: string;
}

interface MyProps {
  children?: ReactNode;
  name: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  description: string;
  imgURL?: IMGProps;
  linkToLocation: string;
  URL: StaticImageData;
  ALT: string;
  eventID?: string;
}

interface DisclaimerProps {
  eventID?: string;
}

const EventCard: FC<MyProps> = (props) => {
  return (
    <Card variant="surface">
      <Flex direction="row" justify="between" gap="2">
        <Inset clip="border-box" side="left" pb="0">
          <NextImage className="w-[200px]" src={props.URL} alt={props.ALT} />
        </Inset>
        <Box>
          <Flex direction="column" justify="start" style={{width: 200}}>
            <Heading size="4" color="amber">
              {props.name}
            </Heading>
          </Flex>
        </Box>
        <Box>
          <Flex direction="column" justify="between" gap={"1"} align="center">
            <Button>X</Button>
            <Button>!</Button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default EventCard;
