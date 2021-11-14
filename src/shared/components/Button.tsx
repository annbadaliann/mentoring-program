import { BaseSyntheticEvent, ReactNode, useMemo } from "react";
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
  clickHandler: (e?: BaseSyntheticEvent) => void | Promise<void> | undefined;
  variant: string;
  disabled: boolean;
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
      className={`${classes.root} ${className}`}
      color="primary"
      onClick={clickHandler}
      disabled={disabled}
      {...rest}
      variant={variant}
      style={computedStyles}
    >
      {children}
    </Button>
  );
};

export default McButton;
