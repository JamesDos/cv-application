// import { useState } from "react";
import { HeaderInfo } from "../../data_types/types";

const ResumeHeader = ({name, email, phoneNum, city}: HeaderInfo) => {
  return (
    <div className="resume-page-header">
      <div className="header-title">
        <h1>{name}</h1>
      </div>
      <div className="resume-header-info">
        <div>
          <div className="icon email-icon"></div>
          <p>{email}</p>
        </div>
        <div>
          <div className="icon phone-icon"></div>
          <p>{phoneNum}</p>
        </div>
        <div className="icon location-icon">
          <p>{city}</p>
        </div>
      </div>
    </div>
  )
}

export {ResumeHeader}