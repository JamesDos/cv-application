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
  startDate: string,
  endDate: string,
  location: string,
  place: string,
  descrTitle: string,
  descr: string
}

type PersonInfo = {
  personalDetails: HeaderInfo,
  educationDetals: FormItemInfo[],
  experienceDetails: FormItemInfo[],
}

export type {HeaderInfo, FormItemInfo, ResumeItemInfo, PersonInfo}