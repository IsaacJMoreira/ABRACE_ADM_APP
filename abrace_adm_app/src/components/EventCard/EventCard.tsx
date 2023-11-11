"use client";
import {
  Card,
  Flex,
  Text,
  Button,
  ScrollArea,
  Inset,
  Dialog,
  Link,
  Box,
  Heading,
  Separator,
  Tooltip,
  TextField,
} from "@radix-ui/themes";
import NextImage, { StaticImageData } from "next/image";

import DONATEIcon from "../../public/assets/icons/2904845 1.png";

import { FC, MouseEventHandler, ReactNode, useEffect, useState } from "react";
import React from "react";

import {
  ChevronLeftIcon,
  DotsHorizontalIcon,
  HeartFilledIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";



interface MyProps {
  children?: ReactNode;
  name: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  description: string;
  imgURL?: string;
  linkToLocation: string;
  URL: StaticImageData;
  ALT: string;
  eventID?: string;
  deleterFunction?: MouseEventHandler<HTMLButtonElement>;
}

const EventCard: FC<MyProps> = (props) => {
  const [eventData, setEventData] = useState({} as MyProps);
  const [updatedData, setUpdatedData] = useState({} as MyProps);

  const firstLoadDataMOCK = {
    name: props.name,
    date: props.time,
    time: props.time,
    duration: props.duration,
    location: props.location,
    description: props.description,
    imgURL: props.imgURL,
    linkToLocation: props.linkToLocation,
    URL: props.URL,
    ALT: props.ALT,
    eventID: props.eventID,
  };

  useEffect(() => {
    setEventData(firstLoadDataMOCK);
    setUpdatedData(firstLoadDataMOCK);
  }, []);

  return (
    <Card variant="classic">
      <Flex direction="row" justify="between" gap="2">
        <Inset clip="padding-box" side="left">
          <NextImage
            className="object-cover h-40 w-auto"
            src={eventData.URL}
            alt={eventData.ALT}
          />
        </Inset>
        <Flex direction="row" justify="between" className="w-full">
          <Box>
            <Flex direction="column" justify="start">
              <Heading color="amber">{eventData.name}</Heading>
              <Separator orientation="horizontal" size="4" />
              <Text as="label" size="1" weight="bold" color="amber">
                Data:{" "}
                <Text as="span" size="3" weight="light" color="gray">
                  {eventData.date}
                </Text>
              </Text>
              <Text as="label" size="1" weight="bold" color="amber">
                Horário:{" "}
                <Text as="span" size="3" weight="light" color="gray">
                  {eventData.time}
                </Text>
              </Text>
              <Text as="label" size="1" weight="bold" color="amber">
                Duração:{" "}
                <Text as="span" size="3" weight="light" color="gray">
                  {eventData.duration}
                </Text>
              </Text>
              <Text as="label" size="1" weight="bold" color="amber">
                Local:{" "}
                <Text as="span" size="3" weight="light" color="gray">
                  {eventData.location}
                </Text>
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction="column" justify="center" gap="1" align="center" className="h-full">
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button color="tomato" variant="surface">
                    <Tooltip content="Deletar">
                      <TrashIcon />
                    </Tooltip>
                  </Button>
                </Dialog.Trigger>
                <Dialog.Content className="p-5" style={{ maxWidth: 300 }}>
                  <Dialog.Title>Deletar Evento?</Dialog.Title>
                  <Separator orientation="horizontal" size="4" />
                  <br />
                  <Flex
                    direction="row"
                    justify="between"
                    gap="5"
                    align="center"
                  >
                    <Dialog.Close>
                      <Button
                        color="tomato"
                        variant="surface"
                        onClick={props.deleterFunction}
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
                <Dialog.Content>
                  <Dialog.Title>Editar Evento</Dialog.Title>
                  <Separator orientation="horizontal" size="4" />
                  <br />
                  <Flex direction="column" justify="between" gap="1">
                    <TextField.Root>
                      <TextField.Slot>Nome:</TextField.Slot>
                      <TextField.Input
                        value={updatedData.name}
                        onChange={(event) =>
                          setUpdatedData({
                            ...updatedData,
                            name: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>Data:</TextField.Slot>
                      <TextField.Input
                        value={updatedData.date}
                        onChange={(event) =>
                          setUpdatedData({
                            ...updatedData,
                            date: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>Horário:</TextField.Slot>
                      <TextField.Input
                        value={updatedData.time}
                        onChange={(event) =>
                          setUpdatedData({
                            ...updatedData,
                            date: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>Duração:</TextField.Slot>
                      <TextField.Input
                        value={updatedData.duration}
                        onChange={(event) =>
                          setUpdatedData({
                            ...updatedData,
                            duration: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>Local:</TextField.Slot>
                      <TextField.Input
                        value={updatedData.location}
                        onChange={(event) =>
                          setUpdatedData({
                            ...updatedData,
                            location: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>Link do Google Maps:</TextField.Slot>
                      <TextField.Input
                        value={updatedData.linkToLocation}
                        onChange={(event) =>
                          setUpdatedData({
                            ...updatedData,
                            linkToLocation: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>upload de imágem:</TextField.Slot>
                      <TextField.Input value="MÉTODO PARA UPLOAD DE IMAGEM VERCEL BLOB" />
                    </TextField.Root>
                    <TextField.Root>
                      <TextField.Slot>Descrição da imágem:</TextField.Slot>
                      <TextField.Input
                        value={updatedData.ALT}
                        onChange={(event) =>
                          setUpdatedData({
                            ...updatedData,
                            ALT: event.target.value,
                          })
                        }
                      />
                    </TextField.Root>
                  </Flex>
                  <br />
                  <Separator orientation="horizontal" size="4" />
                  <br />
                  <Flex
                    direction="row"
                    justify="between"
                    gap="5"
                    align="center"
                  >
                    <Dialog.Close>
                      <Button
                        color="lime"
                        variant="surface"
                        onClick={() => setEventData(updatedData)}
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
      </Flex>
    </Card>
  );
};

export default EventCard;
