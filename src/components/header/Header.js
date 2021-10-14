import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header">
            <img src={logo} alt="logo"></img>
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory Here</NavLink>
                <NavLink to="/register">Register</NavLink>
                { user.email && <span style={{color:'white'}}>Hello {user.displayName}</span>}
                {
                    user.email ? <button onClick={logOut}>Log-out</button> : <NavLink to="/login">Log-in</NavLink> }
            </nav>
        </div>
    );
};

export default Header;