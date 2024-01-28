// import { useState } from 'react';
import { Resume } from './components/resume/resume';
import ResumeEditor from './components/resume_editor';
import EducationSection from './components/education/education_section';
import ExperienceSection from './components/experience/experience_section';
import './styles/App.css';

function App() {
  return (
    <>
    <Resume/>
    <ResumeEditor />
    <EducationSection />
    <ExperienceSection />
    </>
  )
}

export default App
