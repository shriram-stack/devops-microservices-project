// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:5000/api/message')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMessage(data.message);
        setTimestamp(data.timestamp);
      })
      .catch(error => {
        console.error("Could not fetch data:", error);
        setMessage('Failed to connect to the backend API.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>DevOps Microservices Project</h1>
        <p className="App-message">
          **Backend Message:** {message}
        </p>
        {timestamp && <p>Last fetched at: {timestamp}</p>}
        <p>
          The frontend successfully communicated with the backend!
        </p>
      </header>
    </div>
  );
}

export default App;