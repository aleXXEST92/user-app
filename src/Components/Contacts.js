import React, { Component } from 'react'
import ShowInfo from "./ShowInfo"
import HideInfo from "./HideInfo"

export default class Contacts extends Component {

state ={
    isClicked: false 
}

handleClick = () => {

let isClicked = this.state.isClicked

console.log(isClicked)

this.setState({
   isClicked: !isClicked 
})
} 

    render() {

        let isClicked = this.state.isClicked
        const contacts = this.props.contacts

        return (
            <div>
            First Name:{contacts.name.first}<br/>
            Last Name:{contacts.name.last}<br/>
            <img alt ="thumbnail" src={contacts.picture.large}></img><br/>
            {isClicked ? (<ShowInfo handleClick={this.handleClick}/>) : (<HideInfo handleClick={this.handleClick}/>)}
            </div>
        )
    }
}
