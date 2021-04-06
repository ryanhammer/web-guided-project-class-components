import React, { useState } from "react";

const App = () => {

  const Person = (props) => {
    return (
      <div>
        <h1>Hello {props.name}. You are {props.age}</h1>
        <p>That is a lovely name {name}! Never change it!!!</p>
  
      </div>
    );
  }

  const [name, setName] = useState("Carl");
  const [age, setAge] = useState(36);
  
  const clickHandler = () => {
    setName('David');
    setAge(38);
  }

  return (
    <div>
      <Person name={name} age={age}/>
      <button onClick={ clickHandler }>Click Me</button>
    </div>
  );
};

export default App;