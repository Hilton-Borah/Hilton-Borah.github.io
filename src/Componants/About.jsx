import { Box, Flex, Grid, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import {SlEnergy} from "react-icons/sl"
import "../CSS/about.css"

const About = () => {
  return (
    <Box>
      <Text className="atext" >All About Me</Text>
      <Flex className='aflex1'>
        <Box>
          <Image className='aimage' src='./images/potfolio1.png'/>
        </Box>
        <Grid className='agrid'>
          <List spacing={3} className='agrid'>
            <ListItem>
              <ListIcon as={SlEnergy} color='#001c55' />
              Hello! My name Debobrota Haldar and I enjoy creating things that live on the internet.
            </ListItem>
            <ListItem>
              <ListIcon as={SlEnergy} color='#001c55' />
              I'm a passionate Developer, with strong administrative and communication skills, good attention to detail and the ability to write efficient code using MERN Stack.

            </ListItem>
            <ListItem>
              <ListIcon as={SlEnergy} color='#001c55' />
              My interest in web development started back last year when I was trying to edit things on the web, that taught me a lot about HTML & CSS.
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={SlEnergy} color='#001c55' />
              As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.
            </ListItem>
            <ListItem>
              <ListIcon as={SlEnergy} color='#001c55' />
              Fast Forwarding to today, I built a number of web applications and 4 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a full stack web developer.
            </ListItem>
          </List>
        </Grid>
      </Flex>
    </Box>
  )
}


export default About
