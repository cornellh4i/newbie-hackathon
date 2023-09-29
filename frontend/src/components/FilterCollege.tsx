import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface Props {
  heading: string;
  labels: string[];
}

export default function CheckboxLabels({ labels, heading }: Props) {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
    gap: "16px", // Adjust the gap as needed
  };

  return (
    <>
      <h3>{heading}</h3>
      <FormGroup style={containerStyle}>
        {labels.map((label) => (
          <FormControlLabel key={label} control={<Checkbox />} label={label} />
        ))}
      </FormGroup>
    </>
  );
}
