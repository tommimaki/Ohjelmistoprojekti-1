import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";

//STATELESS COMPONENT
export default function Query(props) {
  const [vastaukset, setVastaukset] = useState({});

  const handleInputChange = (event) => {
    event.persist();
    setVastaukset((vastaukset) => ({
      ...vastaukset,
      [props.query.id]: event.target.value,
    }));
    console.log(vastaukset);
  };

  if (props.query.type === "radio") {
    return (
      <div key={props.query.id}>
        <Grid
          sx={{
            marginTop: 9,
            paddingTop: 0,
            border: 1,
            borderRadius: 16,
            boxShadow: 4,
          }}
        >
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                {" "}
                {props.query.description}{" "}
              </FormLabel>
              <form>
                <RadioGroup
                  aria-label="kysymys"
                  defaultValue=""
                  name="radio-buttons-group"
                >
                  {props.query.answers.map((answer, index) => (
                    <FormControlLabel
                      value={index}
                      control={<Radio />}
                      label={answer}
                      onClick={handleInputChange}
                    />
                  ))}
                </RadioGroup>
              </form>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  } else if (props.query.type === "text") {
    return (
      <div key={props.query.id}>
        <Grid
          sx={{
            marginTop: 9,
            paddingTop: 0,
            border: 1,
            borderRadius: 16,
            boxShadow: 4,
          }}
        >
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                {" "}
                {props.query.description}{" "}
              </FormLabel>
              <form>
                <TextField
                  fullWidth
                  placeholder={"Answer for question id: " + props.query.id}
                />
              </form>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  } else return <div>Question type not supported</div>;
}
