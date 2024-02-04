// import { useState } from "react";
import { DropdownItemProp } from "../../data_types/types"

const DropdownItem = ({location, onClick}: DropdownItemProp) => {
  return (
    <div className="dropdown-item">
      <h1 onClick={onClick}>{location}</h1>
      <div className="icon eye-icon"></div>
    </div>
  )
}

export default DropdownItem