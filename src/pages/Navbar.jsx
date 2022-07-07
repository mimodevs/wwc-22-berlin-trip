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
                <Link to="/about">About</Link>
                <Link to="/contact">Video</Link>
                <Link to="/berlin">Berlin Album</Link>  
            </div> 

            <div class="logo">
                <Link to="/">
                    <img src="nav.png" width="40px"/>
                </Link>                
            </div>          
            
            <div className="pingoBox">       
                <div className="pingo"> Pingo </div> 
            </div>
    </nav> 
    )
}