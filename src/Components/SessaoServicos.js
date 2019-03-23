import React, { Component } from 'react';
import client from './Client';

let cardImg1 = 'arquivos-layout/images/banner-consultoria.jpg'
var card1  = {
    background: `url(${cardImg1}) round`
}

let cardImg2 = 'arquivos-layout/images/meetup.png'
var card2  = {
    background: `url(${cardImg2}) round`
}

let cardImg3 = 'arquivos-layout/images/cumprimento.jpg'
var card3  = {
    background: `url(${cardImg3}) round`
}

let cardImg4 = 'arquivos-layout/images/cursos.jpg'
var card4  = {
    background: `url(${cardImg4}) round`
}
class SessaoServicos extends Component {
    
    constructor(){
        super()
        this.state = { 
            titulo_seguimentos: [],
            titulo_card1: [],
            titulo_card2: [],
            titulo_card3: [],
            titulo_card4: []
        }
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'tituloSeguimentos'
        }).then( (entries) => {
            this.setState({titulo_seguimentos: entries.items[0]})
            this.setState({titulo_card1: entries.items[0]})
            this.setState({titulo_card2: entries.items[0]})
            this.setState({titulo_card3: entries.items[0]})
            this.setState({titulo_card4: entries.items[0]})
        })
    }

    render(){
        return(
    <div>
        <div class="container">
            <div class="titulo-seguimentos">
                <div class="col-md-6 col-lg-6 col-xs-6 col-sm-12">
                    {this.state.titulo_seguimentos.length === 0 ?
                        <div>Carregando</div>
                        :
                        <p>{this.state.titulo_seguimentos.fields.tituloSeguimentos}</p>
                    }
                </div>
            </div>
        </div>

        <section id="sessao-cards-home">
            <div class="container">
                <div class="container-cards1">
                    <div class="col-md-5 col-xs-12">
                        <div class="card1" style={ card1 }>
                            <a href="consultoria-empresarial.html">
                                <div class="titulo1">
                                {this.state.titulo_card1.length === 0 ?
                                    <div>Carregando</div>
                                    :
                                    <p>{this.state.titulo_card1.fields.tituloCard1}</p>
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
                                    <img src="arquivos-layout/images/simbolo1.svg"/>
                                </ul>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-5 col-xs-12">
                        <div class="card2" style={ card2 }>
                            <a href="terceirizacao-temporarios.html">
                                <div class="titulo2">
                                {this.state.titulo_card2.length === 0 ?
                                    <div>Carregando</div>
                                    :
                                    <p>{this.state.titulo_card2.fields.tituloCard2}</p>
                                }
                                </div>  
                                <ul>
                                    <li>• Fornecimento de mão de obra temporária;</li>
                                    <li>• Soluções na terceirização de serviços nas áreas: de Suporte ou Produtivas.</li>
                                    <img src="arquivos-layout/images/simbolo2.svg"/>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="container">
                <div class="container-cards2">
                    <div class="col-md-5 col-xs-12">
                        <div class="card3" style={ card3 }>
                            <a href="consultoria-rh.html">
                                <div class="titulo3">
                                {this.state.titulo_card3.length === 0 ?
                                    <div>Carregando</div>
                                    :
                                    <p>{this.state.titulo_card3.fields.tituloCard3}</p>
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
                                    <img src="arquivos-layout/images/simbolo3.svg"/>
                                </ul>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-5 col-xs-12">
                        <div class="card4" style={ card4 }>
                            <a href="educacao-corporativa.html">
                                <div class="titulo4">
                                {this.state.titulo_card4.length === 0 ?
                                    <div>Carregando</div>
                                    :
                                    <p>{this.state.titulo_card4.fields.tituloCard4}</p>
                                }
                                </div>
                                <ul>
                                    <li>• Palestra Solidárias;</li>
                                    <li>• Workshops Temáticos;</li>
                                    <li>• Cursos bertos;</li>
                                    <li>• Cursos In company;</li>
                                    <li>• Academia de Liderança e Equipes;</li>
                                    <li>• Locação de Ambiente para Eventos.</li>
                                    <img src="arquivos-layout/images/simbolo4.svg"/>
                                </ul>
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
        </section>

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
                            <input type="text" id="form34" class="form-control validate"/>
                        </div>

                        <div class="md-form mb-5">
                            <label data-error="wrong" data-success="right" for="form29" id="email-modal">Seu e-mail</label>
                            <input type="email" id="form29" class="form-control validate"/>
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
</div>
        );
    }
}

export default SessaoServicos