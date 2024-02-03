// import { useState } from "react";

const DropdownItem = ({location}: {location: string}) => {
  return (
    <div className="dropdown-item">
      <h1>{location}</h1>
      <div className="icon eye-icon"></div>
    </div>
  )
}

export default DropdownItem