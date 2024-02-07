// import { useState } from "react";
import { DropdownItemProp } from "../../data_types/types"

const DropdownItem = ({location, openForm}: DropdownItemProp) => {
  return (
    <div className="dropdown-item">
      <div onClick={openForm}>
        <h1>{location}</h1>
      </div>
      <div className="icon eye-icon"></div>
    </div>
  )
}

export default DropdownItem