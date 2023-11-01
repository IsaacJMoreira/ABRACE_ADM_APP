"use client";
import {
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  Tabs,
  Text,
  TextField,
} from "@radix-ui/themes";

import { BarChartIcon } from "@radix-ui/react-icons";
import NextImage from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="sticky px-4 py-0 top-20 bg-[#ffffff50] w-100 backdrop-blur-sm ">
      <Tabs.Root defaultValue="resumo">
        <Tabs.List className="">
          <Tabs.Trigger value="resumo">
            <Flex direction="row" justify="between" align="center" gap="3">
              <BarChartIcon /> Resumo
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="resumo">
            <Flex direction="column" align="center" justify="between" gap="5">
              <Box className="w-full h-1/5">
                <Flex
                  direction="row"
                  justify="between"
                  align="center"
                  gap="5"
                >
                  <Card className="w-2/5 h-full">card1</Card>
                  <Card className="w-2/5 h-full">card2</Card>
                  <Card className="w-2/5 h-full">card3</Card>
                  <Card className="w-2/5 h-full">card4</Card>
                </Flex>
              </Box>
              <Box className="w-full h-1/5">
                <Flex
                  direction="row"
                  justify="between"
                  align="center"
                  gap="5"
                >
                  <Card className="w-3/5 h-full">card1</Card>
                  <Card className="w-3/5 h-full">card2</Card>
                  <Card className="w-3/5 h-full">card3</Card>
                 
                </Flex>
              </Box>
              <Box className="w-full h-1/5">
              <Card className="w-full h-full">card1</Card>
              </Box>

            </Flex>
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="settings">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  );
};

export default page;
