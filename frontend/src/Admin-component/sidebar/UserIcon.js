import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class UserIcon extends Component {
    render(){
    return (
        <div>
            <FontAwesomeIcon icon={faUser} className="mr-2"/> User
        </div>
    )
    }
}

export default UserIcon;