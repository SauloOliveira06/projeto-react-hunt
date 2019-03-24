import React, { Component } from 'react';

import './App.css'
import './Terceirizacao_temporarios.css'
import client from './Components/Client';

let img = 'arquivos-layout/images/about_plan.jpg'
var banner = {
    background: `url(${img}) round`
}

let img1 = 'arquivos-layout/images/back-cafe.jpg'
var ebook = {
    background: `url(${img1}) round`
}


class Terceirizacao_temporarios extends Component {
    constructor() {
        super()
        this.state = {
            titulo_banner: [],
            frase: [],
            titulo_servicos: [],
            titulo_conteudo1: [],
            texto_conteudo1: [],
            titulo_conteudo2: [],
            texto_conteudo2: [],
            titulo_card1: [],
            titulo_card2: [],
            titulo_card3: [],
            titulo_card4: [],
            titulo_card5: [],
            titulo_card6: [],
            titulo_card7: [],
            texto_ebook: []
        }
    }
    componentDidMount() {
        client.getEntries({
            'content_type': 'terceirizacaoTemporarios'
        }).then((entries) => {
            this.setState({ titulo_banner: entries.items[0] })
            this.setState({ frase: entries.items[0] })
            this.setState({ titulo_conteudo1: entries.items[0] })
            this.setState({ texto_conteudo1: entries.items[0] })
            this.setState({ titulo_conteudo2: entries.items[0] })
            this.setState({ texto_conteudo2: entries.items[0] })
            this.setState({ titulo_servicos: entries.items[0] })
            this.setState({ titulo_card1: entries.items[0] })
            this.setState({ titulo_card2: entries.items[0] })
            this.setState({ titulo_card3: entries.items[0] })
            this.setState({ titulo_card4: entries.items[0] })
            this.setState({ titulo_card5: entries.items[0] })
            this.setState({ titulo_card6: entries.items[0] })
            this.setState({ titulo_card7: entries.items[0] })
            this.setState({ texto_ebook: entries.items[0] })
        })
    }
    render() {
        return (
            <div>
                <div class="banner-terceirizacao" style={banner}>
                    <div class="container col-md-9">
                        <div class="texto-banner">
                            {this.state.titulo_banner.length === 0 ?
                                <div>Carregando</div>
                                :
                                <p>{this.state.titulo_banner.fields.tituloBanner}</p>
                            }
                        </div>
                    </div>
                </div>


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



                <div class="container col-md-12 col-xs-4 col-sm-12">

                    <div class="titulo-content">
                        {this.state.titulo_conteudo1.length === 0 ?
                            <div>Carregando</div>
                            :
                            <p>{this.state.titulo_conteudo1.fields.tituloConteudo1}</p>
                        }
                    </div>
                    <div class="titulo-conteudo">
                        {this.state.texto_conteudo1.length === 0 ?
                            <div>Carregando</div>
                            :
                            <p>{this.state.texto_conteudo1.fields.textoConteudo1}</p>
                        }
                    </div>

                    <div class="titulo-content1">
                        {this.state.titulo_conteudo2.length === 0 ?
                            <div>Carregando</div>
                            :
                            <p>{this.state.titulo_conteudo2.fields.tituloConteudo2}</p>
                        }
                    </div>
                    <div class="titulo-conteudo1">
                        {this.state.texto_conteudo2.length === 0 ?
                            <div>Carregando</div>
                            :
                            <ul><li>{this.state.texto_conteudo2.fields.textoConteudo2.length}</li></ul>
                        }
                    </div>
                </div>


                <div class="container col-md-12 col-xs-4 col-sm-12">
                    <div class="sessao-servicos">
                        {this.state.titulo_servicos.length === 0 ?
                            <div>Carregando</div>
                            :
                            <p>{this.state.titulo_servicos.fields.tituloServicos}</p>
                        }
                    </div>
                </div>

                <div class="container card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone7.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">
                                        {this.state.titulo_card1.length === 0 ?
                                            <div>Carregando</div>
                                            :
                                            <p>{this.state.titulo_card1.fields.tituloCard1}</p>
                                        }
                                    </div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone8.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">
                                        {this.state.titulo_card2.length === 0 ?
                                            <div>Carregando</div>
                                            :
                                            <p>{this.state.titulo_card2.fields.tituloCard2}</p>
                                        }
                                    </div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone9.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">
                                        {this.state.titulo_card3.length === 0 ?
                                            <div>Carregando</div>
                                            :
                                            <p>{this.state.titulo_card3.fields.tituloCard3}</p>
                                        }
                                    </div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone-at.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">
                                        {this.state.titulo_card4.length === 0 ?
                                            <div>Carregando</div>
                                            :
                                            <p>{this.state.titulo_card4.fields.tituloCard4}</p>
                                        }
                                    </div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container card-body2">
                    <div class="row">
                        <div class="col-md-4 col-sm-4">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone10.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">
                                        {this.state.titulo_card5.length === 0 ?
                                            <div>Carregando</div>
                                            :
                                            <p>{this.state.titulo_card5.fields.tituloCard5}</p>
                                        }
                                    </div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone11.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">
                                        {this.state.titulo_card6.length === 0 ?
                                            <div>Carregando</div>
                                            :
                                            <p>{this.state.titulo_card6.fields.tituloCard6}</p>
                                        }
                                    </div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone12.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">
                                        {this.state.titulo_card7.length === 0 ?
                                            <div>Carregando</div>
                                            :
                                            <p>{this.state.titulo_card7.fields.tituloCard7}</p>
                                        }
                                    </div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container container-btn-servicos">
                    <div class="btn-contrate-servicos">
                        <a href="#" data-toggle="modal" data-target="#modalContactForm">Contrate Nossos Serviços</a>
                    </div>
                </div>

                <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header text-center">
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


                <div class="flex-container ebook-background" style={ebook}>
                    <div class="container col-md-9">
                        <div class="flex-conteudo-ebook">
                            {this.state.texto_ebook.length === 0 ?
                                <div>Carregando</div>
                                :
                                <p>{this.state.texto_ebook.fields.ebook}</p>
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
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times" aria-hidden="true"></i></span></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <form action="#">
                                        <div class="form-group col-md-12">
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
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
export default Terceirizacao_temporarios;