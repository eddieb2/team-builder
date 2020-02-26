import React, { useState } from 'react';
import TeamMember from './Components/TeamMember';
import './App.css';

function App() {
  const [team, setTeam] = useState([
    {
      id: 0,
      name: 'Eddie',
      role: 'Full-Stack Developer'
    },
    {
      id: 1,
      name: 'Joe',
      role: 'Front-End Developer'
    }
  ]);

  return (
    <div className="App">
      <TeamMember team={team}/>
    </div> 
  );
}

export default App;
