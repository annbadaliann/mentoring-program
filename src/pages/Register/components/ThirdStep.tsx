import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWatch } from "react-hook-form";

import Paper from "@mui/material/Paper";

import McTable from "../../../shared/components/Table";
import EmptyListWrapper from "../../../shared/containers/EmptyListWrapper";
import {
  getSuggestedMentors,
  selectSelectedMentors,
  selectSuggestedMentors,
} from "../../../store/slicers/mentors";
import { IMentor } from "../../../store/models/interfaces/mentor";

import columns from "../../Home/constants";
import useStyles from "../style";
import { selectUser } from "../../../store/slicers/auth";
import { useLocation } from "react-router";
import { ILocation } from "../model";

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
  const suggestedMentors = useSelector(selectSuggestedMentors);
  const selectedMentors = useSelector(selectSelectedMentors);
  const user = useSelector(selectUser);

  const [mentors, setMentors] = useState([]);

  const form = useWatch();

  const location: ILocation = useLocation();

  useEffect(() => {
    const newRows = suggestedMentors.map((mentor: IMentor) => ({
      ...mentor,
      isSelected: location?.state?.page
        ? selectedMentors.some((item: IMentor) => item.id === mentor.id)
        : true,
    }));

    setMentors(newRows);
  }, [location?.state?.page, suggestedMentors]);

  const classes = useStyles();

  console.log(selectedMentors, "selected mentors");

  const dispatch = useDispatch();

  const getMentorsByUser = useCallback(
    async (user: IUser) => {
      const { department, country, city, job_title } = user;
      
      const searchParams = new URLSearchParams({
        department,
        job_title,
        country,
        city,
      }).toString();

      dispatch(getSuggestedMentors(searchParams));
    },
    [dispatch]
  );

  useEffect(() => {
    getMentorsByUser(user || form);
  }, [user, getMentorsByUser, form]);

  return (
    <div style={{ width: "100%" }}>
      <h2>Suggested Mentors list </h2>
      <p>
        You can filter them, by clicking checkbox, and choose that mentors, you
        want
      </p>
      <Paper className={classes.paper}>
        <EmptyListWrapper
          isEmpty={!suggestedMentors.length}
          description="No any matches"
        >
          <McTable rows={mentors} columns={columns} isSelectable />
        </EmptyListWrapper>
      </Paper>
    </div>
  );
};

export default ThirdStep;
