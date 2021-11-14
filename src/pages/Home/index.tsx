import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import columns from "./constants";
import McTable from "../../shared/components/Table";

import mentorsData from "../../mentors.json";
import LoadingWrapper from "../../shared/containers/LoadingWrapper";

interface IMentor {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  job_title: string;
  department: string;
  country: string;
  city: string;
  id: number,
}

const API_URL = "http://localhost:8000/";

const Home = (): JSX.Element => {
  const [mentors, setMentors] = useState<IMentor[]>([]);
  const history = useHistory();

  console.log(mentorsData, "mentors");

  const goBack = () => {
    history.push({
      pathname: "/register",
      state: { page: 2 },
    });
  };


  const getMentors = async () => {
    const reqOpts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = `${API_URL}employees`;

    const res = await fetch(url, reqOpts).then((res) => res.json())

    setMentors(res);
  };

  useEffect(() => {
    getMentors();
  }, []);


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
