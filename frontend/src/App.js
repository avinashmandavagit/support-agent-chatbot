import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    try {
      const response = await axios.post("http://localhost:5005/ask", { question });
      setAnswer(response.data.answer);
    } catch (error) {
      setAnswer("Error fetching documentation.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>CDP Support Chatbot</h2>
      <input
        type="text"
        className="form-control"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
      />
      <button className="btn btn-primary mt-2" onClick={handleAsk}>Ask</button>
      <div className="mt-3">
        <strong>Answer:</strong> <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;

