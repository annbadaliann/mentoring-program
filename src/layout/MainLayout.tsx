import Container from "@mui/material/Container";
import Header from "./components/Header";
import useStyles from "./style";

const MainLayout = ({ children }: any): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.mainLayoutContainer}>
      <Header />
      <div className={classes.card}>
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default MainLayout;
