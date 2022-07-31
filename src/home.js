import React, { useState } from "react";
import {
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";


export default function Home(props) {
  let InitialbuttonColor = "white";
  const [Color, setColor] = useState(InitialbuttonColor);
  return (
    <Flex direction="column" m={0} alignItems="center">
      <Heading
        fontSize={props.isNotSmallerScreen ? "120px" : "70px"}
        mt={props.isNotSmallerScreen ? "50" : "100"}
        textAlign="center">
          
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("React Js")
              
              .deleteAll()
              .typeString("React Native")
              .deleteAll()
              .typeString("Drawing")
              .pauseFor(5000)
              .deleteAll()
              .start();
          }}
        />
      </Heading>

      <Heading
        fontSize={props.isNotSmallerScreen ? "120px" : "70px"}
        color="blue.400"
        mt="0"
        textAlign="center"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Developer")
              .pauseFor(4000)
              .deleteAll()
              .typeString("Artist")
              .pauseFor(5000)
              .deleteAll()
              .start();
          }}
        />
      </Heading>

      <a target="_blank"
      href="">
        <Button
          bg="blue.400"
          mt={50}
          h={50}
          w={120}
          boxShadow="dark-lg"
          borderRadius={30}
          border="1px"
          onMouseOver={
            props.isDark ? () => setColor("white") : () => setColor("black")
          }
          onMouseLeave={() => setColor(InitialbuttonColor)}
          borderColor={props.isDark ? "white" : "black"}
          color={Color}
        >
          Hire Me
        </Button>
      </a>
    </Flex>
  );
}
