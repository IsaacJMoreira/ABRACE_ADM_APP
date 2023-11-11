import EventCard from "@/components/EventCard/EventCard";
import { Card, Flex, Heading, ScrollArea, Separator } from "@radix-ui/themes";
import React, { FC, MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { StaticImageData } from "next/image";

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
}

interface dataArrayProps {
  dataArray: Array<MyProps>;
}

const EventsCard: FC<dataArrayProps> = (props) => {
 
  const [eventsArray, setEventsArray] = useState([] as MyProps[]);

  useEffect(()=>{
    setEventsArray(props.dataArray);
  }, []);


  return (
    <Card variant="surface" className="w-2/6 min-w-[400px]">
      <Flex direction="row" justify="between">
        <Heading color="amber">Eventos Cadastrados</Heading>
      </Flex>

      <Separator orientation="horizontal" size="4" />
      <br />
      <ScrollArea
        type="always"
        scrollbars="vertical"
        style={{ height: "100%", maxHeight: 500 }}
      >
        <Flex direction="column" gap="1">
          {props.dataArray.map((event) => {
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
                deleterFunction={() => alert("Ainda não é possível executar esta função")}
              />
            );
          })}
        </Flex>
      </ScrollArea>
    </Card>
  );
};

export default EventsCard;
