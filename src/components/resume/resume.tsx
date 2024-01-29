// import {useState} from 'react';
import { ResumeHeader } from './resume_header';
import ResumeEducation from './resume_education';
import ResumeExperience from './resume_experience';
import '../../styles/resume.css';


const Resume = () => {
  return (
    <div className="resume-container">
       <ResumeHeader name="John Smith" email="johnsmith@gmail.com" phoneNum='123-456-789' city="New York, NY"/>
       <ResumeEducation />
       <ResumeExperience />
    </div>
  )
}

export {Resume}