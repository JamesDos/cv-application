import { useState } from "react";
import FormItem from "../form_item";

const EducationForm = () => {
  return (
    <div className="education-form">
      <form>
        <FormItem label="School" id="school-field" type="text" placeholder="Enter School / University"/>
        <FormItem label="Degree" id="degree-field" type="text" placeholder="Enter Degree / Field of Study"/>
        <FormItem label="Start Date" id="state-date-field" type="date" placeholder=""/>
        <FormItem label="End Date" id="end-date-field" type="date" placeholder=""/>
        <FormItem label="Location" id="location-field" type="text" placeholder="Enter Location"/>
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