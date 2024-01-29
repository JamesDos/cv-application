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
  value: string | Date
}

type ResumeItemInfo = {
  startDate: string,
  endDate: string,
  location: string,
  place: string,
  descrTitle: string,
  descr: string
}

export type {HeaderInfo, FormItemInfo, ResumeItemInfo}