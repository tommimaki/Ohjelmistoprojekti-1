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

//STATELESS COMPONENT
export default function Query(props) {
  const handleAnswers = props.handleAnswers;

  if (props.query.type === "radio") {
    return (
      <div key={props.query.id}>
        <Grid
          sx={{
            margin: 2,
            paddingTop: 0,
            border: 0,
            borderRadius: 16,
            boxShadow: 2,
            backgroundColor: "white",
          }}
        >
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                {" "}
                {props.query.description}{" "}
              </FormLabel>
              <RadioGroup
                aria-label="kysymys"
                defaultValue=""
                name="radio-buttons-group"
              >
                {props.query.answers.map((answer, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    name={props.query.id + ""}
                    control={<Radio color="secondary" />}
                    label={answer}
                    onChange={handleAnswers}
                  />
                ))}
              </RadioGroup>
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
            margin: 2,
            paddingTop: 0,
            border: 0,
            borderRadius: 16,
            boxShadow: 2,
            backgroundColor: "white",
          }}
        >
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                {" "}
                {props.query.description}{" "}
              </FormLabel>
              <TextField
                fullWidth
                placeholder={"Answer for question id: " + props.query.id}
                name={props.query.id + ""}
                onChange={handleAnswers}
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  } else return <div>Question type not supported</div>;
}
