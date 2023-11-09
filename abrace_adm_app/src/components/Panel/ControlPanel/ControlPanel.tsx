import React from 'react'
import DonationLocationsCard from './DonationLocationsCard/DonationLocationsCard '
import { Flex } from '@radix-ui/themes'
import RecurrentPaymentPlansCard from './RecurrentPaymentPlansCard/RecurrentPaymentPlansCard'

const ControlPanel = () => {
  return (
    <Flex direction='row' justify='between' gap='5'>
        <DonationLocationsCard/>  
        <RecurrentPaymentPlansCard/>      
    </Flex>
  )
}

export default ControlPanel