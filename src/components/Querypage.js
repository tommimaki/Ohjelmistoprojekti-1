import React, { useState, useEffect } from "react";
import Query from "./Query";

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function QueryPage() {
    const [queries, setQueries] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [answersQ, setAnswers] = useState({});
    const [nimi, setNimi] = useState('')
    let ans = '';
    let ar = [];

    const [postVal, setpostVal] = useState({
        nickname: "testname",
        answers: "ansans",
      });

    //   const setNickname = (e) => {
    //     setpostVal({ ...postVal, [e.target.name]: e.target.value });
    //   };

      const setNickname = (e) => {
        setNimi(e.target.value );
      };
    

      // Lisää vastauksen arrayhyn
    const addAnswers = (answer) => {
            ar.push(answer)
            console.log(ar);
    }


  
    const setandpost = () => {
        ans = ar.toString() 

     setpostVal({
            nickname: nimi, 
            answers: ans
        });

        handleSendAnswers();
    }


    useEffect(() => {
        //setQueries ( [{question: "kysymys", questionType: "radio", answers: [1, 2, 3]}] );
        fetch("https://queryapp-backend.herokuapp.com/groups/2/questions")
            .then((response) => response.json())
            .then((data) => {
                setQueries(data);
                setLoaded(true);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleSendAnswers = (e) => {
        //console.log(JSON.stringify(e.target.value));
        console.log(postVal)

        fetch("https://queryapp-backend.herokuapp.com/groups/2/answers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postVal),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("success", response);
                } else {
                    alert("error adding answers");
                }
            })
            .catch((err) => console.error(err));
    };


    if (!loaded) {
        return <div>Loading questions.</div>;
    } else {
        return (
            <div>
                <form id="collection" onSubmit={handleSendAnswers}>
                    
                    {queries.map((query, index) => (
                        <Query query={query} addAnswers={addAnswers} />
                    ))}

                    <TextField
                        id="name"
                        name="nickname"
                        label="Name"
                        variant="outlined"
                        sx={{ marginTop: 2, padding: 2 }}
                        onChange={setNickname}
                    />
                    <Button onClick={setandpost} variant="contained" sx={{ marginTop: 4, padding: 2 }}>
                        Send
                    </Button>
                </form>
            </div>
        );
    }
}