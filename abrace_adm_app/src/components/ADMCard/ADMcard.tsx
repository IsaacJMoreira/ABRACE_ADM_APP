import { AlertDialog, Box, Button, Card, Dialog, Flex, Separator, Strong, Text } from "@radix-ui/themes";
import React, { FC } from "react";
import NextImage, { StaticImageData } from "next/image";
import ADM1 from "../../public/icons/ADMlevel1.png";
import ADM2 from "../../public/icons/ADMlevel2.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CredentialBadge {
  [type: string]: {
    icon: StaticImport | string;
  };
}

const badgeSelector: CredentialBadge = {
  ADM1: { icon: ADM1 },
  ADM2: { icon: ADM2 },
};

interface ADMCardProps {
  credential: string;
  name: string;
}

const ADMcard: FC<ADMCardProps> = (props) => {
  const { icon } = badgeSelector[props.credential];

  return (
    <Card>
      <Flex direction="row" justify="between" align="center" gap="2">
        <Box>
          <Flex direction="row" align="center" gap="1">
            <NextImage
              src={icon}
              alt="credencial do administrador"
              height="30"
            />
            <Separator orientation="vertical" size="3" />
          </Flex>
        </Box>
        <Box className="min-w-[150px]">
          <Text>{props.name}</Text>
        </Box>
        <Box className="min-w-[50px]">
          <Flex direction="row" gap="1" justify="between" align="center">
            <Separator orientation="vertical" size="3" />
            <Flex direction="column" justify="between" gap="1">
              {/* //Habilitar e desabilitar botões dependendo da credencial */}

              <Button disabled={false} size='1' color='amber'>PROMOVER</Button>
              <Button disabled={false} size="1" color="tomato">
                EXCLUIR
              </Button>
              <AlertDialog.Root >
                <AlertDialog.Trigger >
                    <Button>triger</Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content size='1'>
                    <AlertDialog.Title size='3'>
                        Tem certeza que deseja excluir {props.name}?
                    </AlertDialog.Title>
                    <AlertDialog.Description size='1'>
                        Esta ação não poderá ser desfeita. Depois de excluir <Strong>{props.name}</Strong>, a conta não poderar ser recuperada.
                    </AlertDialog.Description>
                    <br />
                    <Separator  orientation="horizontal" size='4'/>
                    <br />
                    <Flex direction='row' justify='between' align='center'>
                        <AlertDialog.Action>
                            <Button color="tomato">EXCLUIR</Button>
                        </AlertDialog.Action>
                        <AlertDialog.Cancel>
                            <Button color="amber">CANCELAR</Button>
                        </AlertDialog.Cancel>
                    </Flex>

                </AlertDialog.Content>
              </AlertDialog.Root>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default ADMcard;
