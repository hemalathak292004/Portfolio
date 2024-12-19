import React from 'react';
import { CgCPlusPlus } from 'react-icons/cg';
import { SiPostman, SiExpress, SiMongodb, SiVercel, SiMysql } from 'react-icons/si';
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHtml5, FaCss3Alt, FaPython, FaPhp } from 'react-icons/fa';
import { DiJavascript1, DiNodejs } from 'react-icons/di';

const Skills = ({ skill }) => {
    const icon = {
        'React': <FaReact />,
        'Javascript': <DiJavascript1 />,
        'Git': <FaGitAlt />,
        'Github': <FaGithub />,
        'HTML': <FaHtml5 />,
        'CSS': <FaCss3Alt />,
        'Python': <FaPython />,
        'SQL': <SiMysql />,
        'C': <CgCPlusPlus />,  
        'DSA': <DiNodejs />  
    };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
