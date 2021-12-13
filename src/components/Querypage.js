import React, { useState, useEffect } from "react";
import Query from "./Query";

import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";

export default function QueryPage() {
  const [queries, setQueries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [final, setFinal] = useState(false);
  const [questionnaire, setQuestionnaire] = useState({ header: "", id: "" });

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
        setQuestionnaire({
          id: data[0].group.qgroupid,
          header: data[0].group.title,
        });
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSendAnswers = (e) => {
    setFinal({
      nickname: postVal.nickname,
      answers: JSON.stringify(postVal.answers) + "",
    });
  };

  useEffect(() => {
    sendToApi();
  }, [final]);

  const sendToApi = (e) => {
    if (!final) {
      return;
    }
    console.log(final);
    fetch("https://queryapp-backend.herokuapp.com/groups/2/answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(final),
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt: 10 }}>
            {questionnaire.header}
          </Typography>
          {queries.map((query, index) => (
            <Query key={index} query={query} handleAnswers={handleAnswers} />
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
