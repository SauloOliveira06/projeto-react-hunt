import React, { Component } from 'react';

/* Importar modulos de Rotas */
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

/* Importar CSS App */


/* COMPONENTES GENERICOS*/
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

/* PÁGINAS */
import Home from './Home';
import About from './About';
import ConsultoriaEmpresarial from './ConsultoriaEmpresarial';
import Terceirizacao_temporarios from './Terceirizacao_temporarios';
import Consultoria_rh from './Consultoria_rh';
import Educacao_corporativa from './Educacao_corporativa';

/* Classe da aplicacao para renderizar os componentes */
class App extends Component {
  render(){
    return (
      <Router>
        <div className="">
          <Navbar/>
          <Route exact path="/" render={() => (<Redirect to="/home"/>)}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/sobre" component={About} />
          <Route exact path="/consultoria-empresarial" component={ConsultoriaEmpresarial} />
          <Route exact path="/terceirizacao-temporarios" component={Terceirizacao_temporarios} />
          <Route exact path="/consultoria-rh" component={Consultoria_rh} />
          <Route exact path="/educacao-corporativa" component={Educacao_corporativa} />
          <Footer /> 
        </div>
      </Router>
      
    );
  }
}

export default App




