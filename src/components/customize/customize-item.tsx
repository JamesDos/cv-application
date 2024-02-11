// import { useState } from "react";
import '../../styles/customize.css';
import jsPDF from 'jspdf';

const CustomizeBar = () => {
  const generatePDF = () => {

    const resumeContainer = document.querySelector(".resume-container")?.cloneNode(true) as HTMLElement;

    resumeContainer.style.width = "620px";
    // resumeContainer.style.height = "842px";
    resumeContainer.style.marginLeft = "auto";
    resumeContainer.style.marginRight = "auto";

    if(resumeContainer) {
      const resume = new jsPDF('portrait', 'pt', 'a4');
      resume.html(resumeContainer as HTMLElement)
      ?.then(() => resume.save("resume.pdf"));
    }
  }


  return (
    <div className="customize-bar">
      <div className="customize-bar-content-container">
        <div className="icon" id="page-icon"></div>
        <p>Content</p>
      </div>
      <div className="customize-bar-customize-container">
        <div className="icon" id="customize-icon"></div>
        <p>Customize</p>
      </div>
      <div className="customize-bar-save-resume-contaner" onClick={generatePDF}>
        <div className="icon" id="save-icon"></div>
        <p>Save Resume</p>
      </div>
    </div>
  )
}

export default CustomizeBar