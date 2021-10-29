import './App.css';
import React, { useState } from "react";
import './App.scss'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import { About, Home, Footer } from "./components"; 

function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);
  return (
      <>
        <nav className="navbar" >
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Welcome to Syed's Website <i className="fab fa-typo3"></i>
                </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
              <li className='nav-item'> 
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                  </Link>
              </li>
              <li className='nav-item'> 
                  <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                      About Me
                  </Link>
              </li>
              </ul>
            </div>
        </nav>
      </>
  )
}
function App() {
  return (
    <div className="App" >
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutme' exact component={About} />

        </Switch>
        <Footer />
      </Router>
    </>
    
    </div>
  );
}

export default App;
