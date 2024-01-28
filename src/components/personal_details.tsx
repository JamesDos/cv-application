import { useState } from "react";
import FormItem from "./form_item";

const PersonalDetails = () => {
  return (
    <div className="personal-details-container">
      <h2>Personal Details</h2>
      <form>
        <FormItem label="Full Name" id="full-name-field" type="text" placeholder="First and Last Name"/>
        <FormItem label="Email" id="email-field" type="email" placeholder="Enter Email"/>
        <FormItem label="Phone Number" id="phone-number-field" type="phone" placeholder="Enter Phone Number"/>
        <FormItem label="Address" id="address-field" type="text" placeholder="City, Country"/>
      </form>
    </div>
  )
}

export default PersonalDetails