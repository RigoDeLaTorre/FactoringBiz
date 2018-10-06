import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Upload from './components/upload.js'
import Nav from './components/nav.js'
import LoadHistory from './components/LoadHistory.js'
import LoadDetails from './components/LoadDetails.js'
import data from './data.js'


class Layout extends Component {
  constructor () {
    super()
    this.state = {
        loads:data,
        selectedLoad:{}
    }
  }
handleLoads = (load) => {
     this.setState(prevState => ({
       loads:[load, ...prevState.loads]
     }));
   };

// Load History component passes the load onclick to here, and sets the state.

selectedLoad = (load)=>{
  this.setState({
    selectedLoad:load
  })
}

  render () {
    return (
      <BrowserRouter>
              <div className='home'>
              <Nav />
              <Route
                  path ='/upload'
                  render ={(props) =><Upload {...props} handleLoads={this.handleLoads}/>} />
              <Route
                  path ='/loadhistory'
                  render ={(props) =><LoadHistory {...props} loads={this.state.loads} selectedLoad={this.selectedLoad}/>} />
              <Route
                  path ='/load'
                  render ={(props) =><LoadItem {...props} />} />
              <Route
                  path ='/details'
                  render ={(props) =><LoadDetails {...props} loadSelected={this.state.selectedLoad}/>} />
              <Route
                  exact path ='/'
                  render ={(props) =><Upload {...props} handleLoads={this.handleLoads}/>} />

            </div>
          </BrowserRouter>

    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
