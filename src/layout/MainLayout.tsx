import useStyles from "./style";
import Container from "@mui/material/Container";

const MainLayout = ({ children }: any): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.mainLayoutContainer}>
     
      <div className={classes.card}>
      <Container>
          <div className={classes.paper}>{children}</div>
        </Container>
      </div>
    </div>
  );
};

export default MainLayout;
