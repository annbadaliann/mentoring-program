import React from "react";
import { TextFieldCustom } from "./Input";

const ThirdStep = () => {
  return (
    <div>
      <TextFieldCustom label="First name" name="a" />
      <TextFieldCustom label="Last name" name="b" />
      <TextFieldCustom label="email" name="c" />
    </div>
  );
};

export default ThirdStep;
