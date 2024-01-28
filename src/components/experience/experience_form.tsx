
import { useState } from "react";
import FormItem from "../form_item";

const ExperienceForm = () => {
  return (
    <div className="experience-form">
      <form>
        <FormItem label="Company Name" id="company-field" type="text" placeholder="Enter Company Name"/>
        <FormItem label="Position Title" id="position-field" type="text" placeholder="Enter Position Title"/>
        <FormItem label="Start Date" id="state-date-field" type="date" placeholder=""/>
        <FormItem label="End Date" id="end-date-field" type="date" placeholder=""/>
        <div className="experience-description">
          <label htmlFor="experience-description-area">Description</label>
          <textarea name="description" id="experience-description-area" cols={30} rows={10}></textarea>
        </div>
        <div className="form-btns-container">
          <button className="delete-form-btn">Delete</button>
          <button className="cancel-form-btn">Cancel</button>
          <button className="save-form-btn">Save</button>
        </div>
      </form>
    </div>
  )
}

export default ExperienceForm