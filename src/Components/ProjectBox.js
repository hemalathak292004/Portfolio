import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TindogDesc : "A responsive and interactive eCommerce platform developed using HTML, CSS, and JavaScript. The website features a user-friendly interface with pages for browsing products, viewing product details, managing the cart, and completing the checkout process. It is designed to provide a smooth shopping experience across devices, ensuring optimal functionality on both desktop and mobile. The website integrates modern design elements and ensures ease of navigation for customers.",
    TindogGithub : "https://github.com/DevanshSahni/tindog",
    TindogWebsite : "https://devanshsahni.github.io/tindog/",

    RogFreeDesc : "An IT business website built with HTML, CSS, Bootstrap, and JavaScript. It features key sections like Home, About, Services, Portfolio, Team, Career, Contact, and FAQ. The site includes client engagement tools such as interactive contact forms, real-time chat support, and email notifications. It showcases project case studies and follows SEO best practices for better visibility, ensuring a seamless experience across devices.",
    RogFreeGithub : "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc:"This project develops a smart safety helmet for coal miners using IoT technology. Equipped with sensors to monitor gas levels, temperature, and humidity, the helmet uses LoRaWAN connectivity to send real-time data to a central system. It enhances safety by alerting miners and supervisors to hazardous conditions, with a battery-powered option for areas without reliable electricity.",
    NewsletterGithub:"",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    WigglesDesc:"My portfolio website is a personal project developed using React, showcasing my skills and projects in web development. It includes sections such as Home, About, Skills, Projects, and Contact, designed with a responsive and interactive layout. The website demonstrates my expertise in creating user-friendly, visually appealing web experiences and serves as a professional platform for potential employers or collaborators to explore my work and achievements.",
    WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox