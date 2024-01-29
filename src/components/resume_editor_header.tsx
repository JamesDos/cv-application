// import { useState } from "react";

const ResumeEditorHeader = () => {
  return (
    <div className="resume-editor-header">
      <div className="clear-resume-btn-container">
        <div className="icon" id="trash-icon"></div>
        <p className="clear-resume-btn">Clear Resume</p>
      </div>
      <div className="load-resume-btn-container">
        <p className="load-example-btn">Load Example</p>
      </div>
    </div>
  )
}

export default ResumeEditorHeader