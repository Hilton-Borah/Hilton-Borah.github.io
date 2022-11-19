import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import "../CSS/Skill.css"

const Skill = () => {
  return (
    <Box>
      <Text id="skill" >My Technical Skills</Text>
      <Flex className='sflex'>
        <Box className='sgrid'>
          <Box  className='sbox'>
            <Image src="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
            <Text className='stext1'>HTML</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://cdn-icons-png.flaticon.com/512/732/732190.png" />
            <Text className='stext1'>CSS</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <Text className='stext1'>Javascript</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" />
            <Text className='stext1'>React</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://cdn.worldvectorlogo.com/logos/redux.svg" />
            <Text className='stext1'>Redux</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
            <Text className='stext1'>Typescript</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://debobrota-haldar.netlify.app/static/media/chakra.15320604467d004df871.png" />
            <Text className='stext1'>ChakraUI</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg" />
            <Text className='stext1'>Node js</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://debobrota-haldar.netlify.app/static/media/express.4925c0127df8857c18b38329795ce88f.svg" />
            <Text className='stext1'>Express</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://www.svgrepo.com/show/331488/mongodb.svg" />
            <Text className='stext1'>MongoDB</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://cdn-icons-png.flaticon.com/512/6577/6577287.png" />
            <Text className='stext1'>Git</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://www.svgrepo.com/show/354128/npm.svg" />
            <Text className='stext1'>NPM</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://cdn-icons-png.flaticon.com/512/5658/5658359.png" />
            <Text className='stext1'>DS & Algo</Text>
          </Box>
          <Box  className='sbox'>
            <Image w={"100px"} src="https://www.svgrepo.com/show/330247/cypress.svg" />
            <Text className='stext1'>Cypress</Text>
          </Box>
          <Box  className='sbox'>
            <Image src="https://www.svgrepo.com/show/354202/postman-icon.svg" />
            <Text className='stext1'>Postman</Text>
          </Box>
        </Box>
        <Box>
          <Image className='simage' src='https://user-images.githubusercontent.com/103739534/202837843-6d42e6a9-12a5-4d95-b2ea-5d23eef94d87.png' />
        </Box>    
      </Flex>
    </Box>
  )
}

export default Skill
