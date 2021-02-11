import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import styled from 'styled-components';


class App extends Component {
  state = {
    persons: [
      { id: 'dsdsdsw2', name: 'Gorazd', age: 21 },
      { id: 'sads11a6', name: 'Anja', age: 19 },
      { id: 'dkapkdk7', name: 'Beti', age: 48 }
    ],
    otherState: 'somevalues',
    showPersons: false
  }


  nameChangeHandler = (event, id) => {
    // console.log('Was Clicked');
    //this.state.persons[0].name = 'Gorazdd';
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;



    this.setState({ persons: persons })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  deletePersonsHandler = (personIndex) => {
    //  const persons=this.state.persons.slice();//does a copy
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  render() {


    const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color:white;
    font: inherit;
    border: 1px solid blue
    padding: 8px;
    cursor: pointer;

    &:hover{
      background-color: lightgreen;
      color: black;
    }
    `;

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}

        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hi, I am a React APP</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons
          </StyledButton>
        {persons}


      </div>
    );
  }
}

export default App;
