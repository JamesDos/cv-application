import { useState } from 'react';
import { Resume } from './components/resume/resume';
import ResumeEditor from './components/resume_editor';
import EducationSection from './components/education/education_section';
import ExperienceSection from './components/experience/experience_section';
import CustomizeBar from './components/customize/customize-item';
import startingData from './components/dummy_data';
import './styles/App.css';

function App() {
  const [person, setPerson] = useState(startingData)

  const setHeader = (propName: string, newName: string) => {
    setPerson({...person, personalDetails: {...person.personalDetails, [propName]: newName}})
  }
  
  return (
    <>
      <CustomizeBar/>
      <Resume {...person}/>
      <ResumeEditor person={person} setHeader={setHeader}/>
    </>
  )
}

export default App
