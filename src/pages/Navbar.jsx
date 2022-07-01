import React from "react"

/* functional component navbar */
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
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Berlin</a>                
            </div>        
    </nav> 
    )
}