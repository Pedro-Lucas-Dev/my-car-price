import { Autocomplete as AutocompleteMaterial } from "@material-ui/lab";
import { Grid, TextField } from "@material-ui/core";
import React from "react";

const Autocomplete = ({
  id,
  value,
  options,
  label,
  onChange,
  disabled,
  getOptionLabel,
}) => {
  return (
    <Grid item xs>
      <AutocompleteMaterial
        id={id}
        value={value}
        options={options}
        getOptionLabel={getOptionLabel}
        style={{ margin: 10, padding: 10, width: 300 }}
        onChange={onChange}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
        disabled={disabled}
      />
    </Grid>
  );
};

export { Autocomplete };
