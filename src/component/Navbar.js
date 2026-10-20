import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.bool.isRequired,
  toggleMode: PropTypes.func.isRequired
}

export default function Navbar(props) {
  return (
    <nav className={`navbar sm:navbar-expand bg-1 fg-2 ${props.mode ? 'dark-mode' : 'light-mode'}`}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" aria-hidden="true"></span>
            </button>
            <dialog className="drawer drawer-end" tabIndex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
              <div className="drawer-header">
                <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
              </div>
              <div className="drawer-body">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Features</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    
                  </ul>
                      <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="modeSwitch"
                            checked={props.mode}
                            onChange={props.toggleMode}
                        />
                        <label className="form-check-label" htmlFor="modeSwitch">
                            {props.mode ? 'Dark Mode' : 'Light Mode'}
                        </label>
                     </div>
              </div>
            </dialog>
            </div>
         </nav> 
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Set Title",
    aboutText: "Set About Text"
}

