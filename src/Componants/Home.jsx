import { Box, Image, Flex, Grid ,Button,Text} from '@chakra-ui/react';
import React from 'react';
import "../CSS/Home.css";
import {BsGithub,BsFacebook,BsYoutube} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <Flex className='hflex'>
      <Grid className='hgrid'>
        <Text className='htext1'>Hilton Kumar Borah</Text>
        <Text className='htext2'>(Hilton-Borah)</Text>
        <Text className='htext3' >Hi! I am Hilton Kumar Borah. I have a passion for technology and the positive impact it creates in business transformation and technology improvement. Highly skilled in strategic software development and leading high-performing and energetic teams.</Text>
        <Flex className='hflex2'>
            <BsGithub/>
            <FaLinkedin/>
            <BsFacebook/>
            <BsYoutube/>
            <AiFillInstagram/>
        </Flex>
        <Button bgColor={"#001c55"} className='hbutton'>See my Resume</Button>
      </Grid>
      <Box>
        <Image className='himage' src='./images/porfolio.png'/>
      </Box>
    </Flex>
  )
}

export default Home
