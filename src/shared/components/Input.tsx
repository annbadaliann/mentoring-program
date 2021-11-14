import { useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
interface IInput {
  name: string;
  label: string;
}

const McInput = ({ name, label, ...props }: IInput) => {
  const { control, formState } = useFormContext();
  const { register } = control;

  return (
    <TextField
      fullWidth
      label={label}
      margin="dense"
      error={formState?.errors?.[name]}
      {...register(name, { required: true })}
      {...props}
    />
  );
};

export default McInput;
