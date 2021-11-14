import { useEffect, useState } from "react";
import McInput from "../../../shared/components/Input";
import McTable from "../../../shared/components/Table";
import columns from "../../Home/constants";

const API_URL = "http://localhost:8000/";
interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  department: string;
  country: string;
  city: string;
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
  department: string;
  country: string;
  city: string;
  gender: string;
  mentors: Employee["id"][];
}

const ThirdStep = (): JSX.Element => {
  const [mentors, setMentors] = useState([]);

  const getEmployeesByUser = async (user: User) => {
    console.log(user, 'user')
    const searchParams = new URLSearchParams();
    searchParams.set("department", user.department);
    searchParams.set("country", user.country);
    searchParams.set("city", user.city);
    searchParams.set("job_title", user.job_title);

    const url = `${API_URL}employees?${searchParams}`;

    const res = await fetch(url).then((res) => res.json());
    setMentors(res);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    const newUser = {
      ...user,
      mentors: [],
    };
    getEmployeesByUser(newUser);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <h2>Mentors list </h2>
      <p>You can filter them, by clicking checkbox </p>
      <McTable rows={mentors} columns={columns} />
    </div>
  );
};

export default ThirdStep;
