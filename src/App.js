import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/pages/Contact'
import Project from './components/pages/Project'
import Details from './components/Details'
import './App.css'


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
          <div className="container">
            <Route exact path='/' render={() => (
              <Fragment>
                <Hero />
                <Details />   
              </Fragment>
            )}/>
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/project' component={Project} />
          </div>
      </Router>
    );
  }
}

export default App;
