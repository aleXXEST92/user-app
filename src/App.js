import React, {Component} from 'react';
import Contacts from './Components/Contacts'

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
        hello
      </div>
    )
    // return (
    //   <div className="App">
    //     {this.state.users.data.results.map((user, index) => (
    //     <Contacts        
    //     />
    //     ))}
    //   </div>
    // );
  }
}


export default App;

