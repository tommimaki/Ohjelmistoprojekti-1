import React from 'react';
import { TextField, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Grid } from '@mui/material';
import { borderLeft } from '@mui/system';


//STATELESS COMPONENT
export default function Query(props) {

    if(props.query.type === "radio"){
       return (
        <div key={props.query.id}>
            <Grid  sx={{marginTop:9,paddingTop:0, border:1, borderRadius: 16, boxShadow: 4 }}>
                <Grid item>  
                <FormControl component="fieldset">
                    <FormLabel component="legend"> {props.query.description} </FormLabel>
                    <RadioGroup
                        aria-label="kysymys"
                        defaultValue=""
                        name="radio-buttons-group"
                    >
                        {
                        props.query.answers.map(
                            (answer, index) => 
                            <FormControlLabel value={index} control={<Radio />} label={answer} />
                        )
                        }
                    </RadioGroup>


                </FormControl>
                </Grid>
            </Grid>
        </div>
       ); 
    }

    else return <div>Question type not supported</div>;
    
}



