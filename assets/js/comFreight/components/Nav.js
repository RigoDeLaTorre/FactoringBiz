import React from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'

const Nav = () => {

return (<section id='nav'>
        <div className="nav-container">
          <div className="top-half">
          </div>
          <div className ="nav-links">
            <ul>
              <NavLink to="/upload" activeClassName="selected">Upload</NavLink>
              <NavLink to="/credit" activeClassName="selected">Credit</NavLink>
              <NavLink to="/loadhistory" activeClassName="selected">History</NavLink>
            </ul>
          </div>
        </div>
      </section>)
}

export default Nav
