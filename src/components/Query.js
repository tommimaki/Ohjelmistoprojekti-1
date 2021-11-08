import React from 'react';
import question from './Querypage';

import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';



export default function Query(props) {
    return <div>

        <FormControl component="fieldset">
            <FormLabel component="legend">question</FormLabel>
            <RadioGroup
                aria-label="kysymys"
                defaultValue=""
                name="radio-buttons-group"
            >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
            </RadioGroup>
        </FormControl>

    </div>;
}