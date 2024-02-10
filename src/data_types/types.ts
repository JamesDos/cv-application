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
  addItem: (newEducationItem: ResumeItemInfo) => void
}

type ResumeEditorHeaderProp = {
  clearResume: () => void,
  loadDefaultResume: () => void,
}

type ResumeEditorProp = {
  person: PersonInfo,
  setHeader: (propName: string, newName: string) => void,
  setEd: (newEducationItem: ResumeItemInfo, id: string) => void,
  setEx: (newExperienceItem: ResumeItemInfo, id: string) => void,
  delEd: (id: string) => void,
  delEx: (id: string) => void,
  addEd: (newEducationItem: ResumeItemInfo) => void,
  addEx: (newExperienceItem: ResumeItemInfo) => void,
  clearResume: () => void,
  loadDefaultResume: () => void,
}

type PersonalDetailsProp = {
  personalDetails: HeaderInfo,
  setHeader: (propName: string, newName: string) => void,
}

type DropdownContainerProp = {
  dropdownItems: ResumeItemInfo[],
  // setItem: (newEducationItem: ResumeItemInfo, id: string) => void,
  // delItem: (id: string) => void,
  renderForm: (experience: ResumeItemInfo, editExperience: boolean) => void
  addItem: (newEducationItem: ResumeItemInfo) => void,
}

type DropdownItemProp = {
  location: string,
  openForm: () => void,
}

type ExperienceFormProp = {
  experience: ResumeItemInfo,
  cancelForm: () => void,
  setItem: (newEducationItem: ResumeItemInfo, id: string) => void,
  delItem: (id: string) => void,
  addItem: (newEducationItem: ResumeItemInfo) => void,
  isEditForm: boolean,
}

type EducationFormProp = {
  education: ResumeItemInfo,
  cancelForm: () => void,
  setItem: (newEducationItem: ResumeItemInfo, id: string) => void,
  delItem: (id: string) => void,
  addItem: (newEducationItem: ResumeItemInfo) => void,
  isEditForm: boolean,
}



export type {
  HeaderInfo, 
  FormItemInfo, 
  ResumeItemInfo, 
  SectionProp, 
  PersonInfo, 
  ResumeEditorHeaderProp,
  ResumeEditorProp,
  PersonalDetailsProp,
  DropdownContainerProp,
  DropdownItemProp,
  ExperienceFormProp,
  EducationFormProp,
}