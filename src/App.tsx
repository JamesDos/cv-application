// import { useState } from 'react';
import { Resume } from './components/resume/resume';
import ResumeEditor from './components/resume_editor';
import EducationSection from './components/education/education_section';
import ExperienceSection from './components/experience/experience_section';
import CustomizeBar from './components/customize/customize-item';
import './styles/App.css';

function App() {
  return (
    <>
    <CustomizeBar/>
    <Resume/>
    <ResumeEditor />
    <EducationSection />
    <ExperienceSection />
    </>
  )
}

export default App
