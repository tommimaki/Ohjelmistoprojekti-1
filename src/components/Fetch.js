import React, { useEffect, useState } from "react";

export default function Questions() {

    const [question, setQuestion] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadQuestions() {

            const response = await fetch("https://queryapp-backend.herokuapp.com/groups/2/questions")
            const quest = await response.json();
            setQuestion(quest)
            setLoading(false);
        }
        loadQuestions();

    }, []);
    if (loading) return <h5>Questions loading...</h5>

    return (

        <div>
            {question}

        </div>
    )
}

