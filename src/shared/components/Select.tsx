import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IMcSelect {
  name: string;
  label: string;
  options: any[];
  optionId?: string;
  optionKey?: string;
  optionText?: string;
}

const McSelect = ({
  name,
  label,
  options,
  optionId = "id",
  optionKey = "id",
  optionText = "value",
  ...props
}: IMcSelect) => {
  const { control, formState } = useFormContext();
  return (
    <FormControl {...props} fullWidth margin="dense">
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select label={label} fullWidth {...field}>
            {console.log(options)}
            {Array.isArray(options) &&
              options?.map((option) => (
                <MenuItem key={option[optionId]} value={option[optionKey]}>
                  {option[optionText]}
                </MenuItem>
              ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default McSelect;
