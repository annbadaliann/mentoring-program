import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundColor: theme.palette.common.white,
    height: "60px",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "200px",
  },
}));

const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container>
        <Link to="/">
          <img src={Logo} alt="logo" className={classes.logo} />
        </Link>
      </Container>
    </header>
  );
};

export default Header;
