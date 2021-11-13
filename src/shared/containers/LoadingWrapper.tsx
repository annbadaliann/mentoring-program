import CircularProgress from "@mui/material/CircularProgress";

import { makeStyles } from "@mui/styles";
import { ReactElement } from "react";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    minHeight: "400px",
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

interface ILoadingWrapperProps {
  isLoading: boolean;
  children: ReactElement;
}

const LoadingWrapper = ({ isLoading, children }: ILoadingWrapperProps) => {
  const classes = useStyles();
  if (isLoading) {
    return (
      <div className={classes.root}>
        <CircularProgress color="primary" className={classes.loading} />
      </div>
    );
  }
  return children;
};

export default LoadingWrapper;
