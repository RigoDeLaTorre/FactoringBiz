import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'

const LoadDetails =({loadSelected})=> {

    return (
      <section id ="load-details">
        <div className="load-details-container">
          <div className="top-section">
            <h1>Paid</h1>
            <h2>Thursday, April 13 2018</h2>
            <div className ="group">
              <h5>Invoice #{loadSelected.loadNumber}</h5>
              <h3>${loadSelected.invoiceAmount}</h3>
            </div>
          </div>
          <div className="mid-section">
            <h5>Billed to: {loadSelected.billTo}</h5>
            <img src ="./img/map.png" />
          </div>
          <div className="bottom-section">
            <h5>Rate: 3%</h5>
            <h5>Load: #{loadSelected.loadNumber}</h5>
            <h5>Type: {loadSelected.equipmentType}</h5>
            <h5>Load Length: {loadSelected.loadLength}ft</h5>
            <h5>Company Phone: 555-555-5555</h5>
            <h4>Total Paid: $289.50</h4>
          </div>
          <div className="back-button">
          <NavLink to="/loadhistory" activeClassName="selected">Go Back</NavLink>

          </div>

        </div>

      </section>

    )
}
export default LoadDetails
