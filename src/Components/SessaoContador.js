import React, {Component } from 'react';

class SessaoContador extends Component{
  render(){
    return(
      /*==========================
        Sessao contador
      ============================ */
      <section id="facts"  class="wow fadeIn">
        <div class="container">

          <div class="row counters">

            <div class="col-md-2 text-center">
              <span data-toggle="counter-up">+274</span>
              <p>Empresas atendidas</p>
            </div>

            <div class="col-md-2 text-center">
              <span data-toggle="counter-up">+421</span>
              <p>Recolocações</p>
            </div>

            <div class="col-md-2 text-center">
              <span data-toggle="counter-up">+364</span>
              <p>Temporários</p>
            </div>

            <div class="col-md-2 text-center">
              <span data-toggle="counter-up">+18</span>
              <p>Banco de Candidatos</p>
            </div>

            <div class="col-md-2 text-center">
              <span data-toggle="counter-up">+109</span>
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


