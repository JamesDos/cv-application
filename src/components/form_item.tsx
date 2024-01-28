import { useState } from "react";
import { FormItemInfo } from "../data_types/types";


const FormItem = ({id, type, placeholder, label}: FormItemInfo) => {
  return (
    <div className="form-item">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder}/>
    </div>
  )
}

export default FormItem