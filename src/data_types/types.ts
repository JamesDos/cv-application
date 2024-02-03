type HeaderInfo = {
  name: string,
  email: string,
  phoneNum: string,
  city: string,
}

type FormItemInfo = {
  id: string,
  type: string,
  placeholder: string,
  label: string
  value: string
  onChange: (name: string) => void;
}

type ResumeItemInfo = {
  id: string,
  startDate: string,
  endDate: string,
  location: string,
  place: string,
  descrTitle: string,
  descr: string
}

type PersonInfo = {
  personalDetails: HeaderInfo,
  educationDetals: ResumeItemInfo[],
  experienceDetails: ResumeItemInfo[],
}

// Prop types

type SectionProp = {
  dropdownItems: ResumeItemInfo[],
  isActive: boolean[],
  handleDropdown: () => void,
}

type ResumeEditorProp = {
  person: PersonInfo,
  setHeader: (propName: string, newName: string) => void,
}

type DropdownContainerProp = {
  dropdownItems: ResumeItemInfo[],
}

export type {
  HeaderInfo, 
  FormItemInfo, 
  ResumeItemInfo, 
  SectionProp, 
  PersonInfo, 
  ResumeEditorProp,
  DropdownContainerProp,
}