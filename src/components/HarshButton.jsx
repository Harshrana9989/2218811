// src/components/HarshButton.jsx
import React from "react";
import { Button } from "@mui/material";

function HarshButton({ children, ...props }) {
  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
}

export default HarshButton;
