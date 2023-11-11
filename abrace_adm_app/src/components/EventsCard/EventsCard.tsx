import EventCard from "@/components/EventCard/EventCard";
import { Card, Flex, Heading, Separator } from "@radix-ui/themes";
import React from "react";
import EXAMPLEimg from "../../public/images/Volunteer.jpg";

let events = [
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

const EventsCard = () => {
  return (
    <Card variant="surface">
      <Flex direction="row" justify="between">
        <Heading color="amber">Eventos Cadastrados</Heading>
      </Flex>

      <Separator orientation="horizontal" size="4" />
      <br />
      <Flex direction="column" gap="1">
        {events.map((event) => {
          return (
            <EventCard
              name={event.name}
              URL={event.URL}
              ALT={event.ALT}
              date={event.date}
              time={event.time}
              duration={event.duration}
              location={event.location}
              description={event.description}
              linkToLocation={event.linkToLocation}
              deleterFunction={()=>alert("Ainda Não posso deletar")}
            />
          );
        })}
      </Flex>
    </Card>
  );
};

export default EventsCard;
