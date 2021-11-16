import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "412px",
    width: "100%",
    margin: "0 auto",
  },
  paper: {
    marginTop: "40px",
  },
  form: {
    width: "100%",
  },
  mainWrapper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default useStyles;
