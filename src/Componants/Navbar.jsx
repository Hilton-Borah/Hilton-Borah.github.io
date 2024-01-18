import { Box, Flex,Image,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import "../CSS/Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi";
import {HiXMark} from "react-icons/hi2"

const Navbar = () => {
    const [mobile,setMobile] = useState(false)
    return (
        <Box>
            <Box className='nflex'>
            <a href='#home'><Image className='nimage' src='https://user-images.githubusercontent.com/103739534/202837417-3fe0b666-ce93-4741-ba9a-8e9423e86455.jpg'/></a>
                <Box className={mobile?"ntext2-mobile":"ntext2"} onClick={()=>setMobile(false)}>
                    <a href='#home'><Flex className='nflex1'>Home</Flex></a>
                    <a href='#about'><Flex className='nflex1'>About</Flex></a>
                    <a href='#skill'><Flex className='nflex1'>Skill</Flex></a>
                    <a href='#project'><Flex className='nflex1'>Projects</Flex></a>
                    <a href='#contact'><Flex className='nflex1'>Contact</Flex></a>
                </Box>
                    <Box className='mobile-menu' onClick={()=>setMobile(!mobile)}><Button fontSize={"600px"}>{mobile?<HiXMark/>:<GiHamburgerMenu/>}</Button></Box>
            </Box>
        </Box>

    //     <nav className="bg-gray-800 w-full fixed top-0">
    //     <div className="w-navbar mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex items-center justify-between h-16">
    //         <div className="flex-shrink-0">
    //          <Link to={"/"}><img className='w-24' src="https://github.com/Hilton-Borah/dummyImageforUrbanGuys/assets/103739534/1a813db6-48a1-430b-8600-0604b7092076" alt="" />
    //          </Link> </div>
    //         <div className="hidden md:block">
    //           <div className="ml-10 flex items-baseline space-x-4">
    //           <a href='' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
    //           <a href='' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Movie control</a>
    //           <a href='' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wishlist</a>
    //           </div>
    //         </div>
    //         <div className="md:hidden">
    //           <button onClick={toggleNavbar} className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
    //             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //               {isOpen ? (
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    //               ) : (
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    //               )}
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     {isOpen && (
    //       <div className="md:hidden  border-t-2">
    //         <div className="px-2 pt-2 pb-3 space-y-1">
    //           <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
    //           <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Movie control</a>
    //           <a  href="" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wishlist</a>
    //         </div>
    //       </div>
    //     )}
    //   </nav>
    )
}

export default Navbar
