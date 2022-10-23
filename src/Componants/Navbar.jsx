import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Box display={"flex"} bgColor={"black"}>
            <Flex color="rgb(110, 206, 248)" margin="auto" gap="80%" justifyContent={"space-around"}>
                <Box>Logo</Box>
                <Flex w="700px" border={"1px solid white"} gap="10%">
                    <Flex>Dark</Flex>
                    <Flex>Home</Flex>
                    <Flex>About</Flex>
                    <Flex>Skill</Flex>
                    <Flex>Projects</Flex>
                    <Flex>Contact</Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar
