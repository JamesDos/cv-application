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
      place: "Ithaca NY, US",
      descrTitle: "Computer Science",
      descr: "",
    },
    {
      id: uuid(),
      startDate: "1/1/2024",
      endDate: "1/1/2024",
      location: "Boston University",
      place: "Boston MA, US",
      descrTitle: "Math",
      descr: "",
    }
  ],
  experienceDetails: [
    {
      id: uuid(),
      startDate: "1/1/2024",
      endDate: "1/1/2024",
      location: "Meta",
      place: "New York City, US",
      descrTitle: "Frontend Developer",
      descr: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, iure voluptas ex perspiciatis necessitatibus quam blanditiis inventore alias facere esse veniam molestias est, similique ut cupiditate laboriosam praesentium quae id."
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

const blankResume: PersonInfo = {
  personalDetails: {
    name: "",
    email: "",
    phoneNum: "",
    city: "",
  },
  educationDetails: [],
  experienceDetails: [],
}

export {startingData, blankResume}