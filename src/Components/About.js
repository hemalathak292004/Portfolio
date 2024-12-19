import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>Hi, my name is <b>Hemalatha</b>, and I am a <b>Pre- final year Computer Science Engineering</b> student at Kalaignar Karunanidhi Institute of Technology. <br/><br/>
          I’m passionate about web development and have hands-on experience in creating dynamic and user-friendly websites using technologies like  HTML, CSS, JavaScript, and React <br/><br/>
          I’ve worked on various projects, including eCommerce platforms, IT business websites, and IoT-based solutions. I love creating innovative solutions and am always open to learning new skills. You can explore some of my projects in the portfolio section.<br/><br/>
          I am <b>open</b> to collaborations and work opportunities where I can contribute and grow. Feel free to connect with me, links are in the footer. When I'm not coding, I enjoy exploring new technologies and working on personal projects.<br/>
        </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
      <Skills skill='React' />
      <Skills skill='Git' />
      <Skills skill='Github' />
      <Skills skill='Javascript' />
      <Skills skill='C' />
      <Skills skill='DSA' />
      <Skills skill='HTML' />
      <Skills skill='CSS' />
      <Skills skill='Python' />
      <Skills skill='SQL' />
    </div>
    </>
  )
}

export default About