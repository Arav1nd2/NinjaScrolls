import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import {NavLink, Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            <div className = "container">
                <Link className = "navbar-brand" to = "/">
                    <img src = {logo} width = "40px" alt = 'logo' />
                    NinjaScrolls
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className = "navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className = "navbar-nav ml-auto">
                            <NavLink className ="nav-item" to = '/login'><span>Login</span></NavLink>
                            <NavLink className ="nav-item" to = '/signup'><span className = "nav-link">Signup</span></NavLink>
                            <NavLink className ="nav-item" to ='/books'><span className = "nav-link">Books</span></NavLink>
                    </ul>
                </div>
                    
                </div>
        </nav>
    )
}
