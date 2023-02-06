import { Box, Flex, Image, Text, Link } from '@chakra-ui/react'
import React from 'react';
import { BsGithub, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "../CSS/contactUs.css"
import { AiFillPhone } from "react-icons/ai"
import { MdOutlineAlternateEmail } from "react-icons/md"


const ContactUs = () => {
    return (
        <Box>
            <Text id='contact' >Get in Touch Contact me</Text>
            <Box className='cflex1'>
                <Box className='cbox'>
                    <Box className='cprofilebox'><Image className='cprofile' src='https://user-images.githubusercontent.com/103739534/202837993-02eca68a-ceb8-49f5-9ca8-aecef772e54a.jpg' /></Box>
                    <Text className='ctext2'>Got a project? Reach out and let's work together on something exciting. You can contact me at the places mentioned below.</Text>
                    <Flex className='cflex2'>
                        <Link href='https://github.com/Hilton-Borah' target={"_blank"}><BsGithub /></Link>
                        <Link href='https://www.linkedin.com/in/hilton-kumar-borah-964237195/' target={"_blank"}><FaLinkedin /></Link>
                        <Link href='https://www.facebook.com/kajuborah.kajuborah.3/' target={"_blank"}><BsFacebook /></Link>
                        <Link href='https://www.youtube.com/channel/UCdAr7fBurp9PYx8PYPr5zMQ' target={"_blank"}><BsYoutube /></Link>
                        <Link href='https://www.instagram.com/hilton_bora/' target={"_blank"}><AiFillInstagram /></Link>
                    </Flex>
                    <Link href={"https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=new"} target={"_blank"}><Flex className='ctext2' justifyContent={"center"} m={"auto"}>
                        <MdOutlineAlternateEmail />
                        <Text mt={"-5px"}>hiltonborah123@gmail.com</Text>
                    </Flex></Link>
                    <Flex className='ctext2' justifyContent={"center"}>
                        <AiFillPhone />
                        <Text mt={"-5px"}>+91-7002110273</Text>
                    </Flex>
                </Box>
                <Box>
                    <Image className='cimage' src='https://user-images.githubusercontent.com/103739534/202837902-3260823d-791a-45fa-910d-36c7243641c3.png' />
                </Box>
            </Box>
        </Box>
    )
}

export default ContactUs
