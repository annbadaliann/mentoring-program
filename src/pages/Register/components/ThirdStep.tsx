import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWatch } from "react-hook-form";

import Paper from "@mui/material/Paper";

import McTable from "../../../shared/components/Table";
import EmptyListWrapper from "../../../shared/containers/EmptyListWrapper";
import {
  getSuggestedMentors,
  selectSuggestedMentors,
} from "../../../store/slicers/mentors";
import columns from "../../Home/constants";
import useStyles from "../style";

interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  department: string;
  country: string;
  city: string;
  gender: string;
  job_title: string;
}

const ThirdStep = (): JSX.Element => {
  const suggesteMentors = useSelector(selectSuggestedMentors);

  const form = useWatch()
  const classes = useStyles();

  const dispatch = useDispatch();

  const getMentorsByUser = useCallback(
    async (user: IUser) => {
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
    getMentorsByUser(form);
  }, [form, getMentorsByUser]);

  return (
    <div style={{ width: "100%" }}>
      <h2>Suggested Mentors list </h2>
      <p>You can filter them, by clicking checkbox</p>
      <Paper className={classes.paper}>
        <EmptyListWrapper
          isEmpty={!suggesteMentors.length}
          description="No any matches"
        >
          <McTable rows={suggesteMentors} columns={columns} />
        </EmptyListWrapper>
      </Paper>
    </div>
  );
};

export default ThirdStep;
