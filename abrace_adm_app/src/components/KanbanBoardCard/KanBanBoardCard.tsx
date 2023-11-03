"use client";

import {
  Box,
  Card,
  Flex,
  Heading,
  ScrollArea,
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
        <Heading size="7" align="center">
          Últimas Atividades no App
        </Heading>
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
            className="m-2 w-2/5 bg-gradient-to-br from-[#F3B4B0] to-[#e66a63]"
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
                      date={`${dia}/${mes}/${ano}`}
                      type="donation"
                    />
                    <KanBanPostItCard
                      userName="João"
                      date={`${dia}/${mes}/${ano}`}
                      type="volunteer"
                    />
                  </Flex>
                </Box>
              </ScrollArea>
            </Flex>
          </Card>
          <Card
            className="w-2/5 bg-gradient-to-br from-[#FFF9C4] to-[#F7EB7Af0]"
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
            className="w-2/5 bg-gradient-to-br from-[#EAF4E3] to-[#96D279]"
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
