import React from 'react'
import "../styles/NavBarMain.css"

export default function NavBarMain() {
  return (
    <nav className="nav-container-main">
        <div className='left-container-main'>
            <div className='nav-content'>
                <h3>Home</h3>
            </div>
            <div className='nav-content'>
                <h3>Events</h3>
            </div>
            <div className='nav-content'>
                <h3>Proposals</h3>
            </div>
            <div className='nav-content'>
                <h3>Gallery</h3>
            </div>
        </div>
        <div className='vl'></div>
        <div className='right-container-main'>
            <div className='nav-content'>
                    <h3>Register</h3>
            </div>
            <div className='nav-content'>
                <h3>Log in</h3>
            </div>
        </div>
    
    </nav>
  )
}
