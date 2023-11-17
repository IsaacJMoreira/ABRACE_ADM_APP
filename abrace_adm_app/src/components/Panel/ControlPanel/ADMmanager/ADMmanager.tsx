import ADMcard from "@/components/ADMCard/ADMcard";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  Heading,
  ScrollArea,
  Separator,
  TextField,
  Tooltip,
  Text,
  Select,
  Strong,
} from "@radix-ui/themes";
import React from "react";

const ADMmanager = () => {
  return (
    <Card className="w-fit">
      <Flex direction="column" justify="between" gap="1">
        <Flex direction="row" justify="between" align="center">
          <Heading color="amber" size="4">
            Administradores
          </Heading>
          <Dialog.Root>
            {/* FLAG - only ADM2 SHOULD BE ABLE TO MAKE THIS ACTION */}
            <Dialog.Trigger disabled = {false}>
              <Button variant="surface" size="1" color="amber">
                <Tooltip content="Adicionar um novo administrador">
                  <Flex direction="row" gap="1">
                    Adicionar
                    <Separator orientation="vertical" size='1'/>
                    <PlusIcon />
                  </Flex>
                </Tooltip>
              </Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Flex direction="column" justify="between" gap="1">
                <Dialog.Title>
                  Adicionar novo Administrador da Plataforma
                </Dialog.Title>
                <Separator orientation="horizontal" size="4" />
                <TextField.Root>
                  <TextField.Slot>Nome:</TextField.Slot>
                  <TextField.Input placeholder="" />
                </TextField.Root>
                <TextField.Root>
                  <TextField.Slot>E-mail:</TextField.Slot>
                  <TextField.Input placeholder="" />
                </TextField.Root>
                <TextField.Root>
                  <TextField.Slot>Senha:(*)</TextField.Slot>
                  <TextField.Input placeholder="" />
                </TextField.Root>
                {/* FLAG - defaultOpen = true : impede a abertura da select */}
                <Select.Root defaultValue="l1" >
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Item value="select" disabled>
                      Selecionar Nível:
                    </Select.Item>
                    <Select.Item value="l1">
                      Nível 1 - gerenciamento restrito da plataforma
                    </Select.Item>
                    {/* FLAG - ESTA INFORMAÇÃO DEVE VIR COM O TOKEN */}
                    <Select.Item value="l2" disabled={true}>
                      Nível 2 - gerenciamento total da plataforma
                    </Select.Item>
                  </Select.Content>
                </Select.Root>
                <Text as="div" size="1" color="tomato">
                  (*) - esta senha é provisória e deverá ser modificada no
                  primeiro acesso do novo Administrador.
                </Text>
                <Text as="div" size="1" color="tomato">
                  <Strong>OBS:</Strong> Por medida de segurança, penas
                  administradores Nível 2 podem adicionar outro administrador
                  Nível 2.{" "}
                </Text>
                <Text as="div" size="1" color="tomato">
                  <Strong>Nível 1</Strong> - não autorizado a modificar as
                  informações financeiras da ONG ou excluir outro administrador
                </Text>
                <Text as="div" size="1" color="tomato">
                  <Strong>Nível 2</Strong> - possui permissão para modificar
                  todas as informações no APP, inlusive relacionadas à
                  pagamentos. É de extrema importância que esta credencial só
                  seja concedida à membros de confiança.
                </Text>
                <Separator orientation="horizontal" size='4'/>
                <Flex direction="row" justify="between" align="center">
                  <Dialog.Close>
                    <Button variant="surface">ADICIONAR</Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button variant="surface" color='amber'>VOLTAR</Button>
                  </Dialog.Close>
                </Flex>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </Flex>
        <Separator orientation="horizontal" size="4" />
        <ScrollArea
          type="always"
          scrollbars="vertical"
          style={{ height: "100%", maxHeight: 500 }}
        >
          <Box p="2" pr="8">
            <Flex direction="column" justify="between" gap="1">
              <ADMcard credential="ADM1" name="Fulano Silva de Tal"/>
              <ADMcard credential="ADM2" name='Ciclano da Crus silva'/>
              <ADMcard credential="ADM1"name='Maria Aparecida de Tal'/>
            </Flex>
          </Box>
        </ScrollArea>
      </Flex>
    </Card>
  );
};

export default ADMmanager;
