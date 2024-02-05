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
      {/* <ResumeItem startDate="1/1/2024" endDate="1/1/2024" location="New York City, US" place="Umbrella Inc" descrTitle="UX & UI Designer" descr="Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"/>
      <ResumeItem startDate="1/1/2024" endDate="1/1/2024" location="New York City, US" place="Umbrella Inc" descrTitle="UX & UI Designer" descr="Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"/> */}
    </div>
  )


}

export default ResumeExperience