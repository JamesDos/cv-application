// import { useState } from "react";
import { ResumeEditorHeaderProp } from "../../data_types/types"

const ResumeEditorHeader = ({clearResume, loadDefaultResume}: ResumeEditorHeaderProp) => {
  return (
    <div className="resume-editor-header">
      <div className="clear-resume-btn-container" onClick={clearResume}>
        <div className="icon" id="trash-icon"></div>
        <p className="clear-resume-btn">Clear Resume</p>
      </div>
      <div className="load-resume-btn-container" onClick={loadDefaultResume}>
        <p className="load-example-btn">Load Example</p>
      </div>
    </div>
  )
}

export default ResumeEditorHeader