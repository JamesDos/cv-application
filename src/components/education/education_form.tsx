// import { useState } from "react";
import { EducationFormProp } from "../../data_types/types";
import FormItem from "../form_item";

const EducationForm = ({education}: EducationFormProp) => {
  return (
    <div className="education-form">
      <form>
        <FormItem label="School" id="school-field" type="text" placeholder="Enter School / University" value={education.location}/>
        <FormItem label="Degree" id="degree-field" type="text" placeholder="Enter Degree / Field of Study" value={education.descrTitle}/>
        <FormItem label="Start Date" id="state-date-field" type="text" placeholder="" value={education.startDate}/>
        <FormItem label="End Date" id="end-date-field" type="text" placeholder="" value={education.endDate}/>
        <FormItem label="Location" id="location-field" type="text" placeholder="Enter Location" value={education.place}/>
        <div className="form-btns-container">
          <button className="delete-form-btn">Delete</button>
          <button className="cancel-form-btn">Cancel</button>
          <button className="save-form-btn">Save</button>
        </div>
      </form>
    </div>
  )
}

export default EducationForm