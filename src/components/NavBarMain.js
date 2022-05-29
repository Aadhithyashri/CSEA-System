import React from 'react';
import "../styles/NavBarMain.css";
import {Link} from 'react-router-dom';


export default function NavBarMain() {
  return (
    <nav className="nav-container-main">
        <div className='left-container-main'>
            <ul className='nav-content'>
                <div className='left-container'>
                    <Link className='nav-link' to="/home">
                        <li><h3>Home</h3></li>
                    </Link>
                    <Link className='nav-link' to="/event">
                        <li><h3>Events</h3></li>
                    </Link>
                    <Link className='nav-link' to="/gallery">
                        <li><h3>Gallery</h3></li>
                    </Link>
                    <Link className='nav-link' to="/proposal">
                        <li><h3>Proposal</h3></li>
                    </Link>
                </div>

                <div className='vl'></div>

                <div className='right-container'>
                    <li className='nav-link'><h3>Register</h3></li>
                    <li className='nav-link'><h3>Log In</h3></li>
                </div>
            </ul>
        </div>
    
    </nav>
  )
}
