import React, { useState, FC, ReactElement } from "react";
import DonationLocationsCard from "./DonationLocationsCard/DonationLocationsCard ";
import { Box, Card, Flex } from "@radix-ui/themes";
import RecurrentPaymentPlansCard from "./RecurrentPaymentPlansCard/RecurrentPaymentPlansCard";
import ONGInfoCard from "./ONGInfoCard/ONGInfoCard";
import EventsCard from "@/components/EventsCard/EventsCard";

const ControlPanel = () => {
  return (
    <Flex
      direction="row"
      justify="between"
      gap="3"
      style={{ height: "fit-content" }}
    >
      <Box className="w-full h-fit p-3">
        <Flex
          direction="row"
          justify="between"
          align="start"
          gap="5"
          wrap="wrap"
        >
          <ONGInfoCard />
          <Flex direction="column" gap="3">
            <Box>
              <Card> CARD DE APADRINHAMENTOS</Card>
            </Box>
            <Box>
              <Flex direction="row" gap="3">
                <DonationLocationsCard />
                <RecurrentPaymentPlansCard />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ControlPanel;
