import React from "react";
import { TextFieldCustom } from "./Input";

const SecondStep = () => {
  return (
    <div>
      <TextFieldCustom label="Department" name="department" />
      <TextFieldCustom label="Job title" name="jobTitle" />
      <TextFieldCustom label="Country" name="country" />
      <TextFieldCustom label="City" name="city" />
    </div>
  );
};

export default SecondStep;
