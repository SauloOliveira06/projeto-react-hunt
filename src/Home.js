import React, { Component } from 'react';
import Slide from './Components/Slide';
import Frase from './Components/Frase';
import SessaoContador from './Components/SessaoContador';
import SessaoServicos from './Components/SessaoServicos';
import SessaoVagas from './Components/SessaoVagas';
import SessaoDepoimentos from './Components/SessaoDepoimentos';
import SessaoEbook from './Components/SessaoEbook';
import './App.css';

class Home extends Component {
  render(){
    return(
        <div>
        <Slide/>
        <Frase/>
        <SessaoServicos/>
        <SessaoVagas/>
        <SessaoContador/>
        <SessaoDepoimentos/>
        <SessaoEbook/>
        </div>
    );
  }
}

export default Home 