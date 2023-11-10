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
      gap="6"
      style={{ height: "fit-content" }}
      wrap="wrap"
      className="p-2"
    >
      <ONGInfoCard />

      <DonationLocationsCard />
      <RecurrentPaymentPlansCard />
    </Flex>
  );
};

export default ControlPanel;
