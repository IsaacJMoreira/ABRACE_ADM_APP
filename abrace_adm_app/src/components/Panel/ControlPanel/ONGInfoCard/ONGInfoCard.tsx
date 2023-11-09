import { Pencil1Icon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  Heading,
  Separator,
  Text,
  TextField,
  TextFieldSlot,
  Tooltip,
} from "@radix-ui/themes";
import React, {
  ReactElement,
  FC,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";

interface ONGProps {
  children?: ReactElement;
  nomeEmpresarial: string;
  nomeFantasia: string;
  cnpj: string;
  porte: string;
  logradouro: string;
  numero: string;
  complemento: string;
  cep: string;
  bairro: string;
  municipio: string;
  UF: string;
  email: string;
  contato1: string;
  contato2: string;
  chavePix: string;
  contaPagSeguro: string;
}

function handleUpdateButtonClick(
  updatedInfo: ONGProps,
  updateCallBack: Dispatch<SetStateAction<ONGProps>>
) {
  updateCallBack(updatedInfo);
}

const ONGInfoCard = () => {
  const [ongInformations, setOngInformations] = useState({} as ONGProps);
  const [editedOngInfo, setEditedOngInfo] = useState({} as ONGProps);

  let ongMocInfo = {
    nomeEmpresarial: "ABRACE ong de adoções",
    nomeFantasia: "ABRACE",
    cnpj: "22.999.999/0001-00",
    porte: "ME",
    logradouro: "Rua da ONG",
    numero: "159",
    complemento: "AP-159",
    cep: "60123123",
    bairro: "Bairro da ONG",
    municipio: "Fortaleza",
    UF: "CE",
    email: "abrace@email.com",
    contato1: "(85) 9 9999 0000",
    contato2: "",
    chavePix: "abrace@email.com",
    contaPagSeguro: "INFORMAÇÕES DA CONTA PAGSEGURO",
  };

  useEffect(() => {
    setOngInformations(ongMocInfo);
    setEditedOngInfo(ongInformations);
  }, []);

  return (
    <Card
      variant="ghost"
      className="w-2/5 bg-gradient-to-br from-[#DDFDFF] to-[#9CCCCE] p-3"
      style={{ height: "100%" }}
    >
      <Flex direction="column" justify="between" gap="3">
        <Box>
          <Flex direction="row" justify="between" align="center">
            <Heading size="6" color="cyan">
              Informações da ONG
            </Heading>
            <Dialog.Root>
              <Dialog.Trigger>
                <Button size="1" color="cyan" variant="surface">
                  <Tooltip content="Editar informações">
                    <Flex direction="row" gap="1">
                      Editar
                      <Separator orientation="vertical" size="1" />
                      <Pencil1Icon />
                    </Flex>
                  </Tooltip>
                </Button>
              </Dialog.Trigger>

              <Dialog.Content>
                <Dialog.Title>Editar Informações da ONG</Dialog.Title>
                <Separator orientation="horizontal" size="4" />
                <br />

                <Flex direction="column" justify="between" gap="1">
                  <TextField.Root>
                    <TextField.Slot>Nome Ampresarial:</TextField.Slot>
                    <TextField.Input
                      value={editedOngInfo.nomeEmpresarial}
                      onChange={(event) =>
                        setEditedOngInfo({
                          ...editedOngInfo,
                          nomeEmpresarial: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
                  <TextField.Root>
                    <TextField.Slot>Nome Fantasia:</TextField.Slot>
                    <TextField.Input
                      value={editedOngInfo.nomeFantasia}
                      onChange={(event) =>
                        setEditedOngInfo({
                          ...editedOngInfo,
                          nomeFantasia: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
                  <Flex direction="row" justify="between" gap="1">
                    <TextField.Root>
                      <TextField.Slot>CNPJ:</TextField.Slot>
                      <TextField.Input
                        value={editedOngInfo.cnpj}
                        onChange={(event) =>
                          setEditedOngInfo({
                            ...editedOngInfo,
                            cnpj: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>Porte:</TextField.Slot>
                      <TextField.Input
                        value={editedOngInfo.porte}
                        onChange={(event) =>
                          setEditedOngInfo({
                            ...editedOngInfo,
                            porte: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                  </Flex>
                  <Flex direction="row" justify="between" gap="1">
                    <TextField.Root>
                      <TextField.Slot>Numero:</TextField.Slot>
                      <TextField.Input
                        value={editedOngInfo.numero}
                        onChange={(event) =>
                          setEditedOngInfo({
                            ...editedOngInfo,
                            numero: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>Complemento:</TextField.Slot>
                      <TextField.Input
                        value={editedOngInfo.complemento}
                        onChange={(event) =>
                          setEditedOngInfo({
                            ...editedOngInfo,
                            complemento: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>CEP:</TextField.Slot>
                      <TextField.Input
                        value={editedOngInfo.cep}
                        onChange={(event) =>
                          setEditedOngInfo({
                            ...editedOngInfo,
                            cep: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                  </Flex>
                  <Flex direction="row" justify="between" gap="1">
                    <TextField.Root>
                      <TextField.Slot>Bairro:</TextField.Slot>
                      <TextField.Input
                        value={editedOngInfo.bairro}
                        onChange={(event) =>
                          setEditedOngInfo({
                            ...editedOngInfo,
                            bairro: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>Municipio:</TextField.Slot>
                      <TextField.Input
                        value={editedOngInfo.municipio}
                        onChange={(event) =>
                          setEditedOngInfo({
                            ...editedOngInfo,
                            municipio: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                  </Flex>
                  <TextField.Root>
                    <TextField.Slot>e-mail:</TextField.Slot>
                    <TextField.Input
                      value={editedOngInfo.email}
                      onChange={(event) =>
                        setEditedOngInfo({
                          ...editedOngInfo,
                          email: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
                  <Flex direction="row" justify="between" gap="1">
                    <TextField.Root>
                      <TextField.Slot>Contato Principal:</TextField.Slot>
                      <TextField.Input
                        value={editedOngInfo.contato1}
                        onChange={(event) =>
                          setEditedOngInfo({
                            ...editedOngInfo,
                            contato1: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>Contato Secundário:</TextField.Slot>
                      <TextField.Input
                        value={editedOngInfo.contato2}
                        onChange={(event) =>
                          setEditedOngInfo({
                            ...editedOngInfo,
                            contato2: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                  </Flex>
                  <br />
                  <Separator orientation="horizontal" size="4" />
                  <br />
                  <TextField.Root>
                      <TextField.Slot>CONTA DO PAGSEGURO:</TextField.Slot>
                      <TextField.Input
                        value={editedOngInfo.contaPagSeguro}
                        onChange={(event) =>
                          setEditedOngInfo({
                            ...editedOngInfo,
                            contaPagSeguro: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                </Flex>

                <br />
                <Separator orientation="horizontal" size="4" />
                <br />

                <Flex direction="row" justify="between">
                  <Dialog.Close>
                    <Button
                      variant="surface"
                      color="lime"
                      onClick={() =>
                        handleUpdateButtonClick(
                          editedOngInfo,
                          setOngInformations
                        )
                      }
                    >
                      ATUALIZAR
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button
                      variant="surface"
                      color="amber"
                      onClick={() => setEditedOngInfo(ongInformations)}
                    >
                      VOLTAR
                    </Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>
          </Flex>
        </Box>

        <Separator orientation="horizontal" size="4" />
        <Text as="div" color="cyan" weight="bold" size="2">
          Nome Empresarial
          <Text as="div" color="brown" weight="light" size="5">
            {ongInformations.nomeEmpresarial}
          </Text>
        </Text>
        <Text as="div" color="cyan" weight="bold" size="2">
          Nome Fantasia
          <Text as="div" color="brown" weight="light" size="5">
            {ongInformations.nomeFantasia}
          </Text>
        </Text>
        <Flex direction="row" justify="start" align="start" gap="5">
          <Text as="div" color="cyan" weight="bold" size="2">
            CNPJ
            <Text as="div" color="brown" weight="light" size="5">
              {ongInformations.cnpj}
            </Text>
          </Text>
          <Text as="div" color="cyan" weight="bold" size="2">
            Porte
            <Text as="div" color="brown" weight="light" size="5">
              {ongInformations.porte}
            </Text>
          </Text>
        </Flex>

        <Text as="div" color="cyan" weight="bold" size="2">
          Logradouro
          <Text as="div" color="brown" weight="light" size="5">
            {ongInformations.logradouro}
          </Text>
        </Text>
        <Flex direction="row" justify="start" align="start" gap="5">
          <Text as="div" color="cyan" weight="bold" size="2">
            Numero
            <Text as="div" color="brown" weight="light" size="5">
              {ongInformations.numero}
            </Text>
          </Text>
          <Text as="div" color="cyan" weight="bold" size="2">
            Complemento
            <Text as="div" color="brown" weight="light" size="5">
              {ongInformations.complemento}
            </Text>
          </Text>
          <Text as="div" color="cyan" weight="bold" size="2">
            CEP
            <Text as="div" color="brown" weight="light" size="5">
              {ongInformations.cep}
            </Text>
          </Text>
        </Flex>
        <Flex direction="row" justify="start" align="start" gap="5">
          <Text as="div" color="cyan" weight="bold" size="2">
            Birro
            <Text as="div" color="brown" weight="light" size="5">
              {ongInformations.bairro}
            </Text>
          </Text>
          <Text as="div" color="cyan" weight="bold" size="2">
            Municipio
            <Text as="div" color="brown" weight="light" size="5">
              {ongInformations.municipio}
            </Text>
          </Text>
          <Text as="div" color="cyan" weight="bold" size="2">
            UF
            <Text as="div" color="brown" weight="light" size="5">
              {ongInformations.UF}
            </Text>
          </Text>
        </Flex>
        <Text as="div" color="cyan" weight="bold" size="2">
          e-mail
          <Text as="div" color="brown" weight="light" size="5">
            {ongInformations.email}
          </Text>
        </Text>
        <Flex direction="row" justify="start" align="start" gap="5">
          <Text as="div" color="cyan" weight="bold" size="2">
            Contato Principal
            <Text as="div" color="brown" weight="light" size="5">
              {ongInformations.contato1}
            </Text>
          </Text>
          <Text as="div" color="cyan" weight="bold" size="2">
            Contato Secundário
            <Text as="div" color="brown" weight="light" size="5">
              {ongInformations.contato2
                ? ongInformations.contato2
                : "(xx) 9 xxxx xxxx"}
            </Text>
          </Text>
        </Flex>
        <Separator orientation="horizontal" size="4" />
        <Text as="div" color="cyan" weight="bold" size="2">
          CONTA DO PAGSEGURO
          <Text as="div" color="brown" weight="light" size="5">
            {ongInformations.contaPagSeguro}
          </Text>
        </Text>
      </Flex>
    </Card>
  );
};

export default ONGInfoCard;
