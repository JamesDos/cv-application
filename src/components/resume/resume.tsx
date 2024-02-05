// import {useState} from 'react';
import { ResumeHeader } from './resume_header';
import ResumeEducation from './resume_education';
import ResumeExperience from './resume_experience';
import { PersonInfo} from '../../data_types/types';
import '../../styles/resume.css';


const Resume = ({personalDetails, educationDetails, experienceDetails}: PersonInfo) => {
  
  return (
    <div className="resume-container">
       <ResumeHeader 
          name={personalDetails.name} 
          email={personalDetails.email} 
          phoneNum={personalDetails.phoneNum} 
          city={personalDetails.city}
          />
       <ResumeEducation education={educationDetails}/>
       <ResumeExperience experience={experienceDetails}/>
    </div>
  )
}

export {Resume}