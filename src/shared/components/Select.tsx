import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IMcSelect {
  name: string;
  label: string;
  options: any[];
  optionId?: string;
  optionKey?: string;
  optionText?: string;
  disabled?: boolean
}

const McSelect = ({
  name,
  label,
  options,
  disabled,
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
          <Select label={label} fullWidth disabled={disabled} {...field}>
            {Array.isArray(options) &&
              options?.map((option) => (
                <MenuItem key={option[optionId] || option} value={option[optionKey] || option}>
                  {option[optionText] || option}
                </MenuItem>
              ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default McSelect;
