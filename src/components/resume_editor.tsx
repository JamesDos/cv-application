import { useState } from "react";
import ResumeEditorHeader from "./resume_editor_header";
import PersonalDetails from "./personal_details";
import EducationSection from "./education/education_section";
import ExperienceSection from "./experience/experience_section";
import { HeaderInfo } from "../data_types/types";
import '../styles/resume_editor.css'

const ResumeEditor = ({personalDetails, setHeader}: {personalDetails: HeaderInfo, setHeader: (propName: string, newName: string) => void}) => {

  const [dropdownState, setDropdownState] = useState([false, false]);

  const handleToggleDropdownEd = () => {
    if(dropdownState[0]){
      if(dropdownState[1]) {
        setDropdownState([false, true])
      } else {
        setDropdownState([false, false])
      }
    } else {
      setDropdownState([true, false])
    }
  }

  const handleToggleDropdownEx = () => {
    if(dropdownState[1]){
      if(dropdownState[0]) {
        setDropdownState([true, false])
      } else {
        setDropdownState([false, false])
      }
    } else {
      setDropdownState([false, true])
    }
  }

  return (
    <>
      <ResumeEditorHeader/>
      <PersonalDetails personalDetails={personalDetails} setHeader={setHeader}/>
      <EducationSection isActive = {dropdownState} handleDropdown = {handleToggleDropdownEd}/>
      <ExperienceSection isActive = {dropdownState} handleDropdown = {handleToggleDropdownEx}/>
    </>
  )
}

export default ResumeEditor  