import React from 'react';

class Person extends React.Component {
  render() {
    return(
      <h1>Hello { this.props.name }. You are { this.props.age } years young.</h1>
    );
  }
}

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'MC',
      age: 36
    }
  }

  clickHandler = () => {
    this.setState({
      name:'David',
      age:38
    });
  }


  render() {
    
    return(
      <div>
        <Person name={ this.state.name } age={ this.state.age } />
        <button onClick={ this.clickHandler }>Click Me</button>
      </div>
    )
  }
}

export default App2;