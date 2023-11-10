import React, { useState, FC, ReactElement } from "react";
import DonationLocationsCard from "./DonationLocationsCard/DonationLocationsCard ";
import { Box, Card, Flex, Separator } from "@radix-ui/themes";
import RecurrentPaymentPlansCard from "./RecurrentPaymentPlansCard/RecurrentPaymentPlansCard";
import ONGInfoCard from "./ONGInfoCard/ONGInfoCard";
import EventsCard from "@/components/EventsCard/EventsCard";

const ControlPanel = () => {
  return (
    <Flex
      direction="column"
      justify="between"
      gap="1"
      style={{ height: "fit-content" }}
      wrap="wrap"
      className="p-2"
    >
      <Box>
        <Flex direction="row" justify="between" align='center' gap='3'>
          <DonationLocationsCard />
          <RecurrentPaymentPlansCard />
        </Flex>
      </Box>
      <ONGInfoCard />
    </Flex>
  );
};

export default ControlPanel;
