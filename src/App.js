import React, {Component} from 'react';
// import Contacts from './Components/Contacts'

class App extends Component  {
  state = {
  users : []
  };

  getUsers = () => {
    fetch("https://randomuser.me/api?results=25")
    .then(response => response.json())
    .then(data => this.setState({users : data}));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    console.log(this.state.users.results)
    return (
      <div>
      {this.state.users.data.map((users, index) => (
        <div>
          Title:{users.title}<br/>
          Author:{users.author}</div>
      ))}
      </div>
    )
  }
}


export default App;

