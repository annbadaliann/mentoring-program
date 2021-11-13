import McInput from "../../../shared/components/Input";
import McSelect from "../../../shared/components/Select";

const SecondStep = (): JSX.Element => {
  const options = [
    {
      id: 1,
      value: "aa",
    },
  ];
  return (
    <div>
      <McSelect options={options} label="Department" name="department" />
      <McSelect options={options} label="Job title" name="jobTitle" />
      <McSelect options={options} label="Country" name="country" />
      <McSelect options={options} label="City" name="city" />
    </div>
  );
};

export default SecondStep;
