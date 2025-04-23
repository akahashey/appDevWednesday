<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    // Simulated translation mapping
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      example: 'halimbawa'
      // Add more translations as needed
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="container">
      <h1>English to Tagalog Translator</h1>
      <div className="input-group">
        <label>English Word:</label>
        <input type="text" value={englishWord} onChange={(e) => setEnglishWord(e.target.value)} />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div>
          <h2>Tagalog Translation:</h2>
          <p>{tagalogTranslation}</p>
        </div>
      )}
=======
import React, { useState } from "react";
import "./App.css"; // Siguraduhin na naka-import ang CSS

function App() {
  const [students, setStudents] = useState([]);

  return (
    <div className="container">
      <h1>Student Recording System</h1>
      <input type="text" placeholder="Student Name" />
      <input type="text" placeholder="Course" />
      <button>Add Student</button>

      <h2>Student List</h2>
      <h1>MARWIN - M</h1>
      <h1>MARWIN - MANGUNAY</h1>
      <h1>MARWIN MANGUNAY - BSIT</h1>
      
      {students.length === 0 ? <p>No students added yet.</p> : <ul>{students.map((s, i) => <li key={i}>{s}</li>)}</ul>}
>>>>>>> a63dc147f2fb2d036a39caab21c22dc79ee24ab0
    </div>
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> a63dc147f2fb2d036a39caab21c22dc79ee24ab0
