import React from 'react'
import '../styles/header.css'
import './Switch.js'
import Switch from './Switch.js'

function Header({children}) {
    return (
        <header className="header" >
     <div className="wrapper">
      <div className="header-grid">
        <div>
          <h1>Social Media Dashboard</h1>
          <p className="header-total">Total Followers: 23, 004</p>
        </div>
        {children}
      </div>
     </div>
   </header>
    )
}

export default Header