import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>HEMALATHA K</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          I am passionate about transforming innovative ideas into impactful websites and products that enhance lives. 
          I thrive on challenges that push me to grow as a developer, and I take pride in the work I create.<br /><br />
          I am proficient in <b>C</b> and <b>Python</b>, and currently honing my skills through projects in the <b>MERN</b> stack. 
          I am constantly learning and looking forward to mastering <b>React</b>, <b>Node.js</b>, and <b>TypeScript</b> soon.<br /><br />
          
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home