import { Controller, useFormContext } from "react-hook-form";

import FormControl  from "@mui/material/FormControl";
import InputLabel  from "@mui/material/InputLabel";
import Select  from "@mui/material/Select";
import MenuItem  from "@mui/material/MenuItem";
interface IMcSelect {
  name: string;
  label: string;
  options: any[];
  optionId?: string;
  optionKey?: string;
  optionText?: string;
  disabled?: boolean;
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
    <FormControl {...props} fullWidth margin="dense" error={formState?.errors?.[name]}>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        rules={{
          required: {
            value: true,
            message: 'Required'
          },
        }}
        control={control}
        render={({ field }) => (
          <Select label={label} fullWidth disabled={disabled} {...field}>
            {Array.isArray(options) &&
              options?.map((option) => (
                <MenuItem
                  key={option[optionId] || option}
                  value={option[optionKey] || option}
                >
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
