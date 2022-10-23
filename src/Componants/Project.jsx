import { Box, Grid,Image,Text } from '@chakra-ui/react'
import React from 'react'

const projectsAll = [
  {
    id: 1,
    image:"./images/nordStrom.png",
    name: 'Nordstrom Clone',
    decription:"Nordstrom, Inc. is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids. Since 1901, thay have been committed to providing our customers with the best possible service—and to improving it every day.",
    TeckStack:"React, Javascript, CSS, Chakra UI",
  },
  {
    id:2,
    image:"",
    name:"Cricbuzz clone",
    description:"Cricbuzz is an Indian cricket news website owned by Times Internet. It features news, articles and live coverage of cricket matches including videos, text commentary, player stats and team rankings.",
    TeckStack:"HTML, Javascript, CSS",
  }
]

const Project = () => {
  return (
    <div>
      <Grid>
        <Box>
            <Image/>
            <Text></Text>
            <Box></Box>
            <Box>
                <Text></Text>
                <Text></Text>
            </Box>
        </Box>
      </Grid>
    </div>
  )
}

export default Project
