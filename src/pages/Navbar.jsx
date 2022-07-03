import React from "react"
import { Link } from "gatsby"

export const Navbar = () => {
    return (
        <nav className="navbar">  
            <div className="navButton">
                <div className="navi"></div>
                <div className="navi"></div>
                <div className="navi"></div>
                <div className="navi"></div>                
            </div>
            <div className="dropdown-content">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/berlin">Berlin Album</Link>  
            </div>     
    </nav> 
    )
}