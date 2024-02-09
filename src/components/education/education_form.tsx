import { useState } from "react";
import { EducationFormProp } from "../../data_types/types";
import FormItem from "../form_item";

const EducationForm = ({education, cancelForm, setItem, delItem}: EducationFormProp) => {

  const [educationItemInfo, setEducationItemInfo] = useState({...education});

  const handleSchoolChange = (newSchool: string) => {
    setEducationItemInfo({...educationItemInfo, location: newSchool});
  }

  const handleDescrTitleChange = (newDescrTitle: string) => {
    setEducationItemInfo({...educationItemInfo, descrTitle: newDescrTitle});
  }

  const handleStartDateChange = (newStartDate: string) => {
    setEducationItemInfo({...educationItemInfo, startDate: newStartDate});
  }

  const handleEndDateChange = (newEndDate: string) => {
    setEducationItemInfo({...educationItemInfo, endDate: newEndDate});
  }

  const handPlaceChange = (newPlace: string) => {
    setEducationItemInfo({...educationItemInfo, place: newPlace});
  }

  const handleSaveForm = (e: Event) => {
    e.preventDefault();
    setItem(educationItemInfo, educationItemInfo.id);
    cancelForm();
  }


  return (
    <div className="education-form">
      <form>
        <FormItem 
          label="School" 
          id="school-field" 
          type="text" 
          placeholder="Enter School / University" 
          value={educationItemInfo.location} 
          onChange={ newSchool => {
            handleSchoolChange(newSchool)
          }}/>
        <FormItem 
          label="Degree" 
          id="degree-field"
          type="text" 
          placeholder="Enter Degree / Field of Study" 
          value={educationItemInfo.descrTitle}
          onChange={newDescrTitle => handleDescrTitleChange(newDescrTitle)}
          />
        <FormItem 
          label="Start Date" 
          id="state-date-field" 
          type="text" 
          placeholder="" 
          value={educationItemInfo.startDate}
          onChange={newStartDate => handleStartDateChange(newStartDate)}
          />
        <FormItem 
          label="End Date" 
          id="end-date-field" 
          type="text" 
          placeholder="" 
          value={educationItemInfo.endDate}
          onChange={newEndDate => handleEndDateChange(newEndDate)}
          />
        <FormItem 
          label="Location" 
          id="location-field" 
          type="text" 
          placeholder="Enter Location" 
          value={educationItemInfo.place}
          onChange={newPlace => handPlaceChange(newPlace)}/>
        <div className="form-btns-container">
          <button className="delete-form-btn">Delete</button>
          <button className="cancel-form-btn" onClick={cancelForm}>Cancel</button>
          <button className="save-form-btn" onClick={e => handleSaveForm(e)}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default EducationForm