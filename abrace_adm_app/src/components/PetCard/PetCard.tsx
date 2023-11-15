import {
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  Heading,
  Inset,
  ScrollArea,
  Select,
  Separator,
  Text,
  TextArea,
  TextField,
  Tooltip,
} from "@radix-ui/themes";

import React, {
  FC,
  ReactComponentElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import NextImage, { StaticImageData } from "next/image";
import CAT from "../../public/images/WhatsApp Image 2023-11-14 at 00.41.05.jpeg";
import {
  CropIcon,
  Cross1Icon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { findSourceMap } from "module";
import AdoptionSubmissionCard from "../AdoptionSubmissionCard/AdoptionSubmissionCard";
interface PetProps {
  name: string;
  petID: string;
  petSpecies: string;
  petSex: string;
  petAge: number;
  petAgeUnit: string;
  petAgeAproximate: boolean;
  petWeight: number;
  petWeightUnit: string;
  petFurColor: string;
  petFurType: string;
  petDescription: string;
  petImgURL: StaticImageData;
  petImgALT: string;
  adoptionSubmissions: number;
}

const arrayFake = [
  {
    userID: "123",
    userName: "Fulaninho da Silva Sauro",
    userAptitude: "inapto",
    submissionDate: "12/12/2023",
    submissionGrant: "pendente",
  },
  {
    userID: "133",
    userName: "Fulaninha Maria da Silva ",
    userAptitude: "apto",
    submissionDate: "13/12/2023",
    submissionGrant: "pendente",
  },
  {
    userID: "135",
    userName: "Maria Ciclana Aparecida",
    userAptitude: "apto",
    submissionDate: "14/12/2023",
    submissionGrant: "pendente",
  },
];

const PetCard: FC<PetProps> = (props) => {
  const [petData, setPetData] = useState({} as PetProps);
  const [editedPetData, setEditedPetData] = useState({} as PetProps);
  const FirsLoadDataMock: PetProps = {
    name: props.name,
    petID: props.petID,
    petSpecies: props.petSpecies,
    petSex: props.petSex,
    petAge: props.petAge,
    petAgeUnit: props.petAgeUnit,
    petAgeAproximate: props.petAgeAproximate,
    petWeight: props.petWeight,
    petWeightUnit: props.petWeightUnit,
    petFurColor: props.petFurColor,
    petFurType: props.petFurType,
    petDescription: props.petDescription,
    petImgURL: props.petImgURL,
    petImgALT: props.petImgALT,
    adoptionSubmissions: props.adoptionSubmissions,
  };

  useEffect(() => {
    setPetData(FirsLoadDataMock);
    setEditedPetData(FirsLoadDataMock);
  }, []);
  return (
    <Card variant="classic">
      <Flex direction="row" justify="between" gap="2">
        <Inset clip="padding-box" side="left">
          <NextImage
            className="object-cover h-48 w-52"
            src={petData.petImgURL}
            alt={petData.petImgALT}
          />
        </Inset>
        <Flex direction="row" justify="between" className="w-full">
          <Box>
            <Flex direction="column" justify="start">
              <Heading color="lime">{petData.name}</Heading>
              <Separator orientation="horizontal" size="3" />
              <Text as="label" size="1" weight="bold" color="lime">
                Espécie:
                <Text as="span" size="3" weight="light" color="gray">
                  {petData.petSpecies}
                </Text>
              </Text>
              <Text as="label" size="1" weight="bold" color="lime">
                Idade:
                <Text as="span" size="3" weight="light" color="gray">
                  {petData.petAge} {petData.petAgeUnit}{" "}
                  {petData.petAgeAproximate ? "(aproximada)" : ""}
                </Text>
              </Text>
              <Text as="label" size="1" weight="bold" color="lime">
                Peso:
                <Text as="span" size="3" weight="light" color="gray">
                  {petData.petWeight} {petData.petWeightUnit}
                </Text>
              </Text>
              <Text as="label" size="1" weight="bold" color="lime">
                Pelo:
                <Text as="span" size="3" weight="light" color="gray">
                  {petData.petFurColor} {petData.petFurType}
                </Text>
              </Text>
              <Text as="label" size="1" weight="bold" color="lime">
                Sexo:
                <Text as="span" size="3" weight="light" color="gray">
                  {petData.petSex}
                </Text>
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction="column" justify="between" gap="4" align="end">
              <Box>
                {/* //TODO: add dialog to show adoption aplications */}
                <Card variant="ghost" className="w-[150px]">
                  <Flex
                    direction="row"
                    justify="between"
                    align="center"
                    gap="1"
                  >
                    <Text as="div" size="1" weight="bold">
                      Pedidos de Adoção
                    </Text>
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <Button size="3" variant="surface" radius="full">
                          <Tooltip content="Detalhes sobre os pedidos de adoção">
                            <Text>{arrayFake.length}</Text>
                          </Tooltip>
                        </Button>
                      </Dialog.Trigger>
                      <Dialog.Content>
                        <Dialog.Title>
                          <Flex direction="row" justify="between">
                            <Text color="lime">
                              Pedidos de adoção de {petData.name}
                            </Text>
                            <Dialog.Close>
                              <Button variant="surface" color="tomato">
                                <Tooltip content="Fechar">
                                  <Cross1Icon />
                                </Tooltip>
                              </Button>
                            </Dialog.Close>
                          </Flex>
                        </Dialog.Title>
                        <Separator orientation="horizontal" size="4" />
                        <ScrollArea
                          type="always"
                          scrollbars="vertical"
                          style={{ height: "fit", maxHeight: 400 }}
                        >
                          <Box p="2" pr="8">
                            <Flex direction="column" justify="between" gap="1">
                              {arrayFake.map((element) => {
                                return (
                                  <AdoptionSubmissionCard
                                    userID={element.userID}
                                    userName={element.userName}
                                    userAptitude={element.userAptitude}
                                    submissionDate={element.submissionDate}
                                    submissionGrant={element.submissionGrant}
                                  />
                                );
                              })}
                            </Flex>
                          </Box>
                        </ScrollArea>
                      </Dialog.Content>
                    </Dialog.Root>
                  </Flex>
                </Card>
              </Box>

              <Box>
                <Flex
                  direction="column"
                  justify="center"
                  gap="1"
                  align="center"
                  className="h-full"
                >
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button color="tomato" variant="surface">
                        <Tooltip content="Deletar">
                          <TrashIcon />
                        </Tooltip>
                      </Button>
                    </Dialog.Trigger>
                    <Dialog.Content className="p-5" style={{ maxWidth: 300 }}>
                      <Dialog.Title>Deletar Animal?</Dialog.Title>
                      <Separator orientation="horizontal" size="4" />
                      <br />
                      <Flex
                        direction="row"
                        justify="between"
                        gap="5"
                        align="center"
                      >
                        <Dialog.Close>
                          <Button color="tomato" variant="surface">
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
                      <Dialog.Title>
                        Editar Dados de {petData.name}
                      </Dialog.Title>
                      <Separator orientation="horizontal" size="4" />
                      <br />
                      <Flex direction="column" justify="between" gap="1">
                        <Flex direction="row" justify="start" gap="1">
                          <TextField.Root>
                            <TextField.Slot>Nome:</TextField.Slot>
                            <TextField.Input
                              value={editedPetData.name}
                              onChange={(event) =>
                                setEditedPetData({
                                  ...editedPetData,
                                  name: event.target.value,
                                })
                              }
                            />
                          </TextField.Root>
                          <Select.Root
                            defaultValue={editedPetData.petSpecies}
                            onValueChange={(value) =>
                              setEditedPetData({
                                ...editedPetData,
                                petSpecies: value,
                              })
                            }
                          >
                            <Select.Trigger />
                            sexo:
                            <Select.Content>
                              <Select.Item value="selecionar" disabled>
                                selecionar
                              </Select.Item>
                              <Select.Item value="cão">cão</Select.Item>
                              <Select.Item value="gato">gato</Select.Item>
                            </Select.Content>
                          </Select.Root>
                          <Select.Root
                            defaultValue={editedPetData.petSex}
                            onValueChange={(value) =>
                              setEditedPetData({
                                ...editedPetData,
                                petSex: value,
                              })
                            }
                          >
                            <Select.Trigger />
                            <Select.Content>
                              <Select.Item value="selecionar" disabled>
                                selecionar
                              </Select.Item>
                              <Select.Item value="M">M</Select.Item>
                              <Select.Item value="F">F</Select.Item>
                            </Select.Content>
                          </Select.Root>
                        </Flex>
                        <Flex direction="row" justify="start" gap="1">
                          <TextField.Root>
                            <TextField.Slot>Cor:</TextField.Slot>
                            <TextField.Input
                              value={editedPetData.petFurColor}
                              onChange={(event) =>
                                setEditedPetData({
                                  ...editedPetData,
                                  petFurColor: event.target.value,
                                })
                              }
                            />
                          </TextField.Root>
                          <TextField.Root>
                            <TextField.Slot>Tipo de pelo:</TextField.Slot>
                            <TextField.Input
                              value={editedPetData.petFurType}
                              onChange={(event) =>
                                setEditedPetData({
                                  ...editedPetData,
                                  petFurType: event.target.value,
                                })
                              }
                            />
                          </TextField.Root>
                        </Flex>
                        <Flex direction="row" justify="start" gap="1">
                          <TextField.Root>
                            <TextField.Slot>Idade:</TextField.Slot>
                            <TextField.Input
                              type="number"
                              value={editedPetData.petAge}
                              onChange={(event) =>
                                setEditedPetData({
                                  ...editedPetData,
                                  petAge: event.target.valueAsNumber,
                                })
                              }
                            />
                          </TextField.Root>
                          <Select.Root
                            defaultValue={editedPetData.petAgeUnit}
                            onValueChange={(value) =>
                              setEditedPetData({
                                ...editedPetData,
                                petAgeUnit: value,
                              })
                            }
                          >
                            <Select.Trigger />
                            <Select.Content>
                              <Select.Item value="selecionar" disabled>
                                selecionar
                              </Select.Item>
                              <Select.Item value="anos">anos</Select.Item>
                              <Select.Item value="meses">meses</Select.Item>
                              <Select.Item value="dias">dias</Select.Item>
                            </Select.Content>
                          </Select.Root>
                          <Select.Root
                            defaultValue={editedPetData.petAgeAproximate?.toString()}
                            onValueChange={(value) =>
                              setEditedPetData({
                                ...editedPetData,
                                petAgeAproximate:
                                  value === "true" ? true : false,
                              })
                            }
                          >
                            <Select.Trigger />
                            <Select.Content>
                              <Select.Item value="selecionar" disabled>
                                selecionar
                              </Select.Item>
                              <Select.Item value="true">aproximada</Select.Item>
                              <Select.Item value="false">exata</Select.Item>
                            </Select.Content>
                          </Select.Root>
                        </Flex>

                        <Flex direction="row" justify="start" gap="1">
                          <TextField.Root>
                            <TextField.Slot>Peso:</TextField.Slot>
                            <TextField.Input
                              type="number"
                              value={editedPetData.petWeight}
                              onChange={(event) =>
                                setEditedPetData({
                                  ...editedPetData,
                                  petWeight: event.target.valueAsNumber,
                                })
                              }
                            />
                          </TextField.Root>
                          <Select.Root
                            defaultValue={editedPetData.petWeightUnit}
                            onValueChange={(value) =>
                              setEditedPetData({
                                ...editedPetData,
                                petWeightUnit: value,
                              })
                            }
                          >
                            <Select.Trigger />
                            <Select.Content>
                              <Select.Item value="selecionar" disabled>
                                selecionar
                              </Select.Item>
                              <Select.Item value="Kg">Kg</Select.Item>
                              <Select.Item value="g">g</Select.Item>
                            </Select.Content>
                          </Select.Root>
                        </Flex>
                        <TextArea
                          size="3"
                          placeholder="Adicione uma descrição sobre o animal"
                          value={editedPetData.petDescription}
                          onChange={(event) =>
                            setEditedPetData({
                              ...editedPetData,
                              petDescription: event.target.value,
                            })
                          }
                        />
                        <Text as="div" color="tomato">
                          ADICIONAR MÉTODO PARA UPLOAD DE IMAGENS
                        </Text>
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
                            onClick={() => setPetData(editedPetData)}
                          >
                            ATUALIZAR
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button
                            color="amber"
                            variant="surface"
                            onClick={() => setEditedPetData(petData)}
                          >
                            VOLTAR
                          </Button>
                        </Dialog.Close>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Card>
  );
};

export default PetCard;
