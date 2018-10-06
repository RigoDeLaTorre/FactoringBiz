import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  constructor () {
    super()
    this.state = {

    }
  }


  render () {
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
}
