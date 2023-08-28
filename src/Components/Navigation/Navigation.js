import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <h1>Home Screen</h1>
  )
}
const About = () => {
  return (
    <h1>About Screen</h1>
  )
}
const Help = () => {
  return (
    <h1>Help Screen</h1>
  )
}
const Navigation = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <Router>
        <nav>
          <ul>

            <li><Link to='/'> Home</Link></li>

            <li><Link to='/about'>About</Link></li>
            <li><Link to='/help'>Help</Link></li>


          </ul>
        </nav>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/help' component={Help} />

      </Router>

    </div>
  )
}

export default Navigation


