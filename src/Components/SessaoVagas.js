import React, {Component} from 'react';
import client from './Client';

class SessaoVagas extends Component {
    
    constructor(){
      super()
      this.state = { titulo_vagapage: []}
    }

    componentDidMount(){
      client.getEntries({
          'content_type' : 'tituloVagas'
      }).then( (entries) => {
          this.setState({titulo_vagapage: entries.items[0]})
      })
    }
  render(){
    return(
          /* ==========================
          Sessao VAGAS - Home
          ============================ */
      <div>
        <div class="container">
          <div class="sessao-vagas col-md-6 col-lg-6 col-xs-6 col-sm-12">
            {this.state.titulo_vagapage.length === 0 ?
              <div>Carregando</div>
              :
              <p>{this.state.titulo_vagapage.fields.tituloVagas}</p>
            }
          </div>
        </div>
    
        <section id="sessao-vagas">
          <div class="container">
            <div class="container-vagas">
              <div><img id="vaga-1" src="arquivos-layout/images/vagas.png"/></div>
              <div><img id="vaga-2" src="arquivos-layout/images/vagas.png"/></div>
          </div>
        </div>
      
        <div class="container">
          <div class="container-vagas2">
            <div><img id="vaga-3" src="arquivos-layout/images/vagas.png"/></div>
            <div><img id="vaga-4" src="arquivos-layout/images/vagas.png"/></div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default SessaoVagas 