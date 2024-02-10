
import { useState } from "react";
import FormItem from "../form_item";
import { ExperienceFormProp } from "../../data_types/types";

const ExperienceForm = ({experience, cancelForm, setItem, delItem, addItem, isEditForm}: ExperienceFormProp) => {

  const [experienceItemInfo, setExperienceItemInfo] = useState({...experience});
  
  const handleExperienceItemInfoChange = (prop: string, newVal: string) => {
    setExperienceItemInfo({...experienceItemInfo, [prop]: newVal});
  }
  
  const handleSaveForm = (e: Event) => {
    e.preventDefault();
    if (isEditForm) {
      setItem(experienceItemInfo, experienceItemInfo.id);
      cancelForm();
    } else {
      addItem(experienceItemInfo)
    }
    cancelForm();
  }

  const handleDeleteForm = (e: Event) => {
    e.preventDefault();
    if (isEditForm) {
      delItem(experienceItemInfo.id);
    }
    cancelForm();
  }


  return (
    <div className="experience-form">
      <form>
        <FormItem 
          label="Company Name" 
          id="company-field" 
          type="text" 
          placeholder="Enter Company Name" 
          value={experienceItemInfo.location}
          onChange={newCompany => handleExperienceItemInfoChange("location", newCompany)}
          />
        <FormItem 
          label="Position Title" 
          id="position-field" 
          type="text" 
          placeholder="Enter Position Title" 
          value={experienceItemInfo.descrTitle}
          onChange={newDescrTitle => handleExperienceItemInfoChange("descrTitle", newDescrTitle)}
          />
        <FormItem 
          label="Start Date" 
          id="state-date-field" 
          type="text" 
          placeholder="" 
          value={experienceItemInfo.startDate}
          onChange={newStartDate => handleExperienceItemInfoChange("startDate", newStartDate)}
          />
        <FormItem 
          label="End Date" 
          id="end-date-field" 
          type="text" 
          placeholder="" 
          value={experienceItemInfo.endDate}
          onChange={newEndDate => handleExperienceItemInfoChange("endDate", newEndDate)}
          />
        <FormItem 
          label="Location" 
          id="location-field" 
          type="text" 
          placeholder="Enter Location" 
          value={experienceItemInfo.place}
          onChange={newPlace => handleExperienceItemInfoChange("place", newPlace)}/>

        <div className="experience-description">
          <label htmlFor="experience-description-area">Description</label>
          <textarea 
            name="description" 
            id="experience-description-area" 
            cols={30} 
            rows={10} 
            value={experienceItemInfo.descr} 
            onChange={e => handleExperienceItemInfoChange("descr", e.target.value)}></textarea>
        </div>
        <div className="form-btns-container">
          <button className="delete-form-btn" onClick={e => handleDeleteForm(e)}><div className="icon btn-trash-icon"></div>Delete</button>
          <button className="cancel-form-btn" onClick={cancelForm}>Cancel</button>
          <button className="save-form-btn" onClick={e => handleSaveForm(e)}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default ExperienceForm