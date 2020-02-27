import React, { useState } from 'react';
import Team from './Components/Team';
import Form from './Components/Form';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      <Form setTeam={setTeam} team={team}/>
      <Team team={team}/>
    </div> 
  );
}

export default App;
