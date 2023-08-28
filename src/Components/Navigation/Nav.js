import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Help from './Help';
import About from './About';
import Home from './Home';


const Nav = () => {

  return (
    <div>
        <Router>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/Help'>Help</Link></li>
                </ul>
            </nav>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/help' component={Help}/>
        </Router>
    </div>
  )
}

export default Nav