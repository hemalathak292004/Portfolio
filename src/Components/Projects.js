import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Ecommerce Website" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="IT Buisness Website" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="IoT Project" />
        <ProjectBox projectPhoto={TindogImage} projectName="Personal-Portfolio" />
      </div>

    </div>
  )
}
                                                                                                                                                                                                       
export default Projects