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
} from "@radix-ui/themes";
import { StaticImageData } from "next/image";
import React, { FC, MouseEventHandler, ReactNode, useState } from "react";
import EXAMPLEimg from "../../public/images/Volunteer.jpg";
import { EraserIcon, PlusIcon } from "@radix-ui/react-icons";

interface DataProps {
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
}

interface DataArrayProps {
  children?: ReactNode;
  dataArray: Array<DataProps>;
  dataAdderFunction:   React.Dispatch<React.SetStateAction<DataProps[]>>;

}


const EventAdder:FC<DataArrayProps> = (props) => {
  const [newEvent, setNewEvent] = useState({} as DataProps);


  const emptyEvent = {
    name: "",
    URL: EXAMPLEimg,
    ALT: "",
    date: "",
    time: "",
    duration: "",
    location: "",
    description: "",
    linkToLocation: "",
  };

  function newEventAdderFunction(){
    let arrayClone = props.dataArray;
    arrayClone.push(newEvent);
    setNewEvent(emptyEvent);
    return arrayClone;
  }

  return (
    <Card className="w-3/5  min-w-[600px]">
      <Heading color="amber">Adicionar Novo Evento</Heading>
      <Separator orientation="horizontal" size="4" />
      <br />
      <Flex direction="column" justify="between" gap="1">
        <TextField.Root>
          <TextField.Slot>Nome:</TextField.Slot>
          <TextField.Input
            value={newEvent.name}
            onChange={(event) =>
              setNewEvent({
                ...newEvent,
                name: event.target.value,
              })
            }
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>Data:</TextField.Slot>
          <TextField.Input
            value={newEvent.date}
            onChange={(event) =>
              setNewEvent({
                ...newEvent,
                date: event.target.value,
              })
            }
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>Horário:</TextField.Slot>
          <TextField.Input
            value={newEvent.time}
            onChange={(event) =>
              setNewEvent({
                ...newEvent,
                date: event.target.value,
              })
            }
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>Duração:</TextField.Slot>
          <TextField.Input
            value={newEvent.duration}
            onChange={(event) =>
              setNewEvent({
                ...newEvent,
                duration: event.target.value,
              })
            }
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>Local:</TextField.Slot>
          <TextField.Input
            value={newEvent.location}
            onChange={(event) =>
              setNewEvent({
                ...newEvent,
                location: event.target.value,
              })
            }
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>Link do Google Maps:</TextField.Slot>
          <TextField.Input
            value={newEvent.linkToLocation}
            onChange={(event) =>
              setNewEvent({
                ...newEvent,
                linkToLocation: event.target.value,
              })
            }
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>upload de imágem:</TextField.Slot>
          <TextField.Input value="MÉTODO PARA UPLOAD DE IMAGEM VERCEL BLOB" />
        </TextField.Root>
        <TextArea size='3' placeholder="Adicione uma descrição para o evento" value={newEvent.description} onChange={(event) =>
              setNewEvent({
                ...newEvent,
                description: event.target.value,
              })
            }/>
      </Flex>
      <br />
      <Separator orientation="horizontal" size="4" />
      <br />
      <Flex direction="row" justify="between">
        <Button variant="surface" color="lime" className="w-fit"
        onClick={()=>props.dataAdderFunction(newEventAdderFunction())}>
          <Tooltip content="Cadastrar novo Evento no APP">
            <Flex direction="row" justify="between" align='center' gap='1'>
              CADASTRAR
              <Separator orientation="vertical" size="1" />
              <PlusIcon/>
            </Flex>
          </Tooltip>
        </Button>
        <Button variant="surface" color="tomato" className="w-fit"
        onClick={()=>setNewEvent(emptyEvent)}>
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

export default EventAdder;
