import React, { useEffect, useState } from 'react';
import { TextField, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Grid } from '@mui/material';



export default function Query() {


    //api call
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

    //questions array
    const questJsx = [];

    //looppaa arrayn, tekee kysymyksen ja vastausvaihtoehdot
    question.forEach(kys => {
        questJsx.push(

            <div key={kys.id}>
                <Grid container spacing={4} alignItems="center"
                    justifyContent="center" >
                      <Grid item>  
                    <FormControl component="fieldset">
                        <FormLabel component="legend"> {kys.description} </FormLabel>
                        <RadioGroup
                            aria-label="kysymys"
                            defaultValue=""
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="1" control={<Radio />} label={kys.answers[0]} />
                            <FormControlLabel value="2" control={<Radio />} label={kys.answers[1]} />
                            <FormControlLabel value="3" control={<Radio />} label={kys.answers[2]} />
                            <FormControlLabel value="4" control={<Radio />} label={kys.answers[3]} />

                        </RadioGroup>


                    </FormControl>
                    </Grid>
                </Grid>
            </div>
        );

    });



    return <div>
        
        {questJsx}
        <TextField id="outlined-basic" label="Name" variant="outlined" />


    </div>;
}