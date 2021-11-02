import React, { memo, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "./styles.scss";

interface Props {
  label: string;
  inputLabel: string;
  data: any[];
  name?: string;
  onSubmit?: any;
  defaultValue?: any;
}

// Costumize dropdown select from material UI
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 160,
    },
  })
);

const Filter = ({
  label,
  inputLabel,
  data,
  name,
  onSubmit,
  defaultValue,
}: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState<any>(defaultValue);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <div className="container-row">
      <p className="regular-text">{label}</p>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        size="small"
      >
        <InputLabel color="secondary">{inputLabel}</InputLabel>
        <Select
          name={name}
          color={"secondary"}
          value={value}
          onChange={handleChange}
          label={inputLabel}
          style={{ borderRadius: 20, height: 40 }}
          onSubmit={onSubmit}
          defaultValue=""
        >
          <MenuItem>
            <em>None</em>
          </MenuItem>
          {data.map((data, index) => {
            return <MenuItem value={data.code} key={index}>{data.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default memo(Filter);
