import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import SkillData from './skillsData.js';
import TinderCard from 'react-tinder-card';
import './skill.css';

export default function Skill(props) {
  return (  
    <>
      <Flex direction="column" mt={50}>
        <Heading textAlign="center" color='white' background = "linear-gradient(to left, #30CFD0 0%, #330867 100%)">Professional Skills</Heading>
          <div className="tinderCardDiv">
          <h1 color={props.isDark? 'white' : 'black'}>You can swipe the following cards shown below to see other skills.</h1>
          {SkillData.map((data)=>{
            return(
            <>
            <TinderCard className="tinderCard" preventSwipe={['right']}>
              <div className={props.isNotSmallerScreen?'imageDiv1':'imageDiv2'}
              style={{backgroundImage: `url(${data.skillImage})`}}>
               <p className="pSkillName">{data.skillName}</p>
              </div>
              </TinderCard>
            </>
            )
          })}
          </div>
      </Flex>
    </>
  );
}
