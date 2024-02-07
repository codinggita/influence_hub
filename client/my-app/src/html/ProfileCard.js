import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/ProfileCard.css'

function ProfileCard() {

    const navigate=new useNavigate();

    return (
        <div>
            <div className="influencercard">
                <div id="info">
                    <p>username</p>
                    <p>location</p>
                    <p>link</p>
                    <p>Description</p>
                    </div>
                    <div>
                        <img onClick={()=>navigate('/profile')} src='https://images.unsplash.com/photo-1658845489483-6d54f6d5a766?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='error'></img>
                    </div>
                </div>
        </div>
    )
}

export default ProfileCard
