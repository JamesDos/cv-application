// import { useState } from "react";
import ResumeItem from "./resume_item";
import { ResumeItemInfo } from "../../data_types/types";
const ResumeExperience = ({experience}: {experience: ResumeItemInfo[]}) => {

  const renderResumeItems = () => {
    return experience.map((item) => 
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
    <div className="resume-experience-section">
      <h3 className="resume-section-title">Experience</h3>
      {renderResumeItems()}
    </div>
  )


}

export default ResumeExperience