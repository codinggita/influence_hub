import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/ProfileCard.css'

function ProfileCard ({ user }) {

    const navigate=new useNavigate();

    return (
        <div>
            <div className="influencercard">
                <div id="info">
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                    <p>{user.address.country}</p>
                    <p>{user.description}</p>
                    <p>{user.role}</p>
                    <p>{user.language}</p>
                    </div>
                    <div>
                        <img onClick={()=>navigate(`/profile/?username=${user.username}`)} src={user.profilephoto} alt='error'></img>
                    </div>
                </div>
        </div>
    )
}

export default ProfileCard
