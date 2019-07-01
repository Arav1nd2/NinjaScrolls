import React from 'react'

export default function Navbar() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            <a className = "navbar-brand" href = "/">NinjaScrolls</a>
            <div className = "navbar-toggler">
                <span className = "navbar-toggler-icon"></span>
            </div>
            <div className = "">
                <ul className = "navbar-nav">
                    <li className ="nav-item"><span className = "nav-link">Home</span></li>
                    <li className ="nav-item"><span className = "nav-link">Login</span></li>
                    <li className ="nav-item"><span className = "nav-link">Signup</span></li>
                    <li className ="nav-item"><span className = "nav-link">Books</span></li>
                </ul>
            </div>
        </nav>
    )
}
