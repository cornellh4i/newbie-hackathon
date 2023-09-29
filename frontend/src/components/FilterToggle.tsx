import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface Props {
  heading: string;
  // options: string[];
}

function ToggleButtons({ heading }: Props) {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <h3>{heading}</h3>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <p>Undergraduate</p>
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <p>Graduate</p>
        </ToggleButton>

        {/* <ToggleButton value="left" aria-label="left aligned">
          <p>{options[0]}</p>
        </ToggleButton>
        <ToggleButton value="left" aria-label="left aligned">
          <p>{options[1]}</p>
        </ToggleButton> */}

        {/* {options.map((option) => (
        <ToggleButton value="left" aria-label="left aligned">
          <p>{option}</p>
        </ToggleButton>
      ))} */}
      </ToggleButtonGroup>
    </>
  );
}

export default ToggleButtons;
