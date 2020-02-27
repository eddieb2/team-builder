import React from 'react';

const Team = (props) => {
  console.log('team',props.team)

  return(

    <div className='team-list'>
      
          {props.team.map(item => {
          return(
            <div className='team-member' key={item.id}>
              <h1>{item.name}</h1>
              <h2>{item.email}</h2>
              <h2>{item.role}</h2>
            </div>
          );
        })}

    </div>

  );
};

export default Team;