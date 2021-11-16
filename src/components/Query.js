import React, { useEffect, useState } from 'react';
import { TextField, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Grid } from '@mui/material';



export default function Query() {


    const [question, setQuestion] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadQuestions() {

            const response = await fetch("https://queryapp-backend.herokuapp.com/groups/2/questions");
            const quest = await response.json();

            setQuestion(quest)
            setLoading(false);
        }

        loadQuestions();

    }, []);
    if (loading) return <h5>Questions loading...</h5>


    return <div>

        <Grid container spacing={4} alignItems="center"
            justifyContent="center" style={{ minHeight: '220px', border: "1px solid grey" }} >
            <Grid item>


                <FormControl component="fieldset">
                    <FormLabel component="legend">{question.map(question => <div>{question.description}</div>)}
                    </FormLabel>
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
    </div>;
}