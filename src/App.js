import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Consultoria_empresarial from './Consultoria_empresarial';
import Home from './Home';
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import About from './About';
import Terceirizacao_temporarios from './Terceirizacao_temporarios';
import Consultoria_rh from './Consultoria_rh';
import Educacao_corporativa from './Educacao_corporativa';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="">
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/empresarial" component={Consultoria_empresarial} />
          <Route exact path="/sobre" component={About} />
          <Route exact path="/terceirizacao_temporarios" component={Terceirizacao_temporarios} />
          <Route exact path="/consultoria_rh" component={Consultoria_rh} />
          <Route exact path="/educacao_corporativa" component={Educacao_corporativa} />
        <Footer /> 
      </div>
      </Router>
      
    );
  }
}

export default App




