// import { useState } from "react";
import ResumeItem from "./resume_item"


const ResumeEducation = () => {
  return (
    <div className="resume-education-section">
      <h3 className="resume-section-title">Education</h3>
      <ResumeItem startDate="1/1/2024" endDate="1/1/2024" location="New York, US" place="Cornell" descrTitle="Computer Science" descr=""/>
      <ResumeItem startDate="1/1/2024" endDate="1/1/2024" location="New York, US" place="Cornell" descrTitle="Computer Science" descr=""/>
    </div>
  )

}

export default ResumeEducation