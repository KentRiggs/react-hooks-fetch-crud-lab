import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, updateQuestions, deleteQuestion}) {
  
  useEffect(() => {
    fetch("http://localhost:4000/questions/")
    .then(r => r.json())
    .then(dbQuestions => updateQuestions(dbQuestions));
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => <QuestionItem key={question.id} question={question} deleteQuestion={deleteQuestion} />)}
      </ul>
    </section>
  );
}

export default QuestionList;
