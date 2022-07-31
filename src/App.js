import React, { useState, useEffect } from "react";
import{Icon} from '@chakra-ui/react';
import {SiGmail} from 'react-icons/si';
import {FiMoon, FiSun} from 'react-icons/fi';
import Skill from "./skill";
import { useToast } from '@chakra-ui/react';

import {
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import Home from "./home";
import About from "./About";
import HashLoader from "react-spinners/HashLoader";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function App() {

  const toast = useToast()
  const [loading, setloading] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <div height='100%'>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        >
        <HashLoader
          color="#2604ea"
          cssOverride={{}}
          loading
          size={150}
          speedMultiplier={2}
        />  
        </div>
      ) : (
        <>
          <Flex
            p={30}
            direction="row"
            backgroundColor={isDark ? "transparent" : "white"}
            w="100%"
            h="100%"
          >
            <Spacer/>

            <IconButton   
            marginRight={10}
            borderRadius='50%'
              borderColor={isDark ? "white" : "black"}
              onClick={toggleColorMode}
              icon={isDark ? <Icon as={FiMoon} /> : <Icon as = {FiSun} />}
            />
            <CopyToClipboard text="deepanshunegi10@gmail.com">
              <IconButton
                borderColor={isDark ? "white" : "black"}
                borderRadius='50%'
                variant="solid"
                aria-label="Email_Button"
                fontSize="20px"
                onClick={() => toast({
                  title:'Email Copied',   
                  description: 'Email copied. I am waiting for your message',
                  status: 'success',
                  duration: 5000,
                  isClosable: true,
                })}
                icon={ <Icon as = {SiGmail} /> }
              />
                  
            </CopyToClipboard>
          </Flex>

          <Home isDark={isDark} isNotSmallerScreen={isNotSmallerScreen} />

          <About
            isDark={isDark}
            isNotSmallerScreen={isNotSmallerScreen} />
          <Skill isNotSmallerScreen={isNotSmallerScreen} isDark/>
        </>
      )}
    </div>
  );
}
