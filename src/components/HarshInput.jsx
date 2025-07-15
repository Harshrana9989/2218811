// src/components/HarshInput.jsx
import React from "react";
import { TextField } from "@mui/material";

function HarshInput({ label, value, onChange, ...props }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
      {...props}
    />
  );
}

export default HarshInput;
