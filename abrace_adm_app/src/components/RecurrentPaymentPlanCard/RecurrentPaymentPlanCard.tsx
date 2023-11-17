"use client";
import {
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  IconButton,
  Select,
  Separator,
  Text,
  TextField,
  Tooltip,
} from "@radix-ui/themes";
import React, {
  ReactElement,
  FC,
  useState,
  useEffect,
  MouseEventHandler,
} from "react";
import CALENDAR from "../../public/icons/42253 1.png";
import NextImage from "next/image";
import { Pencil1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";

interface MyProps {
  children?: ReactElement;
  name: string;
  code: string;
  duration: string;
  frequency: string;
  value: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement>;
}

const RecurrentPaymentPlanCard: FC<MyProps> = (props) => {
  const [properties, setProperties] = useState({} as MyProps);
  const [editedProps, setEditedProps] = useState({} as MyProps);
  useEffect(() => {
    setProperties({
      name: props.name,
      code: props.code,
      duration: props.duration,
      frequency: props.frequency,
      value: props.value,
      onClickFunction: props.onClickFunction,
    });
    setEditedProps({
      name: props.name,
      code: props.code,
      duration: props.duration,
      frequency: props.frequency,
      value: props.value,
      onClickFunction: props.onClickFunction,
    });
  }, []);
  return (
    <Card variant="classic">
      <Flex direction="row" justify="between" gap="3" align="center">
        <Box>
          <Flex direction="row" gap="3" justify="between" align="center">
            <NextImage
              src={CALENDAR}
              alt="location pin"
              className="w-10 h-100"
            />
            <Separator orientation="vertical" size="3" />
            <Box>
              <Flex direction="column" justify="between" gap="0" align="start">
                <Text as="div" size="2" weight="bold" color="lime">
                  {properties.name}
                </Text>
                <Text as="div" size="1" weight="medium">
                  código: {properties.code}
                </Text>
                <Text as="div" size="1" weight="medium">
                  duração:{" "}
                  {properties.frequency === "vitalicio"
                    ? "vitalício"
                    : `${
                        properties.frequency === "mensal"
                          ? `${properties.duration} m${
                              properties.duration !== "1" ? "eses" : "ês"
                            }`
                          : `${properties.duration} ano${
                              properties.duration !== "1" ? "s" : ""
                            }`
                      }`}
                </Text>
                <Text as="div" size="1" weight="medium">
                  frequência: R${properties.value ? properties.value : "-"}{" "}
                  mensais
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box>
          <Flex direction="column" justify="between" gap="1" align="center">
            <Dialog.Root>
              <Dialog.Trigger>
                <Button color="tomato" variant="surface">
                  <Tooltip content="Deletar">
                    <TrashIcon />
                  </Tooltip>
                </Button>
              </Dialog.Trigger>
              <Dialog.Content className="p-5" style={{ maxWidth: 300 }}>
                <Dialog.Title>Deletar Plano?</Dialog.Title>
                <Separator orientation="horizontal" size="4" />
                <br />
                <Flex direction="row" justify="between" gap="5" align="center">
                  <Dialog.Close>
                    <Button
                      color="tomato"
                      variant="surface"
                      onClick={props.onClickFunction}
                    >
                      DELETAR
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button color="amber" variant="surface">
                      VOLTAR
                    </Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>

            <Dialog.Root>
              <Dialog.Trigger>
                <Button color="amber" variant="surface">
                  <Tooltip content="Editar">
                    <Pencil1Icon />
                  </Tooltip>
                </Button>
              </Dialog.Trigger>
              <Dialog.Content className="p-5">
                <Dialog.Title>
                  Adicionar Plano de Assinatura Mensalista{" "}
                </Dialog.Title>

                <Separator orientation="horizontal" size="4" />
                <br />
                <Flex
                  direction="column"
                  justify="between"
                  gap="1"
                  align="start"
                >
                  <TextField.Root className="w-full">
                    <TextField.Slot>
                      <Text as="div" size="1" weight="bold" color="lime">
                        Nome:
                      </Text>
                    </TextField.Slot>
                    <TextField.Input
                      value={editedProps.name}
                      onChange={(event) =>
                        setEditedProps({
                          ...editedProps,
                          name: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
                  <Box>
                    <Flex
                      direction="row"
                      justify="between"
                      align="center"
                      gap="3"
                    >
                      <TextField.Root className="w-full">
                        <TextField.Slot>
                          <Text as="div" size="1" weight="bold" color="lime">
                            Valor:
                          </Text>
                        </TextField.Slot>
                        <TextField.Input
                          value={editedProps.value}
                          onChange={(event) =>
                            setEditedProps({
                              ...editedProps,
                              value: event.target.value,
                            })
                          }
                        />
                      </TextField.Root>
                      <TextField.Root className="w-full">
                        <TextField.Slot>
                          <Text as="div" size="1" weight="bold" color="lime">
                            Duração:
                          </Text>
                        </TextField.Slot>
                        <TextField.Input
                          value={editedProps.duration}
                          onChange={(event) =>
                            setEditedProps({
                              ...editedProps,
                              duration: event.target.value,
                            })
                          }
                        />
                      </TextField.Root>

                      <Select.Root
                        defaultValue={"ND"}
                        onValueChange={(value) =>
                          setEditedProps({ ...editedProps, frequency: value })
                        }
                      >
                        Frequência:
                        <Select.Trigger />
                        <Select.Content>
                          <Select.Group>
                            <Select.Item value="ND" disabled>
                              selecionar
                            </Select.Item>
                            <Select.Item value="mensal">mensal</Select.Item>
                            <Select.Item value="anual">anual</Select.Item>
                            <Select.Item value="vitalicio">
                              vitalício
                            </Select.Item>
                          </Select.Group>
                        </Select.Content>
                      </Select.Root>
                    </Flex>
                  </Box>
                </Flex>
                <br />
                <Separator orientation="horizontal" size="4" />
                <br />
                <Flex direction="row" justify="between" gap="5" align="center">
                  <Dialog.Close>
                    <Button
                      color="lime"
                      variant="surface"
                      onClick={() => setProperties(editedProps)}
                    >
                      ATUALIZAR
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button color="amber" variant="surface">
                      VOLTAR
                    </Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default RecurrentPaymentPlanCard;
