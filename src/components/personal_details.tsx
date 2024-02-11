import { useState } from "react";
import FormItem from "./form_item";
import { PersonalDetailsProp } from "../data_types/types";

const PersonalDetails = ({personalDetails, setHeader}: PersonalDetailsProp) => {

  // const [formInfo, setFormInfo] = useState(personalDetails);

  // const handleFormInfoChange = (prop: string, newVal: string) => {
  //   setFormInfo({...formInfo, [prop]: newVal});
  // }

  return (
    <div className="personal-details-container">
      <h2>Personal Details</h2>
      <form>
        <FormItem 
          label="Full Name" 
          id="full-name-field" 
          type="text" 
          placeholder="First and Last Name" 
          value={personalDetails.name} 
          onChange={e => {
            setHeader("name", e);
            // handleFormInfoChange("name", e);
          }}/>
        <FormItem 
          label="Email" 
          id="email-field" 
          type="email" 
          placeholder="Enter Email" 
          value={personalDetails.email} 
          onChange={ e => {
            setHeader("email", e);
            // handleFormInfoChange("email", e);
          }}/>
        <FormItem 
          label="Phone Number" 
          id="phone-number-field" 
          type="phone" 
          placeholder="Enter Phone Number" 
          value={personalDetails.phoneNum} 
          onChange={ e => {
            setHeader("phoneNum", e);
            // handleFormInfoChange("phoneNum", e);
          }}/>
        <FormItem 
          label="Address" 
          id="address-field" 
          type="text" 
          placeholder="City, Country" 
          value={personalDetails.city} 
          onChange={e => {
            setHeader("city", e);
            // handleFormInfoChange("city", e);
          }}/>
      </form>
    </div>
  )
}

export default PersonalDetails