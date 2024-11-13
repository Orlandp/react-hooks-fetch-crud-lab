import React from 'react';

function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, correct_answer } = question;

  function handleDelete() {
    // Perform the delete operation
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Call the onDeleteQuestion function passed from the parent to update the state
          onDeleteQuestion(id);
        }
      })
      .catch((error) => {
        console.error('Error deleting question:', error);
      });
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correct_answer}>
          <option value="0">choice 1</option>
          <option value="1">choice 2</option>
          <option value="2">choice 3</option>
          <option value="3">choice 4</option>
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
