import { useState } from "react";
import DropdownItemContainer from "../dropdown/dropdown-item-container";
import { SectionProp } from "../../data_types/types";
import { ResumeItemInfo } from "../../data_types/types";
import EducationForm from "./education_form";
import '../../styles/icons.css';

const EducationSection = ({dropdownItems, isActive, handleDropdown, setItem, delItem, addItem}: SectionProp) => {

  const [formActive, setFormActive] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(dropdownItems[0]);
  const [editForm, setEditItem] = useState(false)

  const handleSelectEducation = (education: ResumeItemInfo, editEducation: boolean) => {
    setFormActive(true);
    setSelectedEducation(education);
    setEditItem(editEducation)
  }

  const cancelSelectEducation = () => {
    setFormActive(false);
    setSelectedEducation(dropdownItems[0]);
  }

  const renderEducationForm = (isEditForm: boolean) => 
    <EducationForm 
      cancelForm={cancelSelectEducation} 
      education={selectedEducation} 
      setItem={setItem} 
      delItem={delItem}
      addItem={addItem}
      isEditForm={isEditForm}
      />
  

  const renderEducationSectionItems = () => {
    return (isActive[0])? 
        formActive ? renderEducationForm(editForm)
        : <DropdownItemContainer dropdownItems={dropdownItems} renderForm={handleSelectEducation} addItem={addItem}/> 
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