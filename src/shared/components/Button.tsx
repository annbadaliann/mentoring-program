import { ReactNode, useMemo } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "13px 20px",
    borderRadius: "10px",
    color: "#fff",
    height: "54px",
    cursor: "pointer",
    width: "100%",
    minWidth: "257px",
  },
  contained: {
    backgroundColor: "#EE2D48",
    border: "unset",

    "&:hover": {
      backgroundColor: "#FF5970",
    },

    "&:focus": {
      backgroundColor: "#BF243A",
    },

    "&[disabled]": {
      backgroundColor: "rgb(238 45 72 / 50%)",
    },
  },
  outlined: {
    backgroundColor: "#fff",
    border: "1px solid #EE2D48",
    color: "#EE2D48",

    "&:hover": {
      backgroundColor: "#FF5970",
      color: "#fff",
    },

    "&:focus": {
      backgroundColor: "#BF243A",
      color: "#fff",
    },

    "&[disabled]": {
      borderColor: "rgb(238 45 72 / 50%)",
      color: "rgb(238 45 72 / 50%)",
    },
  },
}));

interface IMcButton {
  children: ReactNode,
  type: string,
  width: string,
  className: any
}

const McButton = ({
  children,
  type = "contained",
  width = "257px",
  className,
  ...rest
}: IMcButton) => {
  const classes = useStyles();

  const computedStyles = useMemo(() => {
    return {
      maxWidth: width,
    };
  }, [width]);

  return (
    <button
      className={`${classes.root} ${className} ${
        type === "contained" ? classes.contained : classes.outlined
      }`}
      {...rest}
      style={computedStyles}
    >
      {children}
    </button>
  );
};

export default McButton;
