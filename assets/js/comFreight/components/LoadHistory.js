import React from 'react'
import ReactDOM from 'react-dom'
import LoadItem from './LoadItem.js'

const LoadHistory =({loads, selectedLoad })=> {
     //map through all the loads and returns a LoadItem for each load in the main components state.loads array.
     const loadList = loads.map((load, i) =>{
       return <LoadItem key={i} load={load} selectedLoad={selectedLoad}/>
     })
    return (
      <section id='load-history'>
        <ul>{loadList}</ul>
      </section>
    )
}

export default LoadHistory
