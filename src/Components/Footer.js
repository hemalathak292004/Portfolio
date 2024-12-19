import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Hemalatha</h4>
      <h4>Copyright &copy; 2024 </h4>
      <div className='footerLinks'>
        <a href="https://github.com/hemalathak292004" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/hemalatha-k-126949285/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:hemalatha292004@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://codolio.com/profile/HemalathaK" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer