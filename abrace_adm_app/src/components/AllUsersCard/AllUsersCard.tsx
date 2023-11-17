import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Separator,
  TextField,
} from "@radix-ui/themes";
import React from "react";
import SingleUserCard from "../SilgleUserCard/SingleUserCard";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const AllUsersCard = () => {
  return (
    <Card>
      <Flex direction="column" justify="between" gap="3" className="w-full">
        <Box>
          <Flex direction="row" justify="between" gap="5" align="center">
            <Heading size="4" color="lime">Usuários Cadastrados na Plataforma</Heading>
            <TextField.Root style={{width: 300}}>
              <TextField.Slot>
                <MagnifyingGlassIcon />
              </TextField.Slot>
              <TextField.Input variant="classic" radius="full" placeholder="busque Usuário por nome ou email"/>
            </TextField.Root>
          </Flex>
        </Box>
        <Separator orientation="horizontal" size="4" />
        <SingleUserCard 
        aptitude="pendente"
        name='Fulano Silva de Tal'
        dateOfRegistry="12/12/2023"
        testData={[1,2,3,4,5,6]}/>
         <SingleUserCard 
        aptitude="apto"
        name='Ciclano José da Silva'
        dateOfRegistry="10/12/2023"
        testData={[1,2,3,4,5,6]}/>
         <SingleUserCard 
        aptitude="inapto"
        name='Beltrano de Maria Júnior'
        dateOfRegistry="12/11/2023"
        testData={[1,2,3,4,5,6]}/>
      </Flex>
    </Card>
  );
};

export default AllUsersCard;
