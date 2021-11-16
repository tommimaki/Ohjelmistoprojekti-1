import React from 'react';
import question from './Fetch';
import { TextField, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Grid} from '@mui/material';



export default function Query(props) {


    
    return <div>
        <Grid container spacing={4} alignItems="center"
            justifyContent="center" style={{ minHeight: '220px' ,border: "1px solid grey"}} >
            <Grid item>

                <FormControl component="fieldset">
                    <FormLabel component="legend">Question</FormLabel>
                    <RadioGroup
                        aria-label="kysymys"
                        defaultValue=""
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        
                    </RadioGroup>

                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    
                </FormControl>

            </Grid>
        </Grid>

       <h5> {question.type} </h5>
        
    </div>;
}