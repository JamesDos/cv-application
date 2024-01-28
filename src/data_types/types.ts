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

export type {HeaderInfo, FormItemInfo}