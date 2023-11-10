"use client";

import {
  Box,
  Button,
  Card,
  DropdownMenu,
  Flex,
  Heading,
  ScrollArea,
  Select,
  Separator,
} from "@radix-ui/themes";
import React from "react";
import KanBanPostItCard from "../KanBanPostItCard/KanBanPostItCard";
import { type } from "os";

const date = new Date();
const dia = date.getDay();
const mes = date.getMonth();
const ano = date.getFullYear();

const KanBanBoardCard = () => {
  return (
    <Card>
      <Flex direction="column" align="center" justify="between" gap="3">
        <Flex direction="row" justify="between" gap="3" align='center' >
          <Heading size="5" align="center" >
            Atividades em Atendimento
          </Heading>
          <Separator orientation="vertical" size='1'/>
          <Select.Root defaultValue= {'semana'}>
            Mostrar:
            <Select.Trigger/>
            <Select.Content>
              <Select.Group>
                <Select.Item value="hoje">Hoje</Select.Item>
                <Select.Item value="semana">Esta semana</Select.Item>
                <Select.Item value="mes">Este Mês</Select.Item>
                <Select.Item value="ano">Este Ano</Select.Item>
                <Select.Item value="tudo">Tudo</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
         
        </Flex>

        <Separator orientation="horizontal" size="4" />
        <Flex
          direction="row"
          align="start"
          justify="between"
          gap="5"
          className="w-full p-3"
        >
          <Card
            variant="ghost"
            className="m-1 w-2/5 bg-gradient-to-br from-[#F3B4B080] to-[#e66a6380]"
          >
            <Flex direction="column" align="center" justify="between" gap="3">
              <Heading size="5" align="center" color="tomato">
                Novas Atividades
              </Heading>
              <Separator orientation="horizontal" size="4" />
              <ScrollArea
                type="always"
                scrollbars="vertical"
                style={{ height: 500 }}
              >
                <Box p="2" pr="8">
                  <Flex direction="column" gap="1">
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      donationValue="10.00"
                      donationMessage="Oi, pessoal da ABRACE! Espero que o valor ajude!"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="João"
                      date={`${dia}/${mes}/${ano}`}
                      type="volunteer"
                      eventName='evento Teste1'
                    />
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      petName="Clarinha"
                      sponsoredItem="Osso Limpa Gengiva"
                      sponsorType="Doação de Item"
                      donationMessage="Vamos cuidar dessa gengiva, Clarinha? Deixei seu ossinho na PetShop Fictícia 1"
                      date={`${dia}/${mes}/${ano}`}
                      type="sponsor"
                    />
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      petName="Bolinha"
                      sponsorType="PIX"
                      sponsoredValue="100.00"
                      donationMessage="Oi, Bolinha! Espero que o valor ajude na consulta!"
                      date={`${dia}/${mes}/${ano}`}
                      type="sponsor"
                    />
                     <KanBanPostItCard
                      userName="Isaac Moreira"
                      petName="Thomas"
                      date={`${dia}/${mes}/${ano}`}
                      type="adoption"
                    />
                  </Flex>
                </Box>
              </ScrollArea>
            </Flex>
          </Card>
          <Card
            className=" m-1  w-2/5 bg-gradient-to-br from-[#FFF9C480] to-[#F7EB7A80]"
            variant="ghost"
          >
            <Flex direction="column" align="center" justify="between" gap="3">
              <Heading size="5" align="center" color="yellow">
                Atividades em Atendimento
              </Heading>

              <Separator orientation="horizontal" size="4" />
              <ScrollArea
                type="always"
                scrollbars="vertical"
                style={{ height: 500 }}
              >
                <Box p="2" pr="8">
                  <Flex direction="column" gap="1">
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="João"
                      date={`${dia}/${mes}/${ano}`}
                      type="volunteer"
                    />
                    <KanBanPostItCard
                      userName="Lara Maria"
                      date={`${dia}/${mes}/${ano}`}
                      type="adoption"
                    />
                    <KanBanPostItCard
                      userName="Maria Clara"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                  </Flex>
                </Box>
              </ScrollArea>
            </Flex>
          </Card>
          <Card
            className=" m-1 w-2/5 bg-gradient-to-br from-[#EAF4E380] to-[#96D27980]"
            variant="ghost"
          >
            <Flex direction="column" align="center" justify="between" gap="3">
              <Heading size="5" align="center" color="lime">
                Atividades Atendidas
              </Heading>
              <Separator orientation="horizontal" size="4" />
              <ScrollArea
                type="always"
                scrollbars="vertical"
                style={{ height: 500 }}
              >
                <Box p="2" pr="8">
                  <Flex direction="column" gap="1">
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="João"
                      date={`${dia}/${mes}/${ano}`}
                      type="volunteer"
                    />
                    <KanBanPostItCard
                      userName="Lara Maria"
                      date={`${dia}/${mes}/${ano}`}
                      type="adoption"
                    />
                    <KanBanPostItCard
                      userName="Maria Clara"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="João"
                      date={`${dia}/${mes}/${ano}`}
                      type="volunteer"
                    />
                    <KanBanPostItCard
                      userName="Lara Maria"
                      date={`${dia}/${mes}/${ano}`}
                      type="adoption"
                    />
                    <KanBanPostItCard
                      userName="Maria Clara"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="João"
                      date={`${dia}/${mes}/${ano}`}
                      type="volunteer"
                    />
                    <KanBanPostItCard
                      userName="Lara Maria"
                      date={`${dia}/${mes}/${ano}`}
                      type="adoption"
                    />
                    <KanBanPostItCard
                      userName="Maria Clara"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="Isaac Moreira"
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                  </Flex>
                </Box>
              </ScrollArea>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </Card>
  );
};

export default KanBanBoardCard;
