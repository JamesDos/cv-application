// import { useState } from "react";
import ResumeItem from "./resume_item"
const ResumeExperience = () => {

  return (
    <div className="resume-experience-section">
      <h3 className="resume-section-title">Experience</h3>
      <ResumeItem startDate="1/1/2024" endDate="1/1/2024" location="New York City, US" place="Umbrella Inc" descrTitle="UX & UI Designer" descr="Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"/>
      <ResumeItem startDate="1/1/2024" endDate="1/1/2024" location="New York City, US" place="Umbrella Inc" descrTitle="UX & UI Designer" descr="Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"/>
    </div>
  )


}

export default ResumeExperience