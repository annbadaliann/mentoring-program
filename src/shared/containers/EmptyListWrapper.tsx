import CircularProgress from "@mui/material/CircularProgress";

import { makeStyles } from "@mui/styles";
import { ReactElement } from "react";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    minHeight: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface ILoadingWrapperProps {
  isEmpty: boolean;
  children: ReactElement;
  description: string;
}

const EmptyListWrapper = ({ isEmpty, children, description}: ILoadingWrapperProps) => {
  const classes = useStyles();
  if (isEmpty) {
    return (
      <div className={classes.root}>
        <p>{description}</p>
      </div>
    );
  }
  return children;
};

export default EmptyListWrapper;
