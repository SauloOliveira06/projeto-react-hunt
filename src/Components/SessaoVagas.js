import React, {Component} from 'react';

class SessaoVagas extends Component {
  render(){
    return(
          /* ==========================
          Sessao VAGAS - Home
          ============================ */
      <div>
        <div class="container">
          <div class="sessao-vagas col-md-6 col-lg-6 col-xs-6 col-sm-12">
            Vagas
          </div>
        </div>
    
        <section id="sessao-vagas">
          <div class="container">
            <div class="container-vagas">
              <div><img id="vaga-1" src="assets/images/vagas.png"/></div>
              <div><img id="vaga-2" src="assets/images/vagas.png"/></div>
          </div>
        </div>
      
        <div class="container">
          <div class="container-vagas2">
            <div><img id="vaga-3" src="assets/images/vagas.png"/></div>
            <div><img id="vaga-4" src="assets/images/vagas.png"/></div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default SessaoVagas 