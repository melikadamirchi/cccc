import React from 'react'
import Login from "./Pages/Login"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Main from './Pages/Main'
import About from './Pages/About';

function Asli() {
  return (
    <Router>
    <Route path="/" exact render={(props) =><Main/>}/>
    <Route  path="/login" render={(props) =><Login/>}/>
    <Route path="/about" render={(props) =><About/>}/>
  </Router>
  )
}

export default Asli