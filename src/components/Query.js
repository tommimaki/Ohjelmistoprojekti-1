import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Grid,
  TextField,
  Button
} from "@mui/material";
import { useState } from "react";


//STATELESS COMPONENT
export default function Query(props) {
  const [vastaukset, setVastaukset] = useState([]);
 

  const handleClick = () => {
    if(vastaukset.length > 0){
    props.addAnswers(vastaukset)
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    setVastaukset([' kysymys:' + props.query.id, ' vastaus:' + event.target.value])
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
                    onChange={handleInputChange}
                  />
                ))}
              </RadioGroup>
              <Button variant='contained' onClick={handleClick}> tallenna </Button>
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
              <TextField
                fullWidth
                placeholder={"Answer for question id: " + props.query.id}
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  } else return <div>Question type not supported</div>;
}
