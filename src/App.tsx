import { useState } from 'react';
import { Resume } from './components/resume/resume';
import ResumeEditor from './components/resume_editor/resume_editor';
import EducationSection from './components/education/education_section';
import ExperienceSection from './components/experience/experience_section';
import CustomizeBar from './components/customize/customize-item';
import startingData from './dummy_data';
import './styles/App.css';
import { PersonInfo, ResumeItemInfo } from './data_types/types';

function App() {
  const [person, setPerson] = useState(startingData)

  const setHeader = (propName: string, newName: string) => {
    setPerson({...person, personalDetails: {...person.personalDetails, [propName]: newName}})
  }

  const replaceElementAtId = (list: ResumeItemInfo[], id: string, newEducationItem: ResumeItemInfo) => {
    const acc = [];
    for(const item of list) {
      if (item.id === id) {
          acc.push(newEducationItem);
      } else {
        acc.push(item);
      }
    }
    return acc
  }

  const removeElementAtId = (list: ResumeItemInfo[], id: string) => {
    const acc = [];
    for (const item of list) {
      if (item.id !== id) {
        acc.push(item)
      }
    }
    return acc;
  }


  const setEducation = (newEducationItem: ResumeItemInfo, id: string) => {
    const newEducationList = replaceElementAtId(person.educationDetails, id, newEducationItem);
    setPerson({...person, educationDetails: newEducationList});
  }

  const setExperience = (newExperienceItem: ResumeItemInfo, id: string) => {
    const newExperienceList = replaceElementAtId(person.experienceDetails, id, newExperienceItem);
    setPerson({...person, experienceDetails: newExperienceList});
  }

  const deleteEducationItem = (id: string) => {
    const newEducationList = removeElementAtId(person.educationDetails, id);
    setPerson({...person, educationDetails: newEducationList});
  }

  const deleteExperienceItem = (id: string) => {
    const newExperienceList = removeElementAtId(person.experienceDetails, id);
    setPerson({...person, experienceDetails: newExperienceList});
  }
  
  return (
    <>
      <CustomizeBar/>
      <Resume {...person}/>
      <ResumeEditor 
        person={person} 
        setHeader={setHeader}
        setEd = {setEducation}
        delEd = {deleteEducationItem}
        setEx = {setExperience}
        delEx= {deleteExperienceItem}
        />
    </>
  )
}

export default App
