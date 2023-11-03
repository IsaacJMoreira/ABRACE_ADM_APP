"use client";
import {
  Cross1Icon,
  CheckIcon,
  CheckboxIcon,
  ChevronDownIcon,
  ExitIcon,
  PersonIcon,
  LockClosedIcon,
  AvatarIcon,
  TriangleDownIcon,
  ClipboardIcon,
} from "@radix-ui/react-icons";
import {
  Card,
  Flex,
  Box,
  Text,
  Button,
  ScrollArea,
  Inset,
  Heading,
} from "@radix-ui/themes";
import NextImage from "next/image";
import gardDog from "../public/images/gardDog.png";
import WhoArU from "../public/icons/53324372.png";
import Link from "next/link";

const Home = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="h-screen"
    >
      <Card className="w-1/3">
        <Flex direction="column" align="center" justify="between" gap="3">
          <NextImage src={gardDog} alt="acesso restrito" width="150" />
          <Heading size="8" color="tomato">
            ACESSO RESTRITO
          </Heading>
          <Text as="div" align="center" size='6' weight='medium' color="lime">
            O acesso à plataforma administrativa<strong> ABRACE</strong> é restrito aos
            adminstradores da ONG. Por favor faça seu login na plataforma.
          </Text>
          
        </Flex>
      </Card>
    </Flex>
  );
};

export default Home;
