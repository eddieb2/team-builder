import React from 'react';

const Form = (props) => {

  const submitForm = event => {
    event.preventDefault();
    console.log(event.currentTarget[0])
    props.setTeam([...props.team, {
      // id: Date.now(),
      name: event.currentTarget[0].value,
      email: event.currentTarget[1].value,
      role: event.currentTarget[2].value
    }]);
  }

  return(
    <form onSubmit={submitForm}>
      
      <label htmlFor="name">Name: </label>
      <input
        name="name"
        type="text"
      />
      
      <label htmlFor="email">Email: </label>
      <input  
        name='email'
        type="email"
      />

      <label htmlFor="role">Role: </label>
      <select id="role" name="role" >
        <option value="Full-Stack Developer">
          Full-Stack Developer
        </option>
        <option value="Front-End Developer">
          Front-End Developer
        </option>
        <option value="Back-End Developer">
          Back-End Developer
        </option>
      </select> 

      <button type="submit">Add New Member</button>
    </form>
  );
}

export default Form;
