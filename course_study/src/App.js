import './App.css';
import React, { useState } from 'react';
import FormValidation from './components/FormValidation';
import FilterList from './components/FilterList';

function App() {

  // Store student records in parent component
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Arjun" },
    { id: 4, name: "Sneha" },
    { id: 5, name: "Riya" }
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <header className="App-header"></header>

      {/* Pass addStudent function to child */}
      <FormValidation addStudent={addStudent} />

      <hr />

      {/* Pass student list to child */}
      <FilterList students={students} />
    </div>
  );
}

export default App