import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Slide from './Components/Slide';
import Frase from './Components/Frase';
import SessaoContador from './Components/SessaoContador';
import SessaoServicos from './Components/SessaoServicos';
import SessaoVagas from './Components/SessaoVagas';
import SessaoDepoimentos from './Components/SessaoDepoimentos';
import SessaoEbook from './Components/SessaoEbook';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {

  render() {
    console.log('render')
    return (
      <div className="">
        <Navbar />
        <Slide />
        <Frase />
        <SessaoServicos />
        <SessaoVagas />
        <SessaoContador />
        <SessaoDepoimentos />
        <SessaoEbook />
        <Footer />
      </div>

    );
  }
}

export default App