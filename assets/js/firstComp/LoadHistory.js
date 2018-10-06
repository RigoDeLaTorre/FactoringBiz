import React from 'react'
import ReactDOM from 'react-dom'
import Load from './Load.js'

const LoadHistory =({loads, selectedLoad})=> {
     const loadList = loads.map((load, i) =>{
       return <Load key={i} load={load} selectedLoad={selectedLoad}/>
     })
    return (<section id='load-history'>
            <ul>{loadList}</ul>
      </section>)

}

export default LoadHistory
