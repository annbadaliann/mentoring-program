import { useHistory } from "react-router-dom";

import { useState, useEffect, useCallback } from "react";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import columns from "./constants";
import MqTable from "../../shared/components/Table";
import { useDispatch } from "react-redux";
import { getMentors } from "../../store/slicers/mentors";

const Home = (): JSX.Element => {
  const history = useHistory();
  const [mentors, setMentors] = useState([]);

  const goBack = () => {
    history.push({
      pathname: "/register",
      state: { page: 3 },
    });
  };

  useEffect(() => {
    const rows = [
      {
        name: "anna",
        lastName: "badalian",
      },

      {
        name: "erna",
        lastName: "badalian",
      },
    ];

    setMentors(rows);
  }, []);

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <Button color="primary" variant="contained" onClick={goBack}>
          Manage your suggestions
        </Button>
      </Box>

      <MqTable rows={mentors} columns={columns} />
    </div>
  );
};

export default Home;
