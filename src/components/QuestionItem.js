import React from "react";

function QuestionItem({ question, deleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleClick(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
    .then(() => deleteQuestion(id));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => handleClick(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
