import { Box,Flex,Text } from '@chakra-ui/react'
import React from 'react'
import {BsFillSuitHeartFill} from "react-icons/bs"
import "../CSS/Footer.css"

const Footer = () => {
  return (
    <Box>
      <Text className='fText'>Designed and build by Hilton Kumar Borah, 2022 All rights reserved.</Text>
      <Flex className='fFlex'><Text>Thank You</Text><BsFillSuitHeartFill fontSize={"15px"}/></Flex>
    </Box>
  )
}

export default Footer
