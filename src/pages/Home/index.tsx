import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import McTable from "../../shared/components/Table";
import LoadingWrapper from "../../shared/containers/LoadingWrapper";
import { ESteps } from "../../shared/models/Interfaces/auth";
import {
  getMentors,
  selectMentors,
  selectSelectedMentors,
} from "../../store/slicers/mentors";

import columns from "./constants";
import { IMentor } from "../../store/models/interfaces/mentor";

const Home = (): JSX.Element => {
  const mentors = useSelector(selectMentors);
  const selectedMentors = useSelector(selectSelectedMentors);
  const [mentorsList, setMentorsList] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const goBack = () => {
    history.push({
      pathname: "/register",
      state: { page: ESteps.ThirdStep },
    });
  };

  useEffect(() => {
    const newMentors = mentors.map((mentor: IMentor) => {
      return {
        ...mentor,
        isSelected: selectedMentors.some(
          (item: IMentor) => item.id === mentor.id
        ),
      };
    });

    setMentorsList(newMentors);
  }, [mentors]);

  useEffect(() => {
    dispatch(getMentors());
  }, [dispatch]);

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <Button color="primary" variant="contained" onClick={goBack}>
          Manage your suggestions
        </Button>
      </Box>

      <LoadingWrapper isLoading={!mentors.length}>
        <McTable
          rows={mentorsList}
          columns={columns}
          disableCheckbox
          isSelectable
        />
      </LoadingWrapper>
    </div>
  );
};

export default Home;
