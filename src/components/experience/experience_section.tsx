import { useState } from "react";
import { SectionProp } from "../../data_types/types";
import DropdownItemContainer from "../dropdown/dropdown-item-container";
import ExperienceForm from "./experience_form";
import { ResumeItemInfo } from "../../data_types/types";

const ExperienceSection = ({dropdownItems, isActive, handleDropdown, setItem, delItem}: SectionProp) => {

  const [formActive, setFormActive] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState({});

  const getElementAtId = (list: ResumeItemInfo[], id: string) => {
    for (const item of list) {
      if (item.id === id) {
        return item;
      }
    }
  }

  const renderExperienceForm = (data: ResumeItemInfo) => {
    console.log('here')
    setFormActive(true);
    setSelectedExperience(data);
    return <ExperienceForm experience={data}/>
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
      {(isActive[1])? 
        formActive? <ExperienceForm/>: <DropdownItemContainer dropdownItems={dropdownItems} setItem={setItem} delItem={delItem} renderForm={renderExperienceForm}/> 
        : <></>}
    </div>
  )
}

export default ExperienceSection