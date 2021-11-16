import React, {useState, useEffect} from 'react';
import Query from './Query';

import Button from '@mui/material/Button';

export default function QueryPage(){
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        setQueries ( [{question: "kysymys", questionType: "radio", answers: [1, 2, 3]}] );
    }, []);


    const renderQueries = () => {
        queries.forEach(question => {
            <Query query={question}/>
        });
    }

    return (
        <div>
            {/* {renderQueries} */}
            <Query /> 
            <Button variant="contained">Send</Button>
        </div>
    );
}