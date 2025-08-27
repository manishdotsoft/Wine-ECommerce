import type React from "react";
import { Select, MenuItem, Box } from "@mui/material";
import { StyledFormControl, StyledLabel } from "./CustomDropdown.style";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  fullWidth?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  fullWidth = true,
}) => {
  return (
    <Box>
      <StyledLabel>{label}</StyledLabel>
      <StyledFormControl fullWidth={fullWidth} variant="outlined">
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value as string)}
          displayEmpty
          renderValue={(selected) => {
            if (!selected && placeholder) {
              return <span style={{ color: "#999" }}>{placeholder}</span>;
            }
            const selectedOption = options.find((option) => option.value === selected);
            return selectedOption ? selectedOption.label : placeholder;
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </Box>
  );
};

export default CustomDropdown;
