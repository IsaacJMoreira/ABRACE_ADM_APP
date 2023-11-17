import AllUsersCard from '@/components/AllUsersCard/AllUsersCard'
import { Flex } from '@radix-ui/themes'
import React from 'react'

const ManageUsers = () => {
  return (
    <Flex direction='row' justify='center' gap='3' align='center'>
        <AllUsersCard/>
    </Flex>
  )
}

export default ManageUsers