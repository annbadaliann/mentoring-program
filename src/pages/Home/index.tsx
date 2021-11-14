import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import McTable from "../../shared/components/Table";
import LoadingWrapper from "../../shared/containers/LoadingWrapper";
import {getMentors , selectMentors} from '../../store/slicers/mentors'

import columns from "./constants";

const Home = (): JSX.Element => {
  const mentors = useSelector(selectMentors);
  const history = useHistory();
  const dispatch = useDispatch();


  const goBack = () => {
    history.push({
      pathname: "/register",
      state: { page: 2 },
    });
  };

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
        <McTable rows={mentors} columns={columns} />
      </LoadingWrapper>
    </div>
  );
};

export default Home;
