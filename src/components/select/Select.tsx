import React from 'react';
import MuiSelect from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';

type SelectProps = {
    label: string;
    value: string;
    options: { label: string; value: string }[];
    onChange: () => void;
  };
  

export const Select: React.FC<SelectProps>  = ({ label, value, options, onChange }) => {
    return (
    <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>{label}</InputLabel>
        <MuiSelect value={value} label={label} onChange={onChange}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    );
} 