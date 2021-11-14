import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import McTable from "../../../shared/components/Table";
import EmptyListWrapper from "../../../shared/containers/EmptyListWrapper";
import { IMentor } from "../../../store/models/interfaces/employee";
import {
  getSuggestedMentors,
  selectSuggestedMentors,
} from "../../../store/slicers/mentors";
import columns from "../../Home/constants";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  department: string;
  country: string;
  city: string;
  gender: string;
  mentors: IMentor["id"][];
}

const ThirdStep = (): JSX.Element => {
  const suggesteMentors = useSelector(selectSuggestedMentors);

  const dispatch = useDispatch();

  const getEmployeesByUser = useCallback(
    async (user: User) => {
      const { department, country, city, job_title } = user;
      const searchParams = new URLSearchParams();
      searchParams.set("department", department);
      searchParams.set("country", country);
      searchParams.set("city", city);
      searchParams.set("job_title", job_title);

      dispatch(getSuggestedMentors(searchParams));
    },
    [dispatch]
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    const newUser = {
      ...user,
      mentors: [],
    };
    getEmployeesByUser(newUser);
  }, [getEmployeesByUser]);

  return (
    <div style={{ width: "100%" }}>
      <h2>Suggested Mentors list </h2>
      <p>You can filter them, by clicking checkbox</p>
      <EmptyListWrapper isEmpty={!suggesteMentors.length} description="No any matches">
        <McTable rows={suggesteMentors} columns={columns} />
      </EmptyListWrapper>
    </div>
  );
};

export default ThirdStep;
