import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  mainLayoutContainer: {
    backgroundColor: "#f8f8f8",
    display:'block',
    minHeight: "100vh"
  },
  card: {
    paddingBottom: "200px",
    marginTop: "50px",
  },
  paper: {
    padding: "90px 60px",
    boxShadow: "0px 0px 80px rgba(0, 0, 0, 0.1) !important",
    borderRadius: "10px",
    minHeight: "auto",
    height: "100%",
  },
}));

export default useStyles;
