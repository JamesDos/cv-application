import { useState } from "react";
import { SectionProp } from "../../data_types/types";
import DropdownItemContainer from "../dropdown/dropdown-item-container"

const ExperienceSection = ({dropdownItems, isActive, handleDropdown}: SectionProp) => {

  return (
    <div className="experience-section">
      <div className="experience-section-header" onClick={handleDropdown}>
        <div>
          <div className="icon" id="experience-icon"></div>
          <h2>Experience</h2>
        </div>
        <div className="icon chevron-up"></div>
      </div>
      {isActive[1] && <DropdownItemContainer dropdownItems={dropdownItems}/>}
    </div>
  )
}

export default ExperienceSection