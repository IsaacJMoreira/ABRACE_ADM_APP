import {
  Button,
  Card,
  Flex,
  Heading,
  Separator,
  TextField,
  Tooltip,
  Text,
  TextArea,
  Select,
} from "@radix-ui/themes";
import { StaticImageData } from "next/image";
import React, { FC, MouseEventHandler, ReactNode, useState } from "react";
import PETGENERIC from '../../public/images/petGeneric.jpg';
import { EraserIcon, PlusIcon } from "@radix-ui/react-icons";

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

interface DataArrayProps {
  dataArray: Array<PetProps>;
  dataAdderFunction:   React.Dispatch<React.SetStateAction<PetProps[]>>;

}

const emptyPet = {
  name: "",
  petID: "",
  petSpecies: "selecionar",
  petSex: "selecionar",
  petAge: 0,
  petAgeUnit: "selecionar",
  petAgeAproximate: false,
  petWeight: 0,
  petWeightUnit: "selecionar",
  petFurColor: "",
  petFurType: "",
  petDescription: "",
  petImgURL: PETGENERIC,
  petImgALT: "generic",
  adoptionSubmissions: 0,
};


const PetAdder:FC<DataArrayProps> = (props) => {
  const [newPet, setNewPet] = useState(emptyPet);


  

  function newPetAdderFunction(){
    let arrayClone = props.dataArray;
    arrayClone.push(newPet);
    setNewPet(emptyPet);
    return arrayClone;
  }

  return (
    <Card className="w-3/6  min-w-[600px]">
      <Heading color="lime">Adicionar Novo Animal</Heading>
      <Separator orientation="horizontal" size="4" />
      <br />
      <Flex direction="column" justify="between" gap="1">
      <Flex direction="row" justify="start" gap="1">
                      <TextField.Root>
                        <TextField.Slot>Nome:</TextField.Slot>
                        <TextField.Input
                          value={newPet.name}
                          onChange={(event) =>
                            setNewPet({
                              ...newPet,
                              name: event.target.value,
                            })
                          }
                        />
                      </TextField.Root>
                      <Select.Root
                        defaultValue={newPet.petSpecies}
                        onValueChange={(value) =>
                          setNewPet({
                            ...newPet,
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
                        defaultValue={newPet.petSex}
                        onValueChange={(value) =>
                          setNewPet({
                            ...newPet,
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
                          value={newPet.petFurColor}
                          onChange={(event) =>
                            setNewPet({
                              ...newPet,
                              petFurColor: event.target.value,
                            })
                          }
                        />
                      </TextField.Root>
                      <TextField.Root>
                        <TextField.Slot>Tipo de pelo:</TextField.Slot>
                        <TextField.Input
                          value={newPet.petFurType}
                          onChange={(event) =>
                            setNewPet({
                              ...newPet,
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
                          value={newPet.petAge}
                          onChange={(event) =>
                            setNewPet({
                              ...newPet,
                              petAge: event.target.valueAsNumber,
                            })
                          }
                        />
                      </TextField.Root>
                      <Select.Root
                        defaultValue={newPet.petAgeUnit}
                        onValueChange={(value) =>
                          setNewPet({
                            ...newPet,
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
                        defaultValue={newPet.petAgeAproximate?.toString()}
                        onValueChange={(value) =>
                          setNewPet({
                            ...newPet,
                            petAgeAproximate: value === "true" ? true : false,
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
                          value={newPet.petWeight}
                          onChange={(event) =>
                            setNewPet({
                              ...newPet,
                              petWeight: event.target.valueAsNumber,
                            })
                          }
                        />
                      </TextField.Root>
                      <Select.Root
                        defaultValue={newPet.petWeightUnit}
                        onValueChange={(value) =>
                          setNewPet({
                            ...newPet,
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
                    <TextArea size='3' placeholder="Adicione uma descrição sobre o animal" value={newPet.petDescription} onChange={(event)=>setNewPet({...newPet, petDescription: event.target.value})}/>
                    <Text as='div' color="tomato">ADICIONAR MÉTODO PARA UPLOAD DE IMAGENS</Text>
      </Flex>
      <br />
      <Separator orientation="horizontal" size="4" />
      <br />
      <Flex direction="row" justify="between">
        <Button variant="surface" color="lime" className="w-fit"
        onClick={()=>props.dataAdderFunction(newPetAdderFunction())}>
          <Tooltip content="Cadastrar novo Animal no APP">
            <Flex direction="row" justify="between" align='center' gap='1'>
              CADASTRAR
              <Separator orientation="vertical" size="1" />
              <PlusIcon/>
            </Flex>
          </Tooltip>
        </Button>
        <Button variant="surface" color="tomato" className="w-fit"
        onClick={()=>setNewPet(emptyPet)}>
          <Tooltip content="Limpar Dados">
            <Flex direction="row" justify="between" align='center' gap='1'>
              LIMPAR
              <Separator orientation="vertical" size="1" />
              <EraserIcon/>
            </Flex>
          </Tooltip>
        </Button>
      </Flex>
    </Card>
  );
};

export default PetAdder;
