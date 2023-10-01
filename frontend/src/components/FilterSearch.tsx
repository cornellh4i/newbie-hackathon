import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import "./FilterMenu.css";

const filter = createFilterOptions<OptionType>();

interface Props {
  heading: string;
  label: string;
  options: readonly OptionType[];
}

interface OptionType {
  inputValue?: string;
  title: string;
}

function FilterSearch({ heading, label, options }: Props) {
  const [value, setValue] = React.useState<OptionType | null>(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.title
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <div className="search-container">
          <h3 className="section-header">{heading}</h3>
          <TextField
            {...params}
            label={label}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#EFEFEF",
                margin: "0 0 16px 0",
                padding: "12px 24px 12px 24px",
              },
              "& .MuiAutocomplete-root": {
                width: "313px",
              },
              "& .MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input":
                {
                  padding: "0px 0px 0px 0px",
                },
            }}
          >
            TODO: insert search symbol
          </TextField>
        </div>
      )}
    />
  );
}

export default FilterSearch;
