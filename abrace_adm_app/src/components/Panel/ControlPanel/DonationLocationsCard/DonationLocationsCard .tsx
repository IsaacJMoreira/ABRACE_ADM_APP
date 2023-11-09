"use client";
import DonationPlacesCard from "@/components/DonationPlacesCard/DonationPlacesCard";
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
  Text,
  IconButton,
  Tooltip,
} from "@radix-ui/themes";
import React, {
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface LocationProps {
  name: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
  linkToMaps: string;
  contact: string;
}

interface MyProps {
  originalData: [LocationProps];
  newDataSetter: SetStateAction<LocationProps>;
}

const addNewPlace = (
  locations: Array<LocationProps>,
  setLocations: Dispatch<SetStateAction<Array<LocationProps>>>
) => {
  const emptyProps = {
    name: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    complement: "",
    linkToMaps: "",
    contact: "",
  };

  const [newPlace, setNewPlace] = useState(emptyProps as LocationProps);

  useEffect(() => {
    setNewPlace(emptyProps);
  }, []);

  function addNewLocation(
    originalArray: Array<LocationProps>
  ): Array<LocationProps> {
    originalArray.push(newPlace);
    setNewPlace(emptyProps);
    return originalArray;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size="1" color="tomato" variant="surface">
          <Tooltip content="Adicionar um local de coleta">
            <Flex direction='row' gap='1' >
              Adicionar
              <Separator orientation="vertical" size="1" />
              <PlusIcon />
            </Flex>
          </Tooltip>
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className="p-5">
        <Dialog.Title>Adicionar Novo Local de Coleta</Dialog.Title>

        <Separator orientation="horizontal" size="4" />
        <br />
        <Flex direction="column" justify="between" gap="1" align="start">
          <TextField.Root className="w-full">
            <TextField.Slot>
              <Text as="div" size="1" weight="bold" color="lime">
                Nome:
              </Text>
            </TextField.Slot>
            <TextField.Input
              value={newPlace.name}
              onChange={(event) =>
                setNewPlace({ ...newPlace, name: event.target.value })
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
              value={newPlace.street}
              onChange={(event) =>
                setNewPlace({ ...newPlace, street: event.target.value })
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
              value={newPlace.number}
              onChange={(event) =>
                setNewPlace({ ...newPlace, number: event.target.value })
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
              value={newPlace.complement}
              onChange={(event) =>
                setNewPlace({ ...newPlace, complement: event.target.value })
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
              value={newPlace.city}
              onChange={(event) =>
                setNewPlace({ ...newPlace, city: event.target.value })
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
              value={newPlace.state}
              onChange={(event) =>
                setNewPlace({ ...newPlace, state: event.target.value })
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
              value={newPlace.linkToMaps}
              onChange={(event) =>
                setNewPlace({ ...newPlace, linkToMaps: event.target.value })
              }
            />
          </TextField.Root>
        </Flex>
        <br />
        <Separator orientation="horizontal" size="4" />
        <br />
        <Flex direction="row" justify="between" gap="5" align="center">
          <Dialog.Close>
            <Button color="lime" variant="surface" onClick={() => addNewLocation(locations)}>
              ADICIONAR
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button color="amber" variant="surface" onClick={() => setNewPlace(emptyProps)}>
              VOLTAR
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

let original = [
  {
    name: "Loja 1",
    street: "Rua dos Bobos",
    number: "1234",
    neighborhood: "Benfica",
    city: "Fortaleza",
    state: "CE",
    complement: "",
    linkToMaps: "www.link.com.br",
    contact: "85998980000",
  },
  {
    name: "Loja 2",
    street: "Rua dos Loucos",
    number: "1234",
    neighborhood: "Aledota",
    city: "Fortaleza",
    state: "CE",
    complement: "",
    linkToMaps: "www.link.com.br",
    contact: "85998980000",
  },
  {
    name: "Loja 3",
    street: "Rua dos Calados",
    number: "1234",
    neighborhood: "Meireles",
    city: "Fortaleza",
    state: "CE",
    complement: "",
    linkToMaps: "www.link.com.br",
    contact: "85998980000",
  },
];

const DonationLocationsCard = () => {
  const [locations, setLocations] = useState(original);

  function deleteLocation(
    originalArray: Array<LocationProps>,
    location: LocationProps
  ): Array<LocationProps> {
    const clone = [...originalArray];

    clone.splice(originalArray.indexOf(location), 1);

    return clone;
  }

  return (
    <Card variant="ghost" className="bg-gradient-to-br from-[#F3B4B0] to-[#e66a63]  p-3" style={{ width: 450, height: "100%" }}>
      <Flex direction="column" justify="between" align="center" gap="3">
        <Flex
          direction="row"
          justify="between"
          gap="5"
          align="center"
          className="w-full"
        >
          <Heading size="4" color="tomato">
            Locais de Doação
          </Heading>
          {addNewPlace(locations, setLocations)}
        </Flex>

        <Separator orientation="horizontal" size="4" />
        <ScrollArea type="always" scrollbars="vertical" style={{ height: "100%", maxHeight: 500 }}>
          <Box p="2" pr="8">
            {locations.map((location) => {
              return (
                <DonationPlacesCard
                  name={location.name}
                  street={location.street}
                  number={location.number}
                  neighborhood={location.neighborhood}
                  city={location.city}
                  state={location.state}
                  complement={location.complement}
                  linkToMaps={location.linkToMaps}
                  onClickFunction={() =>
                    setLocations(deleteLocation(locations, location))
                  }
                />
              );
            })}
          </Box>
        </ScrollArea>
      </Flex>
    </Card>
  );
};

export default DonationLocationsCard;
