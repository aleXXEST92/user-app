import React from 'react'
import Contacts from './Contacts'

const ShowInfo = (props) =>{
    return (
    <div>
    <button onClick={() =>props.handleClick()}>Show Info</button>
    <li>
        <ul>
            Cell Phone: {this.props.contacts.cell}
        </ul>
    </li>
    </div>)
}
export default ShowInfo