// import { useState } from "react";
import ResumeItem from "./resume_item";
import { ResumeItemInfo } from "../../data_types/types";


const ResumeEducation = ({education}: {education: ResumeItemInfo[]}) => {

  const renderResumeItems = () => {
    return education.map((item) => 
      <ResumeItem 
        key={item.id} 
        id={item.id} 
        startDate={item.startDate} 
        endDate={item.endDate} 
        location={item.location} 
        place={item.place} 
        descrTitle={item.descrTitle} 
        descr={item.descr}/>
    )
  }

  return (
    <div className="resume-education-section">
      <h3 className="resume-section-title">Education</h3>
      {renderResumeItems()}
    </div>
  )

}

export default ResumeEducation