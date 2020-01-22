import React from 'react'

const HideInfo = (props) => {
    return (
        <div>
        <button onClick={() =>props.handleClick()}>Hide Info</button><br/>
        Gender: {props.contacts.gender}<br/>
        Age: {props.contacts.dob.age} <br/>
        Cell: {props.contacts.cell}<br/>
        City: {props.contacts.location.city}<br/>
        State {props.contacts.location.state}<br/>
        Email: {props.contacts.email}<br/>
        </div>
    )

}

export default HideInfo
