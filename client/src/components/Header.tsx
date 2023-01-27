import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper blue'>
        <Link to="/" className='brand-logo left'>Home</Link>
        <ul className='right'>
          <div></div>
        </ul>
      </div>
    </nav>
  )
}

export default Header
