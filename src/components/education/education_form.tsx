import { useState } from "react";
import { EducationFormProp } from "../../data_types/types";
import FormItem from "../form_item";

const EducationForm = ({education, cancelForm, setItem, delItem, addItem, isEditForm}: EducationFormProp) => {

  const [educationItemInfo, setEducationItemInfo] = useState({...education});

  const handleEducationItemInfoChange = (prop: string, newVal: string) => {
    setEducationItemInfo({...educationItemInfo, [prop]: newVal});
  }

  const handleSaveForm = (e: Event) => {
    e.preventDefault();
    if (isEditForm) {
      setItem(educationItemInfo, educationItemInfo.id);
    } else {
        addItem(educationItemInfo);
    }
    cancelForm();
  }

  const handleDeleteForm = (e: Event) => {
    e.preventDefault();
    if (isEditForm) {
      delItem(educationItemInfo.id);
    }
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
          onChange={ newSchool => handleEducationItemInfoChange("location", newSchool)}/>
        <FormItem 
          label="Degree" 
          id="degree-field"
          type="text" 
          placeholder="Enter Degree / Field of Study" 
          value={educationItemInfo.descrTitle}
          onChange={newDescrTitle => handleEducationItemInfoChange("descrTitle", newDescrTitle)}
          />
        <FormItem 
          label="Start Date" 
          id="state-date-field" 
          type="text" 
          placeholder="Enter Start Date" 
          value={educationItemInfo.startDate}
          onChange={newStartDate => handleEducationItemInfoChange("startDate", newStartDate)}
          />
        <FormItem 
          label="End Date" 
          id="end-date-field" 
          type="text" 
          placeholder="Enter End Date" 
          value={educationItemInfo.endDate}
          onChange={newEndDate => handleEducationItemInfoChange("endDate", newEndDate)}
          />
        <FormItem 
          label="Location" 
          id="location-field" 
          type="text" 
          placeholder="Enter Location" 
          value={educationItemInfo.place}
          onChange={newPlace => handleEducationItemInfoChange("place", newPlace)}/>
        <div className="form-btns-container">
          <button className="delete-form-btn" onClick={e => handleDeleteForm(e)}>Delete</button>
          <button className="cancel-form-btn" onClick={cancelForm}>Cancel</button>
          <button className="save-form-btn" onClick={e => handleSaveForm(e)}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default EducationForm