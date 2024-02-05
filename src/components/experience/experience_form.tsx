
// import { useState } from "react";
import FormItem from "../form_item";
import { ExperienceFormProp } from "../../data_types/types";

const ExperienceForm = ({experience}: ExperienceFormProp) => {
  return (
    <div className="experience-form">
      <form>
        <FormItem label="Company Name" id="company-field" type="text" placeholder="Enter Company Name" value={experience.location}/>
        <FormItem label="Position Title" id="position-field" type="text" placeholder="Enter Position Title" value={experience.descrTitle}/>
        <FormItem label="Start Date" id="state-date-field" type="text" placeholder="" value={experience.startDate}/>
        <FormItem label="End Date" id="end-date-field" type="text" placeholder="" value={experience.endDate}/>
        <div className="experience-description">
          <label htmlFor="experience-description-area">Description</label>
          <textarea name="description" id="experience-description-area" cols={30} rows={10} value={experience.descr}></textarea>
        </div>
        <div className="form-btns-container">
          <button className="delete-form-btn"><div className="icon btn-trash-icon"></div>Delete</button>
          <button className="cancel-form-btn">Cancel</button>
          <button className="save-form-btn">Save</button>
        </div>
      </form>
    </div>
  )
}

export default ExperienceForm