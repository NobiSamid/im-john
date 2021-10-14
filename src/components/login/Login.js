import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/shop";
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Log-in</h2>
                <form>
                    <input type="email" name="" id="email" placeholder="Your E-mail" /><br/>
                    <input type="password" name="Password" id="pass" /> <br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Im-John ?<Link to="/register">Create new account</Link></p>
                <div>-------------------or-------------------</div>
                <button className="btn-regular" onClick={handleGoogleLogin}> Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;