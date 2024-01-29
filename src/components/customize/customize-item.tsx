// import { useState } from "react";
import '../../styles/customize.css'

const CustomizeBar = () => {
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
    </div>
  )
}

export default CustomizeBar