import { IMentor } from "./mentor";

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  department: string;
  country: string;
  city: string;
  gender: string;
  job_title: string;
  suggestedMentors?: IMentor[];
}
