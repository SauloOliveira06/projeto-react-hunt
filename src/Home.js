import React, { Component } from 'react'
import client from './Components/Client';
import { Link } from 'react-router-dom'

/* COMPONENTES GENERICOS */
import Slide from './Components/Slide'

import './Home.css'
import './App.css'

/* IMAGEM DE FUNDO DOS CARDVIEWS DA SESSAO SERVICOS */
let cardImg1 = 'arquivos-layout/images/banner-consultoria.jpg'
var card1 = {
  background: `url(${cardImg1}) round`
}

let cardImg2 = 'arquivos-layout/images/meetup.png'
var card2 = {
  background: `url(${cardImg2}) round`
}

let cardImg3 = 'arquivos-layout/images/cumprimento.jpg'
var card3 = {
  background: `url(${cardImg3}) round`
}

let cardImg4 = 'arquivos-layout/images/cursos.jpg'
var card4 = {
  background: `url(${cardImg4}) round`
}

/* IMAGEM DE FUNDO DA SESSAO EBOOK */
let img = 'arquivos-layout/images/back-cafe.jpg'
var ebookBackground = {
  background: `url(${img}) center top no-repeat`
}

class Home extends Component {

  constructor() {
    super()
    this.state = {
      /* SESSAO FRASE */
      frase: [],
      /* SESSAO SEGUIMENTOS */
      tituloSeguimentos: [],
      tituloCard1: [], tituloCard2: [],
      tituloCard3: [], tituloCard4: [],
      imagemCard1: [],
      /* SESSAO VAGAS */
      tituloVaga: [],
      /* SESSAO CONTADOR */
      contador1: [], contador2: [],
      contador3: [], contador4: [],
      contador5: [],
      /* SESSAO DEPOIMENTOS */
      tituloDepoimentos: [],
      comentarioDepoimento1: [], comentarioDepoimento2: [],
      comentarioDepoimento3: [], comentarioDepoimento4: [],
      nomeComentario1: [], nomeComentario2: [],
      nomeComentario3: [], nomeComentario4: [],
      /* SESSAO EBOOK */
      textoEbook: [],
      /* FOOTER */
      tituloEndereco: [], textoEndereco: [],
      tituloSociais: [], tituloDowloads: [],
      /* RODAPE COPYRIGHT */
      textoCopyright: [],
    }
  }

  componentDidMount() {
    client.getEntries({
      'content_type': 'home'
    }).then((entries) => {
      this.setState({
        frase: entries.items[0],
        tituloSeguimentos: entries.items[0],
        tituloCard1: entries.items[0],
        tituloCard2: entries.items[0],
        tituloCard3: entries.items[0],
        tituloCard4: entries.items[0],
        imagemCard1: entries.items,
        tituloVaga: entries.items[0],
        contador1: entries.items[0], contador2: entries.items[0],
        contador3: entries.items[0], contador4: entries.items[0], contador5: entries.items[0],
        tituloDepoimentos: entries.items[0], comentarioDepoimento1: entries.items[0],
        comentarioDepoimento2: entries.items[0], comentarioDepoimento3: entries.items[0],
        comentarioDepoimento4: entries.items[0], nomeComentario1: entries.items[0],
        nomeComentario2: entries.items[0], nomeComentario3: entries.items[0],
        nomeComentario4: entries.items[0], textoEbook: entries.items[0],
        tituloEndereco: entries.items[0], textoEndereco: entries.items[0],
        tituloSociais: entries.items[0], tituloDowloads: entries.items[0]
      })
    })
  }

  render() {
    return (
      <div>

        <Slide />

        <section>
          <div class="container-frase-home">
            <div class="conteudo-frase">
              <div class="col-md-12 col-xs-12 col-sm-12">
                {this.state.frase.length === 0 ?
                  <div>Carregando</div>
                  :
                  <p>{this.state.frase.fields.frase}</p>
                }
              </div>
            </div>
          </div>
        </section>

        {/* SESSAO SERVICOS */}
        <div class="container">
          <div class="titulo-seguimentos">
            <div class="col-md-6 col-lg-6 col-xs-6 col-sm-12">
              {this.state.tituloSeguimentos.length === 0 ?
                <div>Carregando</div>
                :
                <p>{this.state.tituloSeguimentos.fields.tituloSeguimentos}</p>
              }
            </div>
          </div>
        </div>

        {/* CARD VIEWS */}
        <section id="sessao-cards-home">
          <div class="container">
            <div class="container-cards1">
              <div class="col-md-5 col-xs-12">
                <div class="card1" style={card1}>  
                  <Link to="consultoria-empresarial">
                    <div class="titulo1">
                      {this.state.tituloCard1.length === 0 ?
                        <div>Carregando</div>
                        :
                        <p>{this.state.tituloCard1.fields.tituloCard1}</p>
                      }
                    </div>
                    <ul>
                      <li>• Planejamento estratégico;</li>
                      <li>• Governança corporativa;</li>
                      <li>• Processos;</li>
                      <li>• Pessoas;</li>
                      <li>• Tecnologia;</li>
                      <li>• Redução de custos;</li>
                      <li>• Endomarketing.</li>
                      <img src="arquivos-layout/images/simbolo1.svg" alt="Imagem Simb 1" />
                    </ul>
                  </Link>
                </div>
              </div>
              
                
              
              <div class="col-md-5 col-xs-12">
                <div class="card2" style={card2}>
                  <Link to="terceirizacao-temporarios">
                    <div class="titulo2">
                      {this.state.tituloCard2.length === 0 ?
                        <div>Carregando</div>
                        :
                        <p>{this.state.tituloCard2.fields.tituloCard2}</p>
                      }
                    </div>
                    <ul>
                      <li>• Fornecimento de mão de obra temporária;</li>
                      <li>• Soluções na terceirização de serviços nas áreas: de Suporte ou Produtivas.</li>
                      <img src="arquivos-layout/images/simbolo2.svg" alt="Imagem Simb 2" />
                    </ul>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="container-cards2">
              <div class="col-md-5 col-xs-12">
                <div class="card3" style={card3}>
                  <Link to="consultoria-rh">
                    <div class="titulo3">
                      {this.state.tituloCard3.length === 0 ?
                        <div>Carregando</div>
                        :
                        <p>{this.state.tituloCard3.fields.tituloCard3}</p>
                      }
                    </div>
                    <ul>
                      <li>• Recrutamento e Seleção;</li>
                      <li>• Projetos de RH;</li>
                      <li>• Coaching;</li>
                      <li>• Mentoring;</li>
                      <li>• Testes Psicológicos;</li>
                      <li>• DISC;</li>
                      <li>• Recolocação.</li>
                      <img src="arquivos-layout/images/simbolo3.svg" alt="Imagem Simb 3" />
                    </ul>
                  </Link>
                </div>
              </div>
              <div class="col-md-5 col-xs-12">
                <div class="card4" style={card4}>
                  <Link to="educacao-corporativa">
                    <div class="titulo4">
                      {this.state.tituloCard4.length === 0 ?
                        <div>Carregando</div>
                        :
                        <p>{this.state.tituloCard4.fields.tituloCard4}</p>
                      }
                    </div>
                    <ul>
                      <li>• Palestra Solidárias;</li>
                      <li>• Workshops Temáticos;</li>
                      <li>• Cursos bertos;</li>
                      <li>• Cursos In company;</li>
                      <li>• Academia de Liderança e Equipes;</li>
                      <li>• Locação de Ambiente para Eventos.</li>
                      <img src="arquivos-layout/images/simbolo4.svg" alt="Imagem Simb 4" />
                    </ul>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTAO E MODAL DOS SERVICOS PARA CONTRATAR */}
        <div class="div-btn-servicos">
          <a href="#" class="btn-servicos" data-toggle="modal" data-target="#modalContactForm">
            Contrate Nossos Serviços
          </a>
        </div>

        <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class=".modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Consulte-nos</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"><i class="fa fa-times" aria-hidden="true"></i></span>
                </button>
              </div>
              <div class="modal-body mx-3">
                <div class="md-form mb-5">
                  <label data-error="wrong" data-success="right" for="form34" id="nome-modal">Seu nome</label>
                  <input type="text" id="form34" class="form-control validate" />
                </div>

                <div class="md-form mb-5">
                  <label data-error="wrong" data-success="right" for="form29" id="email-modal">Seu e-mail</label>
                  <input type="email" id="form29" class="form-control validate" />
                </div>

                <div class="md-form">
                  <label data-error="wrong" data-success="right" for="form8" id="mensagem-modal">Sua Mensagem</label>
                  <textarea type="text" id="form8" class="md-textarea form-control" rows="4"></textarea>
                </div>
              </div>

              <div class="modal-footer d-flex justify-content-center">
                <button type="button" class="btn btn-primary">ENVIAR &nbsp;</button>
              </div>
            </div>
          </div>
        </div>

        {/* SESSAO VAGAS */}
        <div class="container">
          <div class="sessao-vagas col-md-6 col-lg-6 col-xs-6 col-sm-12">
            {this.state.tituloVaga.length === 0 ?
              <div>Carregando</div>
              :
              <p>{this.state.tituloVaga.fields.tituloVaga}</p>
            }
          </div>
        </div>

        <section id="sessao-vagas">
          <div class="container">
            <div class="container-vagas">
              <div><img id="vaga-1" src="arquivos-layout/images/vagas.png" alt="IMG Vaga1" /></div>
              <div><img id="vaga-2" src="arquivos-layout/images/vagas.png" alt="IMG Vaga2" /></div>
            </div>
          </div>

          <div class="container">
            <div class="container-vagas2">
              <div><img id="vaga-3" src="arquivos-layout/images/vagas.png" alt="IMG Vaga3" /></div>
              <div><img id="vaga-4" src="arquivos-layout/images/vagas.png" alt="IMG Vaga4" /></div>
            </div>
          </div>
        </section>

        {/* SESSAO CONTADOR */}
        <section id="facts" class="wow fadeIn">
          <div class="container">
            <div class="row counters">
              <div class="col-md-2 text-center">
                <span data-toggle="counter-up">
                  {this.state.contador1.length === 0 ?
                    <div>Carregando</div>
                    :
                    <span>+{this.state.contador1.fields.contador1}</span>
                  }</span>
                <p>Empresas atendidas</p>
              </div>

              <div class="col-md-2 text-center">
                <span data-toggle="counter-up">
                  {this.state.contador2.length === 0 ?
                    <div>Carregando</div>
                    :
                    <span>+{this.state.contador2.fields.contador2}</span>
                  }</span>
                <p>Recolocações</p>
              </div>

              <div class="col-md-2 text-center">
                <span data-toggle="counter-up">
                  {this.state.contador3.length === 0 ?
                    <div>Carregando</div>
                    :
                    <span>+{this.state.contador3.fields.contador3}</span>
                  }</span>
                <p>Temporários</p>
              </div>

              <div class="col-md-2 text-center">
                <span data-toggle="counter-up">
                  {this.state.contador4.length === 0 ?
                    <div>Carregando</div>
                    :
                    <span>+{this.state.contador4.fields.contador4}</span>
                  }</span>
                <p>Banco de Candidatos</p>
              </div>

              <div class="col-md-2 text-center">
                <span data-toggle="counter-up">
                  {this.state.contador5.length === 0 ?
                    <div>Carregando</div>
                    :
                    <span>{this.state.contador5.fields.contador5}</span>
                  }</span>
                <p>Projeto de Redução de Custos</p>
              </div>
            </div>

            <div class="facts-img">
              <img src="img/facts-img.png" alt="" class="img-fluid" />
            </div>

          </div>
        </section>

        {/* SESSAO DEPOIMENTOS */}
        <div class="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="sessao-depoimentos">
                {this.state.tituloDepoimentos.length === 0 ?
                  <div>Carregando</div>
                  :
                  <p>{this.state.tituloDepoimentos.fields.tituloDepoimentos}</p>
                }
              </div>
            </div>
          </div>
        </div>

        <section className="sessao-comentarios">
          <div className="container container-comentarios1">
            <div className="row">
              <div className="card-comentario1 col-md-6 col-xs-8">
                <div className="bloco-foto">
                  <img src="arquivos-layout/images/testimonial-1.jpg" alt="." />
                </div>
                <div class="bloco-comentario">
                  {this.state.comentarioDepoimento1.length === 0 ?
                    <div>Carregando</div>
                    :
                    <p>{this.state.comentarioDepoimento1.fields.comentarioDepoimento1}</p>
                  }
                  <figcaption>{this.state.nomeComentario1.length === 0 ?
                    <div>Carregando</div>
                    :
                    <b>{this.state.nomeComentario1.fields.nomeComentario1}</b>
                  }</figcaption>
                </div>
              </div>

              <div class="card-comentario2 col-md-6 col-xs-8">
                <div class="bloco-foto">
                  <img src="arquivos-layout/images/testimonial-2.jpg" alt="." />
                </div>
                <div class="bloco-comentario">
                  {this.state.comentarioDepoimento2.length === 0 ?
                    <div>Carregando</div>
                    :
                    <p>{this.state.comentarioDepoimento2.fields.comentarioDepoimento2}</p>
                  }
                  <figcaption>{this.state.nomeComentario2.length === 0 ?
                    <div>Carregando</div>
                    :
                    <b>{this.state.nomeComentario2.fields.nomeComentario2}</b>
                  }</figcaption>
                </div>
              </div>
            </div>
          </div>
          <div class="container container-comentarios2">
            <div class="row">
              <div class="card-comentario3 col-md-6 col-xs-8">
                <div class="bloco-foto">
                  <img src="arquivos-layout/images/testimonial-3.jpg" alt="." />
                </div>
                <div class="bloco-comentario">
                  {this.state.comentarioDepoimento3.length === 0 ?
                    <div>Carregando</div>
                    :
                    <p>{this.state.comentarioDepoimento3.fields.comentarioDepoimento3}</p>
                  }
                  <figcaption>{this.state.nomeComentario3.length === 0 ?
                      <div>Carregando</div>
                      :
                      <b>{this.state.nomeComentario3.fields.nomeComentario3}</b>
                  }</figcaption>
                </div>
              </div>

              <div class="card-comentario4 col-md-6 col-xs-8">
                <div class="bloco-foto">
                  <img src="arquivos-layout/images/testimonial-4.jpg" alt="." />
                </div>
                <div class="bloco-comentario">
                  {this.state.comentarioDepoimento4.length === 0 ?
                      <div>Carregando</div>
                      :
                      <p>{this.state.comentarioDepoimento4.fields.comentarioDepoimento4}</p>
                  }
                  <figcaption>{this.state.nomeComentario4.length === 0 ?
                      <div>Carregando</div>
                      :
                      <b>{this.state.nomeComentario4.fields.nomeComentario4}</b>
                  }</figcaption>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="flex-container ebook-background" style={ebookBackground}>
          <div class="container col-md-9">
            <div class="flex-conteudo-ebook">
              {this.state.textoEbook.length === 0 ?
                <div>Carregando</div>
                :
                <p>{this.state.textoEbook.fields.textoEbook}</p>
              }
              <a class="botao-baixar-ebook" href="#" data-toggle="modal" data-target="#myModal">Baixar Ebook</a>
            </div>
          </div>
        </div>

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog modal-smll" role="document">
            <div class="modal-content">
              <div class="modal-header bg-primary text-center">
                <h2 class="modal-title" id="myModalLabel">Cadastre seu e-mail e receba nosso material.</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times time" aria-hidden="true"></i></span></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <form action="#">
                    <div class="form-group col-md-12">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <input type="email" class="form-control input-lg" size="50" placeholder="Seu e-mail" />
                      </div>
                    </div>
                    <div class="form-group col-md-12">
                      <input type="submit" class="btn btn-primary btn-lg btn-block" value="INSCREVER-SE" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home 