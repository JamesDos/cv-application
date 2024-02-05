import { useState, useEffect, useCallback} from "react";
import { SectionProp } from "../../data_types/types";
import DropdownItemContainer from "../dropdown/dropdown-item-container";
import ExperienceForm from "./experience_form";
import { ResumeItemInfo } from "../../data_types/types";
import ResumeItem from "../resume/resume_item";

const ExperienceSection = ({dropdownItems, isActive, handleDropdown, setItem, delItem}: SectionProp) => {

  const [formActive, setFormActive] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(dropdownItems[0]);

  const getElementAtId = (list: ResumeItemInfo[], id: string) => {
    for (const item of list) {
      if (item.id === id) {
        return item;
      }
    }
  }

  const handleSelectExperience = (experience: ResumeItemInfo) => {
    console.log('here')
    setFormState(true);
    setSelectedExperience(experience);
  }

  const setFormState = (state: boolean) => {
    setFormActive(state);
  }

  // useEffect(() => {
  //   setFormState(true);
  // }, [selectedExperience])

  const renderExperienceForm = () => {
    // console.log('here');
    return <ExperienceForm experience={selectedExperience}/>
  }

  const renderExperienceSectionItems = () => {
    return (isActive[1])? 
        formActive ? renderExperienceForm()
        : <DropdownItemContainer dropdownItems={dropdownItems} setItem={setItem} delItem={delItem} renderForm={handleSelectExperience}/> 
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