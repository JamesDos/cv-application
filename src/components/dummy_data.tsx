import { PersonInfo } from "../data_types/types";
import {v4 as uuid} from "uuid";

const startingData: PersonInfo = {
  personalDetails: {
    name: "John Smith",
    email: "johnsmith@gmail.com",
    phoneNum: '123-456-789',
    city: "New York, NY"
  },
  educationDetals: [
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
      location: "Cornell University",
      place: "New York, US",
      descrTitle: "Computer Science",
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
      location: "Umbrella Inc",
      place: "New York City, US",
      descrTitle: "UX & UI Designer",
      descr: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"
    },
  ],
}

export default startingData