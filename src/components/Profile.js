import React from 'react'
import './Profile.css';
import About from './About';
import Follow from './Follow';
import Posts from './Posts';

function Profile({firstName, lastName, email}) {
    return (
        <div className="profile">

            <div id="header">
            <div className="email">{email}</div>
            <div className="heading"><h1>Celebrities Profile Page</h1></div>
            <div className="userInfo">{firstName} {lastName}</div> 
            </div> 

            <About/>
            <Follow/>
            <Posts/>         
        </div>
    )
}

export default Profile
