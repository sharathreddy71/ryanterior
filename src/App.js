import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Hall from './components/pages/Hall';
import Kitchen from './components/pages/Kitchen';
import Bedroom from './components/pages/Bedroom';
import Home from './components/pages/Home';



function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          



          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Hall' component={Hall} />
          <Route path='/Kitchen' component={Kitchen} />
          <Route path='/Bedroom' component={Bedroom} />
        </Switch>
      
    </Router>
  );
}

export default App;


