import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(UserContext);
  return (
    <div>
        {/* {!user}  <h4>Please Login!!</h4> */}
        return <div>
        <h1>Welcome {user.username}</h1>
            </div> 
    </div>
  )
}

export default Profile
