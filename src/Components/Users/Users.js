import React, { useState, useEffect } from 'react'
import './Users.scss'
import { Link } from 'react-router-dom'


const Users = () => {
    let [Users, setUsers] = useState(null)

    useEffect(() => {
        fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(data => setUsers(data.data))
      }, [])

  return (
    <div className='users-container'>
        <h1>Regres Users</h1>
        <div className='users'>
            {
                Users && Users.map((user, id) => (
                    <Link to={`/users/${user.id}`}  className='card' state={{ user: user }} key={id}>
                        <div className="avatar">
                            <img src={user.avatar} alt={user.first_name} />
                        </div>
                        <h2>
                            {user.first_name} {user.last_name}
                        </h2>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Users