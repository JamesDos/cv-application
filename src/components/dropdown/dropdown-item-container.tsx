// import { useState } from "react";
import { DropdownContainerProp } from "../../data_types/types";
import DropdownItem from "./dropdown-item";
import { ResumeItemInfo } from "../../data_types/types";
import {v4 as uuid} from "uuid";

const DropdownItemContainer = ({dropdownItems, addItem, renderForm}: DropdownContainerProp ) => {

  const generateEmptyResumeItem: (() => ResumeItemInfo) = () => {
    return (
      {
        id: uuid(),
        startDate: "",
        endDate: "",
        location: "",
        place: "",
        descrTitle: "",
        descr: "",
      }
    )
  }

  const renderDropdownItems = () => {
      return dropdownItems.map((item, id) => 
        <DropdownItem openForm={() => renderForm(item, true)} key={id} location={item.location}/>
    )
  }

  return (
    <div className="dropdown-items-container">
      {renderDropdownItems()}
      <button onClick={() => renderForm(generateEmptyResumeItem(), false)}>Add item</button>
    </div>
  )
}

export default DropdownItemContainer