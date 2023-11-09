import EventCard from '@/components/EventCard/EventCard'
import { Card } from '@radix-ui/themes'
import React from 'react'
import EXAMPLEimg from '../../public/images/Volunteer.jpg'

const EventsCard = () => {
  return (
    <Card variant="ghost" className="bg-gradient-to-br from-[#FFF9C4] to-[#F7EB7Af0]  p-3" style={{ width: 600 }}>
        <EventCard
        name='nome'
        URL={EXAMPLEimg}
        ALT='ALT DA IMAGEM'
        date="date"
        time="hora"
        duration='3h'
        location='localização'
        description='evento foda'
        linkToLocation='www.link.com.br'/>
    </Card>
  )
}

export default EventsCard