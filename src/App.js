import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

/* COMPONENTES FILHOS 
import Slide from './Components/Slide'
import Frase from './Components/Frase'
import SessaoContador from './Components/SessaoContador'
import SessaoServicos from './Components/SessaoServicos'
import SessaoVagas from './Components/SessaoVagas'
import SessaoDepoimentos from './Components/SessaoDepoimentos'
import SessaoEbook from './Components/SessaoEbook'*/

/* COMPONENTES GENERICOS */
import Navbar from './Components/Navbar'
//import Footer from './Components/Footer'

/* PAGINAS */
/* COMPONENTES PAI */
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import ConsultoriaEmpresarial from './Pages/ConsultoriaEmpresarial'
import TerceirizacaoTemporarios from './Pages/TerceirizacaoTemporarios'
import ConsultoriaRh from './Pages/ConsultoriaRh'
import EducacaoCorporativa from './Pages/EducacaoCorporativa'


class App extends Component {

  /* 
  <Navbar />
  <Slide />
  <Frase />
  <SessaoServicos />
  <SessaoVagas />
  <SessaoContador />
  <SessaoDepoimentos />
  <SessaoEbook />
  */

  render() {
    return (
      <Router>
        <div className="">
          <Navbar />
          <Route exact path="/" component = {Home}/>
          <Route exact path="/sobre" component = {Sobre}/>
          <Route exact path="/consultoria-empresarial" component={ConsultoriaEmpresarial}/>
          <Route exact path="/terceirizacao-temporarios" component={TerceirizacaoTemporarios}/>
          <Route exact path="/consultoria-rh" component={ConsultoriaRh}/>
          <Route exact path="/educacao-corporativa" component={EducacaoCorporativa}/>
        </div>
      </Router>
    );
  }
}

export default App