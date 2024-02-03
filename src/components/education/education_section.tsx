import { useState } from "react";
import DropdownItemContainer from "../dropdown/dropdown-item-container";
import { SectionProp } from "../../data_types/types";
import '../../styles/icons.css';

const EducationSection = ({dropdownItems, isActive, handleDropdown}: SectionProp) => {

  return (
    <div className="education-section">
      <div className="education-section-header" onClick={handleDropdown}>
        <div>
          <div className="icon" id="education-icon"></div>
          <h2>Education</h2>
        </div>
        <div className="icon chevron-up"></div>
      </div>
      {isActive[0] && <DropdownItemContainer dropdownItems={dropdownItems}/>}
    </div>
  )

}

export default EducationSection