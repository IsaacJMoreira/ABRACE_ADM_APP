import React from "react";
import DonationLocationsCard from "./DonationLocationsCard/DonationLocationsCard ";
import { Box, Flex } from "@radix-ui/themes";
import RecurrentPaymentPlansCard from "./RecurrentPaymentPlansCard/RecurrentPaymentPlansCard";
import EventsCard from "./EventsCard/EventsCard";

const ControlPanel = () => {
  return (
    <Flex direction="row" justify="between" gap="5">
      <Box className="w-full h-fit p-3">
        <Flex
          direction="row"
          justify="between"
          align="start"
          gap="1"
          wrap="wrap"
        >
          <EventsCard />
          <DonationLocationsCard />
          <RecurrentPaymentPlansCard />
        </Flex>
      </Box>
    </Flex>
  );
};

export default ControlPanel;
