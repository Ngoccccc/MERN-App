import React from 'react'
import { useEffect, useState } from 'react'
import { apiURL } from '../utils/constant'

function UserList() {
    const [userList, setUserList] = useState([])
    useEffect(() => {
        fetch(`${apiURL}/users`)
            .then(res => res.json())
            .then(data => {
                setUserList(data);

            })
    }, [])
    return (
        <div>
            {userList.map((user, id) => (
                <h1 key={id}>{user.username}</h1>
            ))}
        </div>
    )
}

export default UserList