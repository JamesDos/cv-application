// import { useState } from "react";
import ResumeEditorHeader from "./resume_editor_header";
import PersonalDetails from "./personal_details";
import EducationSection from "./education/education_section";
import ExperienceSection from "./experience/experience_section";
import { HeaderInfo } from "../data_types/types";
import '../styles/resume_editor.css'

const ResumeEditor = ({personalDetails, setHeader}: {personalDetails: HeaderInfo, setHeader: (propName: string, newName: string) => void}) => {
  return (
    <>
      <ResumeEditorHeader/>
      <PersonalDetails personalDetails={personalDetails} setHeader={setHeader}/>
      <EducationSection />
      <ExperienceSection />
    </>
  )
}

export default ResumeEditor  