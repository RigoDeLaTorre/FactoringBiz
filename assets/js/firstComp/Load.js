import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

const Load =({load})=> {

    return (
     <li className ="load-item">
      <div className="load-list">
       <h1>{load.billTo}</h1>
       <h2>$ {load.invoiceAmount}</h2>
       <div className="load-address">
          <p>{load.firstPickup}</p>
          <p>{load.finalDestination}</p>
       </div>
       <a href="#">Details</a>
      </div>
      <div className="pay-info">
        <h2>Paid</h2>
        <h3>2017</h3>
        <h1>Thu, Apr 13</h1>
      </div>
    </li>
    )
}
export default Load
