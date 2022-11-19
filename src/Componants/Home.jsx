import { Box, Image, Flex, Grid ,Button,Text, Link} from '@chakra-ui/react';
import React from 'react';
import "../CSS/Home.css";
import {BsGithub,BsFacebook,BsYoutube} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <Box id='home'>
      <Grid className='hgrid'>
        <Text className='htext1'>Hilton Kumar Borah</Text>
        <Text className='htext2'>(Hilton-Borah)</Text>
        <Text className='htext3' >Hi! I am Hilton Kumar Borah. I have a passion in technology to creates a business transformation and technology improvement. Highly skilled in strategic software development.</Text>
        <Flex className='hflex2'>
            <Link href='https://github.com/Hilton-Borah' target={"_blank"}><BsGithub/></Link>
            <Link href='https://www.linkedin.com/in/hilton-kumar-borah-964237195/' target={"_blank"}><FaLinkedin/></Link>
            <Link href='https://www.facebook.com/kajuborah.kajuborah.3/' target={"_blank"}><BsFacebook/></Link>
            <Link href='https://www.youtube.com/channel/UCdAr7fBurp9PYx8PYPr5zMQ' target={"_blank"}><BsYoutube/></Link>
            <Link href='https://www.instagram.com/hilton_bora/' target={"_blank"}><AiFillInstagram/></Link>
        </Flex>
        <a textDecoration={"none"} href='../Hilton_Kumar Borah_Resume.pdf' download><button bgColor={"#001c55"} className='hbutton'>See my Resume</button></a>
      </Grid>
      <Box>
        <Image className='himage' src='https://user-images.githubusercontent.com/103739534/202837668-b891e66b-43b3-42cd-ba2c-9dec733ef2f0.png'/>
      </Box>
    </Box>
  )
}

export default Home