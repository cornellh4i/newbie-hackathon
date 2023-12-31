import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import "./FilterMenu.css";

const filter = createFilterOptions<OptionType>();

interface Props {
  heading: string;
  label: string;
  options: readonly OptionType[];
  filterOpt: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface OptionType {
  inputValue?: string;
  title: string;
}

function FilterSearch({ heading, label, options, filterOpt, setFilter }: Props) {
  const [value, setValue] = React.useState<OptionType | null>(null);


  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            title: newValue,
          });
          setFilter(prev => newValue)
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setFilter(prev => newValue.title)
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
          if (newValue != null) {
            setFilter(newValue.title)
          }
          
        }
        console.log(value?.inputValue!)
        console.log(value?.title!)
        
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
          <h3 className="search-header">{heading}</h3>
          <TextField
            {...params}
            label={label}
            sx={{
              "& .MuiInputBase-root-MuiOutlinedInput-root": {
                borderColor: "red",
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
