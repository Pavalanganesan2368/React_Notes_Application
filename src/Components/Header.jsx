import React from 'react'

const Header = ({ titleName, countNote }) => {
  return (
    <nav className='nav-container'>
        <h2 className='header-section'>{titleName}</h2>
        <h2 className="count-section">Note Count : {countNote}</h2>
    </nav>
  )
}

export default Header