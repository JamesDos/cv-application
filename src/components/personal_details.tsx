import { useState } from "react";
import FormItem from "./form_item";
import { HeaderInfo, PersonInfo } from "../data_types/types";

const PersonalDetails = ({personalDetails, setHeader}: {personalDetails: HeaderInfo, setHeader: (propName: string, newName: string) => void}) => {

  const [formInfo, setFormInfo] = useState({...personalDetails})

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
        <FormItem label="Full Name" id="full-name-field" type="text" placeholder="First and Last Name" value={formInfo.name} 
        onChange={e => {
          setHeader("name", e);
          handleNameChange(e);
        }}/>
        <FormItem label="Email" id="email-field" type="email" placeholder="Enter Email" value={formInfo.email} 
        onChange={ e => {
          setHeader("email", e);
          handleEmailChange(e);
        }}/>
        <FormItem label="Phone Number" id="phone-number-field" type="phone" placeholder="Enter Phone Number" value={formInfo.phoneNum} 
        onChange={ e => {
          setHeader("phoneNum", e);
          handlePhoneNumChange(e);
        }}/>
        <FormItem label="Address" id="address-field" type="text" placeholder="City, Country" value={formInfo.city} 
        onChange={e => {
          setHeader("city", e);
          handleCityChange(e);
        }}/>
      </form>
    </div>
  )
}

export default PersonalDetails