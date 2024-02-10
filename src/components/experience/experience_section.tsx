import { useState} from "react";
import { SectionProp } from "../../data_types/types";
import DropdownItemContainer from "../dropdown/dropdown-item-container";
import ExperienceForm from "./experience_form";
import { ResumeItemInfo } from "../../data_types/types";
import ResumeItem from "../resume/resume_item";

const ExperienceSection = ({dropdownItems, isActive, handleDropdown, setItem, delItem, addItem}: SectionProp) => {

  const [formActive, setFormActive] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(dropdownItems[0]);
  const [editItem, setEditItem] = useState(false);

  const handleSelectExperience = (experience: ResumeItemInfo, editExperience: boolean) => {
    setFormActive(true);
    setSelectedExperience(experience);
    setEditItem(editExperience);
  }

  const cancelSelectExperience = () => {
    setFormActive(false);
    setSelectedExperience(dropdownItems[0]);
  }

  const renderExperienceForm = (isEditForm: boolean) => 
    <ExperienceForm 
    cancelForm={cancelSelectExperience} 
    experience={selectedExperience} 
    setItem={setItem} 
    delItem={delItem} 
    addItem={addItem}
    isEditForm={isEditForm}
    />
  

  const renderExperienceSectionItems = () => {
    return (isActive[1])? 
        formActive ? renderExperienceForm(editItem)
        : <DropdownItemContainer dropdownItems={dropdownItems} renderForm={handleSelectExperience} addItem={addItem}/> 
        : <></>
  }

  return (
    <div className="experience-section">
      <div className="experience-section-header" onClick={handleDropdown}>
        <div>
          <div className="icon" id="experience-icon"></div>
          <h2>Experience</h2>
        </div>
        <div className="icon chevron-up"></div>
      </div>
      {renderExperienceSectionItems()}
    </div>
  )
}

export default ExperienceSection