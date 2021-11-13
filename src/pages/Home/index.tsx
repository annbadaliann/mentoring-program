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
  ["job title"]: string;
  department: string;
  country: string;
  city: string;
}
const Home = (): JSX.Element => {
  const [mentors, setMentors] = useState<IMentor[]>([]);
  const history = useHistory();

  console.log(mentorsData, "mentors");

  const goBack = () => {
    history.push({
      pathname: "/register",
      state: { page: 3 },
    });
  };

  const getMentors = async () => {
    const result = (await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mentorsData);
      }, 2000);
    })) as IMentor[];

    setMentors(result);
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
