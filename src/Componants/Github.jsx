import React from 'react'
import {Box} from "@chakra-ui/react"
import GitHubCalendar from 'react-github-calendar';
import "../CSS/Github.css"

const Github = () => {
  return (
    <Box>
    <Box className='gbox1'>
      <GitHubCalendar username="Hilton-Borah" color={"#001c55"}/>
 
    </Box>
      <Box className='gbox2'>
        <a href="https://github.com/Hilton-Borah">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=Hilton-Borah&theme=sea-dark&border_radius=10&background=E1EBFC&border=968FEF" //stats
          />
        </a>
      </Box>
      </Box>
  )
}

export default Github
