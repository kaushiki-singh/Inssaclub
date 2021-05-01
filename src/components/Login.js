import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";
import './Login.css';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Login({ handleName }) {
     
    const history = useHistory();

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj.givenName);
        history.push("/profile");
        handleName(response.profileObj.givenName, response.profileObj.familyName, response.profileObj.email);
    }
    const showError = () => {
        history.push("/error");
    }
    return (
        <div className="login">
        <div className="login-section">
            <div className="login-inner">
            <div className="heading">
                <h1>Hey, Welcome To Inssaclub</h1>
            </div>
            <GoogleLogin className="googleLogin"
            clientId="804865154683-gh2a3u47eporoh5ek6e225cdpp46ncet.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={showError}
            cookiePolicy={'single_host_origin'} 
            /> 
            <div className="description">
                <p><VpnKeyIcon />   Login using a verified Google Account</p>
            </div>
            <div className="social">
                <FacebookIcon fontSize="large"/>
                <InstagramIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
                <PinterestIcon fontSize="large"/>
                <RedditIcon fontSize="large"/>
                <TwitterIcon fontSize="large"/>
                <YouTubeIcon fontSize="large"/>
            </div>
            
            </div>
        </div>
        </div>
    )
}

export default Login
