import React, { useState, useEffect } from "react";
import Query from "./Query";

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function QueryPage() {
  const [queries, setQueries] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [postVal, setpostVal] = useState({
    nickname: "testname",
    answers: {},
  });

  const setNickname = (e) => {
    setpostVal({ ...postVal, nickname: e.target.value });
  };

  const handleAnswers = (e) => {
    setpostVal({
      answers: { ...postVal.answers, [e.target.name]: e.target.value },
    });
  };

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
        <form id="collection">
          {queries.map((query, index) => (
            <Query query={query} handleAnswers={handleAnswers} />
          ))}

          <TextField
            id="name"
            name="nickname"
            label="Name"
            variant="outlined"
            sx={{ marginTop: 2, padding: 2 }}
            onChange={setNickname}
          />
          <Button
            onClick={handleSendAnswers}
            variant="contained"
            sx={{ marginTop: 4, padding: 2 }}
          >
            Send
          </Button>
        </form>
      </div>
    );
  }
}
