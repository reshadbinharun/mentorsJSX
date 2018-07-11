import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //allows use of this
    this.state = { //dictionary
      mentors : [],
      currentMentor : "",
      veterans : []
    }
  }
  onInputChange = e => {
    this.setState({currentMentor : e.target.value});
  }
  onClick = () => {
    let copyList = this.state.mentors.slice();
    copyList.push(this.state.currentMentor);
    this.setState({mentors : copyList, currentMentor : ""}); //immutable nature of state
  }
  onClickVet = (toRemove) => {
    let copyMentors = this.state.mentors.slice();
    copyMentors.splice( copyMentors.indexOf(toRemove), 1 );
    // Find the index position of "foo," then remove one element from that position
    let copyVets = this.state.veterans.splice();
    copyVets.push(toRemove);
    this.setState({
      mentors : copyMentors,
      veterans: copyVets
    });
  }
    render(){
      let allMentors = this.state.mentors.map((e,i) => {
        return (
          <li key = {i}> {e} <button onClick = {() => this.onClickVet(e)} > Veteranize </button> </li>);
      });
      let count = this.state.mentors.length;
      
      let allVets = this.state.veterans.map((e,i) => {
        return (
          <li key = {i}> {e} </li>);
      });
      return (
        <div>
          <input placeholder = "Enter Mentor Name: " value = {this.state.currentMentor}
          onChange = {this.onInputChange}/><br /> 
          <button onClick = {this.onClick} > Register! </button><br />
          {this.state.mentors.length === 0 ? "No mentors signed up" : <ul> {allMentors}</ul>}
          <p> Total Mentor Count is : {count} </p>
          <p> Veteranized Mentors </p>
          {this.state.veterans.length === 0 ? "No veteran mentors yets" : <ul> {allVets} </ul>}
          <p> Total Veteran Count : {this.state.veterans.length} </p>
        </div>
        );

    } 
}

export default App;
