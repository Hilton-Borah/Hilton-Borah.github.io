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
              Hello! I'm Hilton Kumar Borah, a passionate Full Stack Developer who loves building dynamic and user-friendly web applications.
            </ListItem>
            <ListItem style={{marginTop: '10px'}}>
              <ListIcon as={SlEnergy} color='#001c55' />
              With 2 years of experience in both professional and freelance projects, I have worked on 5+ real-life applications, honing my skills in the MERN stack. My expertise lies in writing clean, efficient code while ensuring seamless functionality and great user experience.
            </ListItem>
            <ListItem style={{marginTop: '10px'}}>
              <ListIcon as={SlEnergy} color='#001c55' />
              Beyond coding, I bring strong communication, teamwork, and leadership skills—gained through hands-on experience in fast-paced environments. I'm always eager to learn and take on new challenges, looking for the next opportunity to build impactful digital solutions.
            </ListItem>
          </List>
        </Grid>
      </Box>
    </Box>
  )
}

{/* <img src="https://tinypic.host/images/2022/10/26/portfolio3.png" alt="portfolio3.png" border="0" /> */}
export default About
