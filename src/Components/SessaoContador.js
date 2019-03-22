import React, {Component } from 'react';
import client from './Client';

class SessaoContador extends Component{

    constructor(){
      super()
      this.state = { 
        titulo_seguimentos: [],
        contador1: [],
        contador2: [],
        contador3: [],
        contador4: [],
        contador5: [],
      }
  }

  componentDidMount(){
      client.getEntries({
          'content_type' : 'tituloSeguimentos'
      }).then( (entries) => {
          this.setState({titulo_seguimentos: entries.items[0]})
          this.setState({contador1: entries.items[0]})
          this.setState({contador2: entries.items[0]})
          this.setState({contador3: entries.items[0]})
          this.setState({contador4: entries.items[0]})
          this.setState({contador5: entries.items[0]})
      })
  }
  render(){
    return(
      /*==========================
        Sessao contador
      ============================ */
      <section id="facts"  class="wow fadeIn">
        <div class="container">

          <div class="row counters">

            <div class="col-md-2 text-center">
              <span data-toggle="counter-up">
              {this.state.contador1.length === 0 ?
                <div>Carregando</div>
                  :
                  <p>{this.state.contador1.fields.contador1}</p>
              }</span>
              <p>Empresas atendidas</p>
            </div>

            <div class="col-md-2 text-center">
              <span data-toggle="counter-up">
              {this.state.contador1.length === 0 ?
                <div>Carregando</div>
                  :
                  <p>{this.state.contador1.fields.contador1}</p>
              }</span>
              <p>Recolocações</p>
            </div>

            <div class="col-md-2 text-center">
              <span data-toggle="counter-up">
              {this.state.contador2.length === 0 ?
                <div>Carregando</div>
                  :
                  <p>{this.state.contador2.fields.contador2}</p>
              }</span>
              <p>Temporários</p>
            </div>

            <div class="col-md-2 text-center">
              <span data-toggle="counter-up">
              {this.state.contador3.length === 0 ?
                <div>Carregando</div>
                  :
                  <p>{this.state.contador3.fields.contador3}</p>
              }</span>
              <p>Banco de Candidatos</p>
            </div>

            <div class="col-md-2 text-center">
              <span data-toggle="counter-up">
              {this.state.contador4.length === 0 ?
                <div>Carregando</div>
                  :
                  <p>{this.state.contador4.fields.contador4}</p>
              }</span>
              <p>Projeto de Redução de Custos</p>
            </div>

          </div>

          <div class="facts-img">
            <img src="img/facts-img.png" alt="" class="img-fluid"/>
          </div>

        </div>
      </section>
    );
  }
}

export default SessaoContador


