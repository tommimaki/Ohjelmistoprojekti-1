import React, { useState, useEffect } from 'react';
import Query from './Query';

import Button from '@mui/material/Button';

export default function QueryPage() {
    const [queries, setQueries] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        //setQueries ( [{question: "kysymys", questionType: "radio", answers: [1, 2, 3]}] );
        fetch('https://queryapp-backend.herokuapp.com/groups/2/questions')
            .then(response => response.json())
            .then(data => {
                setQueries(data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const handleSendAnswers = () => {
        //TODO kerää vastaukset json taulukkoon ja POSTaa backendiin


        const data = { nickname: 'testi', answers: query.answers };

        fetch('https://queryapp-backend.herokuapp.com/groups/ID/answers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    if (!loaded) {
        return (
            <div>Loading questions.</div>
        );
    } else {
        return (
            <div>
                {queries.map((query, index) => <Query query={query} />)}
                <Button variant="contained" onClick={handleSendAnswers}>Send</Button>
            </div>
        );
    }

}