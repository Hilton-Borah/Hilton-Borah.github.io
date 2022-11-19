import { Box, Flex, Grid, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { projectsAll } from '../Card/Projects'
import {AiFillEye} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import "../CSS/Project.css"

// const projectsAll = [
//   {
//     id: 1,
//     image:"https://tinypic.host/images/2022/10/26/nordStrom.png",
//     name: 'Nordstrom Clone',
//     decription:"Nordstrom, Inc. is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids. Since 1901, thay have been committed to providing our customers with the best possible service—and to improving it every day.",
//     TeckStack:"React, Javascript, CSS, Chakra UI",
//     ViewLink:"https://super-cool-site-by-hilton-borah.netlify.app/",
//     RapoLink:"https://github.com/Hilton-Borah/scared-note-9891"
//   },
// ]

const Project = () => {
  return (
    <Box>
      <Text id='project'>My Creative Project Section</Text>
      <Flex className='pflex1'>
        <Image className='pimage1' src='https://user-images.githubusercontent.com/103739534/202837850-9b26f3d8-b870-4b8f-be0a-931d1634d719.png' />
        <Text className='ptext1'>My projects are make using MERN technologies. My best experience is to make such awesome user friendly projects and deploy them to Netlify, Vercel using git and github.</Text>
      </Flex>
      <Grid className='pgrid'>
        {projectsAll.map((el) => {
          return (
            <Box className='pbox'>
              <Image className='pimage2' src={el.image} />
              <Text className='ptext2'>{el.name}</Text>
              <Box className='ptext3'><Text>{el.description}</Text></Box>
              <Box className='ptext4'>
              <Text><span>Teck Stack:</span> {el.TeckStack}</Text>
              </Box>
              <Flex className='pflex2'>
                <a textDecoration={"none"} href={el.ViewLink} target="_blank"><Flex border={"1px solid lightgray"} borderRadius={"5px"} fontSize={"13px"} alignItems={"center"} gap={"5px"} padding={"3px"}><Text>Live</Text> <AiFillEye/></Flex></a>
                <Text>--------</Text>
                <a textDecoration={"none"} href={el.RapoLink} target="_blank"><Flex border={"1px solid lightgray"} borderRadius={"5px"} fontSize={"13px"} alignItems={"center"} gap={"5px"} padding={"3px"}><Text>Code</Text> <AiFillGithub/></Flex></a>
              </Flex>
            </Box>
          )
        })}
      </Grid>
      <a  href='https://github.com/Hilton-Borah?tab=repositories' target={"_blank"}><button bgColor={"#001c55"} className='hbutton'>More projects..</button></a>
    </Box>
  )
}

export default Project
