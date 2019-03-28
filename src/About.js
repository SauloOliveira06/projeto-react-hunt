import React, { Component } from 'react';
import Banner from './Components/Banner';
import './About.css'
import client from './Components/Client';
class About extends Component {

  constructor() {
    super()
    this.state = {
      /* TITULO BANNER */
      tituloBanner: [],
      /* SESSAO EQUIPE */
      sobreEmpresa: [],
      textoSobre: [], tituloEquipe: [],
      depoimentoEquipe1: [], nomeDepoimento1: [],
      depoimentoEquipe2: [], nomeDepoimento2: [],
      depoimentoEquipe3: [], nomeDepoimento3: [],
      /* SESSAO MATRIZ -CONTATO */
      tituloMatriz: [],
      enderecoMatriz: [], telefoneMatriz: [],
      emailMatriz: [],
      /* FOOTER */
      tituloEndereco: [], textoEndereco: [],
      tituloSociais: [], tituloDowloads: [],
      /* RODAPE COPYRIGHT */
      textoCopyright: [],
    }
  }
  componentDidMount(){
    client.getEntries({
      'content_type': 'sobre'
    }).then((entries) => {
      this.setState({
        tituloBanner: entries.items[0], sobreEmpresa: entries.items[0],
        textoSobre: entries.items[0], tituloEquipe: entries.items[0],
        depoimentoEquipe1: entries.items[0], nomeDepoimento1: entries.items[0],
        depoimentoEquipe2: entries.items[0], nomeDepoimento2: entries.items[0],
        depoimentoEquipe3: entries.items[0], nomeDepoimento3: entries.items[0],
        tituloMatriz: entries.items[0], enderecoMatriz: entries.items[0],
        telefoneMatriz: entries.items[0], emailMatriz: entries.items[0],
        tituloEndereco: entries.items[0], textoEndereco: entries.items[0],
        tituloSociais: entries.items[0], tituloDowloads: entries.items[0],
        textoCopyright: entries.items[0]
      })
    })
  }



  render() {

    return (
      <div>

        <Banner />

        {/* SESSAO AREA DE ATUACAO */}
        <div class="container">
          <div class="sessao-sobre">
            {this.state.sobreEmpresa.length === 0 ?
              <div>Carregando</div>
              :
              <p>{this.state.sobreEmpresa.fields.sobreEmpresa}</p>
            }
          </div>
        </div>

        <div class="container">
          <div class="conteudo-sobre">
            {this.state.textoSobre.length === 0 ?
              <div>Carregando</div>
              :
              <p>{this.state.textoSobre.fields.textoSobre}</p>
            }
          </div>
        </div>

        <div class="container">
          <div class="sessao-equipe">
            {this.state.tituloEquipe.length === 0 ?
              <div>Carregando</div>
              :
              <p>{this.state.tituloEquipe.fields.tituloEquipe}</p>
            }
          </div>
        </div>
        <div class="container">
          <div class="row">

            <div class="card col-md-10 p-3">
              <div class="row ">
                <div class="col-md-8">
                  <div class="card-block">
                    <p class="card-text text-justify">
                      {this.state.depoimentoEquipe1.length === 0 ?
                        <div>Carregando</div>
                        :
                        <p><b>"</b>{this.state.depoimentoEquipe1.fields.depoimentoEquipe1}<b>"</b></p>
                      }
                      
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <img class="w-100" src="https://via.placeholder.com/335x446" alt="IMG Dep 1" />
                </div>
              </div>
              <div class="card-nome">
                {this.state.nomeDepoimento1.length === 0 ?
                  <div>Carregando</div>
                  :
                  <h5>{this.state.nomeDepoimento1.fields.nomeDepoimento1}</h5>
                }
              </div>
            </div>
            <div class="card col-md-10 p-3">
              <div class="row ">
                <div class="col-md-4">
                  <img class="w-100" src="https://via.placeholder.com/335x446" alt="IMG Dep 2" />
                </div>
                <div class="col-md-8">
                  <div class="card-block">
                    <p class="card-text text-justify">
                      
                        {this.state.depoimentoEquipe2.length === 0 ?
                          <div>Carregando</div>
                          :
                          <p><b>"</b>{this.state.depoimentoEquipe2.fields.depoimentoEquipe2}<b>"</b></p>
                        }
                      </p>
                  </div>
                </div>
              </div>
              <div class="card-nome-left">
                {this.state.nomeDepoimento2.length === 0 ?
                  <div>Carregando</div>
                  :
                  <h5>{this.state.nomeDepoimento2.fields.nomeEquipe2}</h5>
                }
              </div>
            </div>

            <div class="card col-md-10 p-3">
              <div class="row ">
                <div class="col-md-8">
                  <div class="card-block">
                    <p class="card-text text-justify">
                      {this.state.depoimentoEquipe3.length === 0 ?
                        <div>Carregando</div>
                        :
                        <p><b>"</b>{this.state.depoimentoEquipe3.fields.depoimentoEquipe3}<b>"</b></p>
                      }  
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <img class="w-100" src="https://via.placeholder.com/335x446" alt="IMG Dep 3" />
                </div>
              </div>
              <div class="card-nome">
                {this.state.nomeDepoimento3.length === 0 ?
                  <div>Carregando</div>
                  :
                  <h5>{this.state.nomeDepoimento3.fields.nomeDepoimento3}</h5>
                }
              </div>
            </div>

          </div>
        </div>

        <section class="background-sobre">
          <div class="container">
            <div class="row">
              <div class="img-hunt">
                <img src="arquivos-layout/images/foto-hunt.png" alt="IMG Hunt" />
              </div>
              <div class="div-informacoes">
                <div class="matriz-div">
                  <div class="matriz">
                    {this.state.tituloMatriz.length === 0 ?
                      <div>Carregando</div>
                      :
                      <h5>{this.state.tituloMatriz.fields.tituloMatriz}</h5>
                    }
                  </div>
                </div>
                <br /><br /><br /><br />
                <div class="endereco">
                  <i class="fa fa-map-marker" aria-hidden="true" />
                    {this.state.enderecoMatriz.length === 0 ?
                      <div>Carregando</div>
                      :
                      <h5>{this.state.enderecoMatriz.fields.enderecoMatriz}</h5>
                    }
                </div>
                <div class="contato">
                  <i class="fa fa-phone fa-2x" aria-hidden="true" />
                    {this.state.telefoneMatriz.length === 0 ?
                      <div>Carregando</div>
                      :
                      <h5>{this.state.telefoneMatriz.fields.telefoneMatriz}</h5>
                    }
                </div>
                <div class="email">
                  <i class="fa fa-envelope fa-2x" aria-hidden="true" />
                  {this.state.emailMatriz.length === 0 ?
                    <div>Carregando</div>
                    :
                    <h5>{this.state.emailMatriz.fields.emailMatriz}</h5>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    );
  }
}


export default About
