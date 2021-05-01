import React from 'react';
import './Profile.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function About() {
    return (
        <div className="about">
                   <div className="inner">
                       <div className="user-profile">
                           <img src="https://media2.bollywoodhungama.in/wp-content/uploads/2016/05/484295885.jpg" alt="Priyanka chopra"/>
                           <div className="info">
                           <h1>Priyanka Chopra <VerifiedUserIcon color="primary"/></h1>
                           <h3>Priyanka Chopra Jonas</h3>
                           <p>Hollywood / Bollywood Actress, Entrepreneur, Business Women, Vlogger, Youtuber</p>
                           </div>
                       </div>
                       <button className="btn-msg">Send Private Message</button>
                   </div>
            </div>
    )
}

export default About
