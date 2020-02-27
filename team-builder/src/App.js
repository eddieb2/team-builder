import React, { useState } from 'react';
import Team from './Components/Team';
import Form from './Components/Form';
import './App.css';

function App() {
  const [team, setTeam] = useState([
    {
      id: 0,
      name: 'Eddie',
      email: 'eddie@gmail.com',
      role: 'Full-Stack Developer'
    }
  ]);



  return (
    <div className="App">
      <Form setTeam={setTeam} team={team}/>
      <Team team={team}/>
    </div> 
  );
}

export default App;
