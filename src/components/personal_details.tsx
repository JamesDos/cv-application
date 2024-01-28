// import { useState } from "react";
import FormItem from "./form_item";

const PersonalDetails = () => {
  return (
    <div className="personal-details-container">
      <h2>Personal Details</h2>
      <form>
        <FormItem label="Full Name" id="full-name-field" type="text" placeholder="First and Last Name" value="John Smith"/>
        <FormItem label="Email" id="email-field" type="email" placeholder="Enter Email" value="johnsmith@gmail.com"/>
        <FormItem label="Phone Number" id="phone-number-field" type="phone" placeholder="Enter Phone Number" value="123-456-7890"/>
        <FormItem label="Address" id="address-field" type="text" placeholder="City, Country" value="New York, NY"/>
      </form>
    </div>
  )
}

export default PersonalDetails