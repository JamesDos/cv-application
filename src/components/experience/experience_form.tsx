
import { useState } from "react";
import FormItem from "../form_item";
import { ExperienceFormProp } from "../../data_types/types";

const ExperienceForm = ({experience, cancelForm, setItem, delItem}: ExperienceFormProp) => {

  const [experienceItemInfo, setExperienceItemInfo] = useState({...experience});

  const handleCompanyChange = (newCompany: string) => {
    setExperienceItemInfo({...experienceItemInfo, location: newCompany});
  }

  const handleDescrTitleChange = (newDescrTitle: string) => {
    setExperienceItemInfo({...experienceItemInfo, descrTitle: newDescrTitle});
  }

  const handleStartDateChange = (newStartDate: string) => {
    setExperienceItemInfo({...experienceItemInfo, startDate: newStartDate});
  }

  const handleEndDateChange = (newEndDate: string) => {
    setExperienceItemInfo({...experienceItemInfo, endDate: newEndDate});
  }

  const handPlaceChange = (newPlace: string) => {
    setExperienceItemInfo({...experienceItemInfo, place: newPlace});
  }

  const handleDescrChange = (newDescr: string) => {
    setExperienceItemInfo({...experienceItemInfo, descr: newDescr});
  }

  const handleSaveForm = (e: Event) => {
    e.preventDefault();
    setItem(experienceItemInfo, experienceItemInfo.id);
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
          onChange={newCompany => handleCompanyChange(newCompany)}
          />
        <FormItem 
          label="Position Title" 
          id="position-field" 
          type="text" 
          placeholder="Enter Position Title" 
          value={experienceItemInfo.descrTitle}
          onChange={newDescrTitle => handleDescrTitleChange(newDescrTitle)}
          />
        <FormItem 
          label="Start Date" 
          id="state-date-field" 
          type="text" 
          placeholder="" 
          value={experienceItemInfo.startDate}
          onChange={newStartDate => handleStartDateChange(newStartDate)}
          />
        <FormItem 
          label="End Date" 
          id="end-date-field" 
          type="text" 
          placeholder="" 
          value={experienceItemInfo.endDate}
          onChange={newEndDate => handleEndDateChange(newEndDate)}
          />
        <FormItem 
          label="Location" 
          id="location-field" 
          type="text" 
          placeholder="Enter Location" 
          value={experienceItemInfo.place}
          onChange={newPlace => handPlaceChange(newPlace)}/>

        <div className="experience-description">
          <label htmlFor="experience-description-area">Description</label>
          <textarea 
            name="description" 
            id="experience-description-area" 
            cols={30} 
            rows={10} 
            value={experienceItemInfo.descr} 
            onChange={e => handleDescrChange(e.target.value)}></textarea>
        </div>
        <div className="form-btns-container">
          <button className="delete-form-btn"><div className="icon btn-trash-icon"></div>Delete</button>
          <button className="cancel-form-btn" onClick={cancelForm}>Cancel</button>
          <button className="save-form-btn" onClick={e => handleSaveForm(e)}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default ExperienceForm