import React from "react";
import { TextFieldCustom } from "./Input";

const ThirdStep = () => {
  return (
    <div style={{width: '100%'}}>
      <p>third step, find your mentor</p>
      <TextFieldCustom label="Choose your mentor" name="a" />
    </div>
  );
};

export default ThirdStep;
