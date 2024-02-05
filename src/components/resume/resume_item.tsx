import { ResumeItemInfo } from "../../data_types/types"

const ResumeItem = ({id, startDate, endDate, location, place, descrTitle, descr = ""}: ResumeItemInfo) => {
  return (
    <div className="resume-item" id={id}>
      <div className="resume-item-left">
        <p>{String(startDate)}-{String(endDate)}</p>
        <p>{location}</p>
      </div>
      <div className="resume-item-right">
        <p>{place}</p>
        <p>{descrTitle}</p>
      </div>
    <p className="experience-description">{descr}</p>
    </div>
  )
}

export default ResumeItem