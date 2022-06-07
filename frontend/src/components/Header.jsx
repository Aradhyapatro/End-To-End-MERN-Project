import React from 'react'
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
        <div className="logo">
            <Link to="/">
                Goal-Setter
            </Link>
        </div>
        <ul>
            <li>
                <Link to="/login">
                    <FaSignInAlt /> Log-in
                </Link>
            </li>
            <li>
                <Link to="/register" >  <FaUser/>register</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header