// import { useState } from "react";

const DropdownItem = ({school}: {school: string}) => {
  return (
    <div className="dropdown-item">
      <h1>{school}</h1>
      <div className="icon eye-icon"></div>
    </div>
  )
}

export default DropdownItem