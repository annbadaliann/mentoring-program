import { ReactNode, useMemo } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "13px 20px",
    borderRadius: "10px",
    height: "54px",
    cursor: "pointer",
    width: "100%",
  },
}));

interface IMcButton {
  children: ReactNode;
  width?: string;
  className?: any;
  disabled: boolean;
  clickHandler: () => void;
  variant: string;
}

const McButton = ({
  children,
  width = "257px",
  className,
  disabled,
  clickHandler,
  variant = "contained",
  ...rest
}: IMcButton) => {
  const classes = useStyles();

  const computedStyles = useMemo(() => {
    return {
      width,
    };
  }, [width]);

  return (
    <Button
      variant={variant}
      className={`${classes.root} ${className}`}
      color="primary"
      onClick={clickHandler}
      {...rest}
      style={computedStyles}
    >
      {children}
    </Button>
  );
};

export default McButton;
