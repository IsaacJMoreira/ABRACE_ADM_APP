import React from 'react'
import DonationLocationsCard from './DonationLocationsCard/DonationLocationsCard '
import { Flex } from '@radix-ui/themes'

const ControlPanel = () => {
  return (
    <Flex direction='row' justify='between' gap='5'>
        <DonationLocationsCard/>        
    </Flex>
  )
}

export default ControlPanel