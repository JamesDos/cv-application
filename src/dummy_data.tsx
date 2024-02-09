import { PersonInfo } from "./data_types/types";
import {v4 as uuid} from "uuid";

const startingData: PersonInfo = {
  personalDetails: {
    name: "John Smith",
    email: "johnsmith@gmail.com",
    phoneNum: '123-456-789',
    city: "New York, NY"
  },
  educationDetails: [
    {
      id: uuid(),
      startDate: "1/1/2024",
      endDate: "1/1/2024",
      location: "Cornell University",
      place: "New York, US",
      descrTitle: "Computer Science",
      descr: "",
    },
    {
      id: uuid(),
      startDate: "1/1/2024",
      endDate: "1/1/2024",
      location: "Boston University",
      place: "Boston, US",
      descrTitle: "Math",
      descr: "",
    }
  ],
  experienceDetails: [
    {
      id: uuid(),
      startDate: "1/1/2024",
      endDate: "1/1/2024",
      location: "Umbrella Inc",
      place: "New York City, US",
      descrTitle: "UX & UI Designer",
      descr: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"
    },
    {
      id: uuid(),
      startDate: "1/1/2024",
      endDate: "1/1/2024",
      location: "Google",
      place: "Los Angeles, US",
      descrTitle: "Backend Developer",
      descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima eligendi hic natus, mollitia explicabo nulla culpa ullam similique illum rem placeat error quis, eius tempore dignissimos? Enim, placeat autem."
    },
  ],
}

export default startingData