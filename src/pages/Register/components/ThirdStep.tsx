import McInput from "../../../shared/components/Input";

const ThirdStep = (): JSX.Element => {
  return (
    <div style={{width: '100%'}}>
      <p>third step, find your mentor</p>
      <McInput label="Choose your mentor" name="a" />
    </div>
  );
};

export default ThirdStep;
