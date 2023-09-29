import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import FilterSearch from "../components/FilterSearch";
import FilterCollege from "../components/FilterCollege";
import FilterToggle from "../components/FilterToggle";

function FilterMenu() {
  const collegeLabels = [
    "AAP",
    "ILR",
    "PAM",
    "CALS",
    "Dyson",
    "HumEc",
    "CAS",
    "Hotel",
  ];

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <FilterSearch
          heading={"Search Posts"}
          label={"Search"}
          options={[{ title: "Example Post (default sorted by most recent)" }]}
        />
        <FilterSearch
          heading={"Course"}
          label={"Course Number"}
          options={[
            { title: "CS 1110" },
            { title: "CS 2110" },
            { title: "CS 2800" },
            { title: "CS 3110" },
            { title: "CS 3410" },
            { title: "CS 4820" },
          ]}
        />

        <FilterCollege heading={"College"} labels={collegeLabels} />

        <FilterToggle heading={"Student Level"} />
      </CardContent>
    </Card>
  );
}

export default FilterMenu;
