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
  educationDetails: ResumeItemInfo[],
  experienceDetails: ResumeItemInfo[],
}

// Prop types

type SectionProp = {
  dropdownItems: ResumeItemInfo[],
  isActive: boolean[],
  handleDropdown: () => void,
  setItem: (newEducationItem: ResumeItemInfo, id: string) => void,
  delItem: (id: string) => void,
}

type ResumeEditorProp = {
  person: PersonInfo,
  setHeader: (propName: string, newName: string) => void,
  setEd: (newEducationItem: ResumeItemInfo, id: string) => void,
  setEx: (newExperienceItem: ResumeItemInfo, id: string) => void,
  delEd: (id: string) => void,
  delEx: (id: string) => void,
}

type DropdownContainerProp = {
  dropdownItems: ResumeItemInfo[],
  setItem: (newEducationItem: ResumeItemInfo, id: string) => void,
  delItem: (id: string) => void,
  renderForm: (experience: ResumeItemInfo) => void
}

type DropdownItemProp = {
  location: string,
  onClick: (experience: ResumeItemInfo) => void
}

type ExperienceFormProp = {
  experience: ResumeItemInfo,
}

type EducationFormProp = {
  education: ResumeItemInfo,
}



export type {
  HeaderInfo, 
  FormItemInfo, 
  ResumeItemInfo, 
  SectionProp, 
  PersonInfo, 
  ResumeEditorProp,
  DropdownContainerProp,
  DropdownItemProp,
  ExperienceFormProp,
  EducationFormProp,
}