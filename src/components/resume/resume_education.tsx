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
      {/* <ResumeItem startDate="1/1/2024" endDate="1/1/2024" location="New York, US" place="Cornell" descrTitle="Computer Science" descr=""/>
      <ResumeItem startDate="1/1/2024" endDate="1/1/2024" location="New York, US" place="Cornell" descrTitle="Computer Science" descr=""/> */}
    </div>
  )

}

export default ResumeEducation