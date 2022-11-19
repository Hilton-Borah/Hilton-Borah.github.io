import { Box, Flex, Grid, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import {SlEnergy} from "react-icons/sl"
import "../CSS/about.css"

const About = () => {
  return (
    <Box>
      <Text id="about" >All About Me</Text>
      <Box className='aflex1'>
        <Box>
          <Image className='aimage' src='https://user-images.githubusercontent.com/103739534/202837803-d81c13a9-4ca0-4270-83aa-c9791db46249.png'/>
        </Box>
        <Grid className='agrid'>
          <List spacing={3} className='atext'>
            <ListItem>
              <ListIcon as={SlEnergy} color='#001c55' />
              Hello! My name Hilton Kumar Borah and I enjoy creating things that live on the internet.
            </ListItem>
            <ListItem>
              <ListIcon as={SlEnergy} color='#001c55' />
              I'm a passionate Developer, with strong administrative and communication skills, good attention to detail and the ability to write efficient code using MERN Stack.

            </ListItem>
            <ListItem>
              <ListIcon as={SlEnergy} color='#001c55' />
              Fast Forwarding to today, I built a number of web applications and 4 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a full stack web developer.
            </ListItem>
          </List>
        </Grid>
      </Box>
    </Box>
  )
}

{/* <img src="https://tinypic.host/images/2022/10/26/portfolio3.png" alt="portfolio3.png" border="0" /> */}
export default About
