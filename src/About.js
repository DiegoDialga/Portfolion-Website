import {
  Flex,
  Heading,
  Container,
  WrapItem,
  Wrap,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <>
      <Flex direction="column" mt={150}>
        <Heading className='text' textAlign="center" color='white' background="linear-gradient(to left, #30CFD0 0%, #330867 100%)">About</Heading>
        <Flex direction={props.isNotSmallerScreen ? "row" : "column"} m={10}>
          <Flex direction="column" alignItems="center">

            <Wrap data-aos="fade-up">
              <WrapItem borderRadius="5%" overflow="hidden">

                <img src="./1658375039933.jpg" width={props.isNotSmallerScreen ? "450px" : "350px"}
                  height={props.isNotSmallerScreen ? "450px" : "350px"} alt="" />
              </WrapItem>
            </Wrap>

            <Flex direction="row" alignItems="center" columnGap={30} mt={10}>

              <a href="https://github.com/DiegoDialga" target="_blank" rel='noreferrer'>
                <img src="./images/github.png" alt="" width="40" height="40" />
              </a>

              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <img
                  src="./images/linkedin.png"
                  alt=""
                  width="40"
                  height="40" />
              </a>

              <a href="https://twitter.com/" target="_blank" rel='noreferrer'>
                <img src="./images/twitter.png" alt="" width="40" height="40" />
              </a>

            </Flex>
          </Flex>

          <Container centerContent mt={100}>
            <Text as="samp" textAlign="left" color='blue.400'>
              Hi, there. My name is Deepanshu and I am a junior Javascript Developer based in India. 
              I am self-taught and am learning to develop Web and Android. 
              I like to build websites and applications in the simples and most effective way. 
              I primarily work with React.js and React Native frameworks and libraries. Lately enjoying Android development, therefore working on the projects using React Native.
            </Text>
          </Container>

        </Flex>
      </Flex>
    </>
  );
}
