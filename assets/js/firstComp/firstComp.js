import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Upload from './upload.js'
import Nav from './nav.js'
import LoadHistory from './LoadHistory.js'
import data from './data.js'


class Layout extends Component {
  constructor () {
    super()
    this.state = {
        loads:data,
        selectedLoad:''
    }
  }

handleLoads = (load) => {
     this.setState(prevState => ({
       loads:[...prevState.loads, load]
     }));
   };

getValue =() =>{
  console.log(this.first.value)
  console.log(this.last.value)
  console.log(this.email.value)
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
                  render ={(props) =><LoadHistory {...props} loads={this.state.loads} />} />
                  <Route
                      path ='/load'
                      render ={(props) =><Load {...props} />} />
              <Route exact path = "/" component={Upload} />
            </div>
          </BrowserRouter>

    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
