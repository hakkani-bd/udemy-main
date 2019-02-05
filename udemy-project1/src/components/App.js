import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons :[
      {name : 'Max', age: 28},
      {name : 'Manu', age: 29},
      {name : 'Stephanie', age: 26}
    ],
    otherState : 'Some other value'
  }

  switchNameHandler = newName =>{
    //console.log('Was Clicked!');
    this.setState({
      persons :[
        {name : newName, age: 28},
        {name : 'Manu', age: 29},
        {name : 'Stephanie', age: 27}
      ]
    })
  }

  nameChangeHandler = event =>{
    this.setState({
      persons :[
        {name : 'Max', age: 28},
        {name : event.target.value, age: 29},
        {name : 'Stephanie', age: 26}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-3">
              <h1>Hi, I am React App</h1>
              <p>I'ts working really!</p>
              <button className='btn btn-info' onClick={this.switchNameHandler.bind(this, 'Maximalian')}>Switch Name</button>
              <Person 
                name = {this.state.persons[0].name} 
                age = {this.state.persons[0].age} 
              />
              <Person 
                name = {this.state.persons[1].name} 
                age = {this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!!')}
                change={this.nameChangeHandler}
                >My Hobbies: Racing</Person>
              <Person 
                name = {this.state.persons[2].name} 
                age = {this.state.persons[2].age} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
