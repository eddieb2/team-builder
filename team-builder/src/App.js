import React, { useState } from 'react';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      name: 'Eddie',
      role: 'Full-Stack Developer'
    }
  ]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
