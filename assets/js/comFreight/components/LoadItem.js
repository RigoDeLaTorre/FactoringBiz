import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'

const LoadItem =({load, selectedLoad})=> {

    return (
        // This passes the current load to the index.js container where it sets the state of the selected load when a user clicks on the NavLink below due to event bubbling.
     <li className ="load-item" onClick={() =>selectedLoad(load)}>
      <div className="load-list">
       <h1>{load.billTo}</h1>
       <h2>$ {load.invoiceAmount}</h2>
       <div className="load-address">
          <p>{load.firstPickup}</p>
          <p>{load.finalDestination}</p>
       </div>
         <NavLink to="/details" activeClassName="selected">Details</NavLink>
      </div>
      <div className="pay-info">
        <h2>Paid</h2>
        <h3>2017</h3>
        <h1>Thu, Apr 13</h1>
      </div>
    </li>
    )
}
export default LoadItem
