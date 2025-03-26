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
    </div>
  );
}

export default App;
