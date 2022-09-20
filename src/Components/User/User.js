import React from 'react'
import { useLocation } from "react-router-dom";

import './User.scss'

const User = () => {

    const location = useLocation()
    const { user } = location.state

  return (
    <div className='user-container'>
        <h1>User Details</h1>
        <div className="card">
            <div className="avatar">
                <img src={user.avatar} alt={user.first_name} />
            </div>
            <h2>
                {user.first_name} {user.last_name}
            </h2>
            <p> { user.email } </p>
        </div>
    </div>
  )
}

export default User