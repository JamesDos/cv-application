import { useState } from "react";
import FormItem from "./form_item";
import { HeaderInfo } from "../data_types/types";

const PersonalDetails = () => {

  const [formInfo, setFormInfo] = useState({name: "John Smith", email: "johnsmith@gmail.com", phoneNum: "123-456-7890", city:"New York, Ny"})

  const handleNameChange = (newName: string) => {
    setFormInfo({...formInfo, name: newName});
  }

  const handleEmailChange = (newEmail: string) => {
    setFormInfo({...formInfo, email: newEmail});
  }

  const handlePhoneNumChange = (newPhoneNum: string) => {
    setFormInfo({...formInfo, phoneNum: newPhoneNum})
  }

  const handleCityChange = (newCity: string) => {
    setFormInfo({...formInfo, city: newCity})
  }

  return (
    <div className="personal-details-container">
      <h2>Personal Details</h2>
      <form>
        <FormItem label="Full Name" id="full-name-field" type="text" placeholder="First and Last Name" value={formInfo.name} onChange={handleNameChange}/>
        <FormItem label="Email" id="email-field" type="email" placeholder="Enter Email" value={formInfo.email} onChange={handleEmailChange}/>
        <FormItem label="Phone Number" id="phone-number-field" type="phone" placeholder="Enter Phone Number" value={formInfo.phoneNum} onChange={handlePhoneNumChange}/>
        <FormItem label="Address" id="address-field" type="text" placeholder="City, Country" value={formInfo.city} onChange={handleCityChange}/>
      </form>
    </div>
  )
}

export default PersonalDetails