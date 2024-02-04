// import { useState } from "react";
import { DropdownContainerProp } from "../../data_types/types";
import DropdownItem from "./dropdown-item";
import { ResumeItemInfo } from "../../data_types/types";

const DropdownItemContainer = ({dropdownItems, setItem, delItem, renderForm}: DropdownContainerProp ) => {

  const handleOnClick = (item: ResumeItemInfo) => {
    renderForm(item);
  }

  const renderDropdownItems = () => {
      return dropdownItems.map((item, id) => 
        <DropdownItem onClick={() => handleOnClick(item)} key={id} location={item.location}/>
    )
  }

  return (
    <div className="dropdown-items-container">
      {renderDropdownItems()}
    </div>
  )
}

export default DropdownItemContainer