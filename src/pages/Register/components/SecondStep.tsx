import McInput from "../../../shared/components/Input";

const SecondStep = (): JSX.Element => {
  return (
    <div>
      <McInput label="Department" name="department" />
      <McInput label="Job title" name="jobTitle" />
      <McInput label="Country" name="country" />
      <McInput label="City" name="city" />
    </div>
  );
};

export default SecondStep;
