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
import React from "react";
import RevenueCard from "@/components/RevenueCard/RevenueCard";
import AdoptionCard from "@/components/AdoptionCard/AdoptionCard";
import UsersCard from "@/components/UsersCard/UsersCard";
import KanBanBoardCard from "@/components/KanbanBoardCard/KanBanBoardCard";

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
            <Flex direction="column" align="center" justify="between" gap="5" wrap='wrap'>
              <Box className="w-full h-fit min-h-[300px]">
                <Flex direction="row" justify="between" align="center" gap="2" wrap='wrap'>
                  <RevenueCard />
                  <AdoptionCard />
                  <UsersCard />
                </Flex>
              </Box>

              <Box className="w-full h-fit">
                <KanBanBoardCard />
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
