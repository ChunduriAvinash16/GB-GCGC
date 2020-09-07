import React, { Component } from 'react'
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class UserIcon extends Component {
    render(){
    return (
        <div>
            <FontAwesomeIcon icon={faUser} className="mr-2"/> User
        </div>
    )
=======
import {
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class UserIcon extends Component{
    render(){
        return( 
            <div>
                <FontAwesomeIcon icon={faUser} className="mr-2" /> User
            </div>
        )
>>>>>>> 703792d28c873994ea6cd0e918c73c5fefb21d08
    }
}

export default UserIcon;