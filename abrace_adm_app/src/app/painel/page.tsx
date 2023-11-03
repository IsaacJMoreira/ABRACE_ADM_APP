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

import {
  AvatarIcon,
  BarChartIcon,
  CalendarIcon,
  GearIcon,
  HeartIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
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
          <Tabs.Trigger value="painelDeControle">
            <Flex direction="row" justify="between" align="center" gap="3">
              <GearIcon /> Painel de Controle
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
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="resumo">
            <Flex
              direction="column"
              align="center"
              justify="between"
              gap="3"
              wrap="wrap"
            >
              <Box className="w-full h-fit min-h-[300px]">
                <Flex
                  direction="row"
                  justify="between"
                  align="center"
                  gap="1"
                  wrap="wrap"
                >
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

          <Tabs.Content value="painelDeControle">
            <Text size="2">
              Adita: Endereços dos locais de coleta, planos de pagamento
              recorrente, informçaões de pix e banco
            </Text>
          </Tabs.Content>

          <Tabs.Content value="pets">
            <Text size="2">Adiciona, modifica e deleta pets no sistema</Text>
          </Tabs.Content>
          <Tabs.Content value="eventos">
            <Text size="2">Adiciona, modifica e deleta eventos no sistema</Text>
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
