import EventsCard from "@/components/EventsCard/EventsCard";
import { Flex } from "@radix-ui/themes";
import React, { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import EXAMPLEimg from "../../../public/images/Volunteer.jpg";
import { StaticImageData } from "next/image";
import EventAdder from "@/components/EventAdder/EventAdder";


let events = [
    {
        name: "Domingário",
        URL: EXAMPLEimg,
        ALT: "ALT DA IMAGEM",
        date: "Todos os Domingos",
        time: "15:00",
        duration: "3h",
        location: "Abrigo Tal",
        description:
          "EVENTO FODA EVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODA",
        linkToLocation: "www.link.com.br",
      },
    {
      name: "Evento de Adoção 1",
      URL: EXAMPLEimg,
      ALT: "ALT DA IMAGEM",
      date: "29/01/1993",
      time: "23:30",
      duration: "3h",
      location: "Praça das Flores",
      description:
        "EVENTO FODA EVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODA",
      linkToLocation: "www.link.com.br",
    },
    {
      name: "Evento de Adoção 2",
      URL: EXAMPLEimg,
      ALT: "ALT DA IMAGEM",
      date: "29/02/1993",
      time: "00:30",
      duration: "5h",
      location: "Praça Luiza Távora",
      description:
        "EVENTO FODA EVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODAEVENTO FODA",
      linkToLocation: "www.link.com.br",
    },
  ];

  interface DataArrayProps {
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




const ManageEvents = () => {
  const [dataArray, setDataArray] = useState([] as Array<DataArrayProps>);
  useEffect(()=>{
    setDataArray(events);
  },[dataArray]);
  return <Flex direction="row" justify="center" gap="1" wrap='wrap'>
    <EventAdder
          dataArray={dataArray} 
          dataAdderFunction={()=>{setDataArray}}/>
    <EventsCard dataArray={dataArray}
   />
  </Flex>;
};

export default ManageEvents;
