import { Box, Flex, Image, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import "../CSS/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <Box className="navbar-container">
      <Flex className="nflex">
        <a href="#home">
          <Image
            className="nimage"
            src="https://user-images.githubusercontent.com/103739534/202837417-3fe0b666-ce93-4741-ba9a-8e9423e86455.jpg"
            alt="Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <Box className={mobile ? "ntext2-mobile" : "ntext2"} onClick={() => setMobile(false)}>
          <a href="#home">
            <Flex className="nflex1">Home</Flex>
          </a>
          <a href="#about">
            <Flex className="nflex1">About</Flex>
          </a>
          <a href="#skill">
            <Flex className="nflex1">Skills</Flex>
          </a>
          <a href="#project">
            <Flex className="nflex1">Projects</Flex>
          </a>
          <a href="#contact">
            <Flex className="nflex1">Contact</Flex>
          </a>
        </Box>

        {/* Mobile Menu Button */}
        <Box className="mobile-menu" onClick={() => setMobile(!mobile)}>
          <Button className="menu-button">{mobile ? <HiXMark /> : <GiHamburgerMenu />}</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
