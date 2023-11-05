import { Box, Flex } from '@radix-ui/themes'
import React from 'react'
import RevenueCard from '../../RevenueCard/RevenueCard'
import AdoptionCard from '../../AdoptionCard/AdoptionCard'
import UsersCard from '../../UsersCard/UsersCard'
import KanBanBoardCard from '../../KanbanBoardCard/KanBanBoardCard'

const Sumary = () => {
  return (
    <Flex
              direction="column"
              align="center"
              justify="between"
              gap="3"
              wrap="wrap"
            >
              <Box className="w-full h-fit min-h-[300px]">
                <Flex
                  direction="row"
                  justify="between"
                  align="center"
                  gap="1"
                  wrap="wrap"
                >
                  <RevenueCard />
                  <AdoptionCard />
                  <UsersCard />
                </Flex>
              </Box>

              <Box className="w-full h-fit">
                <KanBanBoardCard />
              </Box>
            </Flex>
  )
}

export default Sumary;