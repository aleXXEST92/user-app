import React, { Component } from 'react'
import ShowInfo from "./ShowInfo"
import HideInfo from "./HideInfo"

export default class Contacts extends Component {

state ={
    isMoreInfo: false 
}

handleClick = () => {

let isMoreInfo = this.state.isMoreInfo

console.log(isMoreInfo)

this.setState({
   isMoreInfo: !isMoreInfo 
})
} 

    render() {

        let isMoreInfo = this.state.isMoreInfo
        const contacts = this.props.contacts

        return (
            <div className='individual'>
            Name:{contacts.name.first} {contacts.name.last}<br/>
            <img alt ="thumbnail" src={contacts.picture.large}></img><br/>
            {isMoreInfo ? (<HideInfo 
            contacts ={contacts}
            handleClick={this.handleClick}/>) 
            : (<ShowInfo 
            contacts ={contacts}
            handleClick={this.handleClick}/>)}
            </div>
        )
    }
}
