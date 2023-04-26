import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Notebook</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </div>
    </nav>
  )
}