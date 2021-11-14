export interface IMentor {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  job_title: string;
  department: string;
  country: string;
  city: string;
  id: number;
}

export interface ISuggesstedMentor {
  job_title: string;
  department: string;
  country: string;
  city: string;
}