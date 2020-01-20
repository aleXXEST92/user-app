import React, {Component} from 'react';
import Contacts from './Components/Contacts'

export default class App extends Component  {
  state = {
  contacts : [],
  };

  getUsers = () => {
    fetch("https://randomuser.me/api?results=25")
    .then(response => response.json())
    .then(data => this.setState({contacts : data.results}));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    console.log(this.state.contacts)

    return (
      <div>
      {this.state.contacts.map((person, index) => (
        <Contacts
        key={person.registered.date}
        contacts ={person}
        />
      ))}
      </div>
    )
  }
}
  

