"use client";
import {
  Box,
  Flex,
  Tabs,
  Text,  
} from "@radix-ui/themes";

import {
  AvatarIcon,
  BarChartIcon,
  CalendarIcon,
  GearIcon,
  HeartIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import React, { useContext } from "react";
import Sumary from "@/components/Panel/Sumary/Sumary";
import ControlPanel from "@/components/Panel/ControlPanel/ControlPanel";
import EventsCard from "@/components/EventsCard/EventsCard";
import ManageEvents from "@/components/Panel/ManageEvets/ManageEvents";
import ManagePets from "@/components/Panel/ManagePets/ManagePets";



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
          
          <Tabs.Trigger value="pets">
            <Flex direction="row" justify="between" align="center" gap="3">
              <HeartIcon /> Gerenciar Pets
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="eventos">
            <Flex direction="row" justify="between" align="center" gap="3">
              <CalendarIcon /> Gerenciar Eventos
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="usuarios">
            <Flex direction="row" justify="between" align="center" gap="3">
              <AvatarIcon /> Gerenciar Usuários
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="painelDeControle">
            <Flex direction="row" justify="between" align="center" gap="3">
              <GearIcon /> Painel de Controle
            </Flex>
          </Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="resumo">
            <Sumary/>
          </Tabs.Content>

          <Tabs.Content value="painelDeControle">
            <ControlPanel/>
          </Tabs.Content>

          <Tabs.Content value="pets">
            <ManagePets/>
          </Tabs.Content>
          <Tabs.Content value="eventos">
          
          <ManageEvents/>


          </Tabs.Content>
          <Tabs.Content value="usuarios">
            <Text size="2">Adiciona, modifica e deleta usuários e administradores no sistema</Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  );
};

export default page;
