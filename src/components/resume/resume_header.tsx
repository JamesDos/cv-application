// import { useState } from "react";
import { HeaderInfo } from "../../data_types/types";

const ResumeHeader = ({name, email, phoneNum, city}: HeaderInfo) => {
  return (
    <div className="resume-page-header">
      <div className="header-title">
        <h1>{name}</h1>
      </div>
      <div className="resume-header-info">
        <div className="resume-header-item">
          <div className="icon" id="email-icon"></div>
          <p>{email}</p>
        </div>
        <div className="resume-header-item">
          <div className="icon" id="phone-icon"></div>
          <p>{phoneNum}</p>
        </div>
        <div className="resume-header-item">
          <div className="icon" id="location-icon"></div>
          <p>{city}</p>
        </div>
      </div>
    </div>
  )
}

export {ResumeHeader}