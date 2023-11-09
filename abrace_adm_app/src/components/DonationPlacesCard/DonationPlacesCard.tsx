"use client";
import {
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  IconButton,
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
import PIN from "../../public/icons/locationIcon.png";
import NextImage from "next/image";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

interface MyProps {
  children?: ReactElement;
  name: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
  linkToMaps: string;
  contact?: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement>;
}

const DonationPlacesCard: FC<MyProps> = (props) => {
  const [properties, setProperties] = useState({} as MyProps);
  const [editedProps, setEditedProps] = useState({} as MyProps);
  useEffect(() => {
    setProperties({
      name: props.name,
      street: props.street,
      number: props.number,
      neighborhood: props.neighborhood,
      city: props.city,
      state: props.state,
      complement: props.complement,
      linkToMaps: props.linkToMaps,
      contact: props.linkToMaps,
      onClickFunction: props.onClickFunction,
    });
    setEditedProps({
      name: props.name,
      street: props.street,
      number: props.number,
      neighborhood: props.neighborhood,
      city: props.city,
      state: props.state,
      complement: props.complement,
      linkToMaps: props.linkToMaps,
      contact: props.linkToMaps,
      onClickFunction: props.onClickFunction,
    });
  }, []);
  return (
    <Card>
      <Flex direction="row" justify="between" gap="3" align="center">
        <Box>
          <Flex direction="row" gap="3" justify="between" align="center">
            <NextImage src={PIN} alt="location pin" className="w-12 h-100" />
            <Separator orientation="vertical" size="3" />
            <Box>
          <Flex direction="column" justify="between" gap="0" align="start">
            <Text as="div" size="2" weight="bold" color="tomato">
              {properties.name}
            </Text>
            <Text as="div" size="1" weight="medium">
              {properties.street}, número: {properties.number}
            </Text>
            {properties.complement ? (
              <Text as="div" size="1" weight="medium">
                {properties.complement}
              </Text>
            ) : (
              ""
            )}
            <Text as="div" size="1" weight="medium">
              {properties.city} - {properties.state}
            </Text>
          </Flex>
        </Box>
          </Flex>
        </Box>
        
        <Box>
          <Flex direction="column" justify="between" gap="1" align="center">
            <Dialog.Root >
              <Dialog.Trigger>
                <Button color="tomato" variant="surface">
                  <Tooltip content="Deletar">
                    <TrashIcon />
                  </Tooltip>
                </Button>
              </Dialog.Trigger>
              <Dialog.Content className="p-5" style={{maxWidth: 300}} >
                <Dialog.Title>Deletar Local de Coleta?</Dialog.Title>
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
                <Dialog.Title>Editar Local de Coleta</Dialog.Title>
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
                      placeholder={editedProps.name}
                      value={editedProps.name}
                      onChange={(event) =>
                        setEditedProps({
                          ...editedProps,
                          name: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
                  <TextField.Root className="w-full">
                    <TextField.Slot>
                      <Text as="div" size="1" weight="bold" color="lime">
                        Rua:
                      </Text>
                    </TextField.Slot>
                    <TextField.Input
                      placeholder={editedProps.street}
                      value={editedProps.street}
                      onChange={(event) =>
                        setEditedProps({
                          ...editedProps,
                          street: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
                  <TextField.Root className="w-full">
                    <TextField.Slot>
                      <Text as="div" size="1" weight="bold" color="lime">
                        Número:
                      </Text>
                    </TextField.Slot>
                    <TextField.Input
                      placeholder={editedProps.number}
                      value={editedProps.number}
                      onChange={(event) =>
                        setEditedProps({
                          ...editedProps,
                          number: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
                  <TextField.Root className="w-full">
                    <TextField.Slot>
                      <Text as="div" size="1" weight="bold" color="lime">
                        Complemento:
                      </Text>
                    </TextField.Slot>
                    <TextField.Input
                      placeholder={editedProps.complement}
                      value={editedProps.complement}
                      onChange={(event) =>
                        setEditedProps({
                          ...editedProps,
                          complement: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
                  <TextField.Root className="w-full">
                    <TextField.Slot>
                      <Text as="div" size="1" weight="bold" color="lime">
                        Cidade:
                      </Text>
                    </TextField.Slot>
                    <TextField.Input
                      placeholder={editedProps.city}
                      value={editedProps.city}
                      onChange={(event) =>
                        setEditedProps({
                          ...editedProps,
                          city: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
                  <TextField.Root className="w-full">
                    <TextField.Slot>
                      <Text as="div" size="1" weight="bold" color="lime">
                        Estado:
                      </Text>
                    </TextField.Slot>
                    <TextField.Input
                      placeholder={editedProps.state}
                      value={editedProps.state}
                      onChange={(event) =>
                        setEditedProps({
                          ...editedProps,
                          state: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
                  <TextField.Root className="w-full">
                    <TextField.Slot>
                      <Text as="div" size="1" weight="bold" color="lime">
                        Link do Google Maps:
                      </Text>
                    </TextField.Slot>
                    <TextField.Input
                      placeholder={editedProps.linkToMaps}
                      value={editedProps.linkToMaps}
                      onChange={(event) =>
                        setEditedProps({
                          ...editedProps,
                          linkToMaps: event.target.value,
                        })
                      }
                    />
                  </TextField.Root>
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

export default DonationPlacesCard;
