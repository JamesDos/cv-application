import { useState } from "react";
import DropdownItemContainer from "../dropdown/dropdown-item-container";
import { SectionProp } from "../../data_types/types";
import { ResumeItemInfo } from "../../data_types/types";
import EducationForm from "./education_form";
import '../../styles/icons.css';

const EducationSection = ({dropdownItems, isActive, handleDropdown, setItem, delItem}: SectionProp) => {

  const [formActive, setFormActive] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(dropdownItems[0]);

  const handleSelectEducation = (education: ResumeItemInfo) => {
    setFormActive(true);
    setSelectedEducation(education);
  }

  const cancelSelectEducation = () => {
    setFormActive(false);
    setSelectedEducation(dropdownItems[0]);
  }

  const renderEducationForm = () => {
    return <EducationForm cancelForm={cancelSelectEducation} education={selectedEducation} setItem={setItem} delItem={delItem}/>
  }

  const renderEducationSectionItems = () => {
    return (isActive[0])? 
        formActive ? renderEducationForm()
        : <DropdownItemContainer dropdownItems={dropdownItems} setItem={setItem} delItem={delItem} renderForm={handleSelectEducation}/> 
        : <></>
  }

  return (
    <div className="education-section">
      <div className="education-section-header" onClick={handleDropdown}>
        <div>
          <div className="icon" id="education-icon"></div>
          <h2>Education</h2>
        </div>
        <div className="icon chevron-up"></div>
      </div>
      {renderEducationSectionItems()}
    </div>
  )

}

export default EducationSection