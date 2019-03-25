import React, { Component } from 'react';
import client from './Client';

class Frase extends Component {
  constructor() {
    super();
    this.state = { frasepage: [] };
  }

  componentDidMount() {
    client.getEntries({
      content_type: 'conteudoFrase',
    }).then((entries) => {
      this.setState({ frasepage: entries.items[0] });
    });
  }

  render() {
    return (
      <div>
        <div className="container-frase-home">
          <div className="conteudo-frase">
            <div className="col-md-12 col-xs-12 col-sm-12">
              { this.state.frasepage.length === 0 ? <div>Carregando</div>
              : <p>{this.state.frasepage.fields.conteudoFraseDesc}</p> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Frase;
