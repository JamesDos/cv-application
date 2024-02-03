// import { useState } from "react";
import { DropdownContainerProp } from "../../data_types/types";
import DropdownItem from "./dropdown-item";

const DropdownItemContainer = ({dropdownItems}: DropdownContainerProp ) => {

  const renderDropdownItems = () => {
      return dropdownItems.map((item, id) => 
        <DropdownItem key={id} location={item.location}/>
    )
  }
  
  return (
    <div className="dropdown-items-container">
      <h1>Hello</h1>
      {renderDropdownItems()}
    </div>
  )
}

export default DropdownItemContainer