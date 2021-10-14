import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register: Create new Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="email" placeholder="Input Email" /><br/>
                    <input type="password" name="" id="pass" placeholder="input Pass" /><br/>
                    <input type="password" name="" id="repass" placeholder="re enter pass" /><br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Log-in</Link></p>
            </div>
        </div>
    );
};

export default Register;