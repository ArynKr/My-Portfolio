import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <section className="left">
              <div className="logo">
                ArynKr
              </div>
            </section>
            <section className="right">
                <ul className='nav'>
                  <li class="active">Home</li>
                  <li>About</li>
                  <li>Projects</li>
                  <li>Tools</li>
                  <li>Skills</li>
                  <li>Contact</li>
                </ul>
            </section>
        </div>
    )
}

export default Navbar
