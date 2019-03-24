import React, { Component } from 'react';
import './App.css'
import './Educacao_corporativa.css'

import client from './Components/Client';

let img = 'arquivos-layout/images/cursos.jpg'
var banner = {
    background: `url(${img}) repeat`
}


class Educacao_corporativa extends Component {
    constructor() {
        super()
        this.state = {
            titulo_banner: [], frase: [], titulo_portfolio: [], texto_portfolio: [],
            titulo_treinamentos: [], texto_treinamento: [], titulo_ambiente: [],
            texto_ambiente: [], titulo_servicos: [], titulo_card1: [], titulo_card2: [],
            titulo_card3: [], titulo_card4: [], titulo_card5: [], titulo_card6: [],
            titulo_cursos: [], titulo_depoimentos: [], depoimentos1: [], nome_depoimento1: [],
            depoimentos2: [], nome_depoimento3: [], depoimentos3: [], nome_depoimento3: [],
            depoimentos4: [], nome_depoimento4: [], texto_ebook: []
        }
    }
    componentDidMount() {
        client.getEntries({
            'content_type': 'educacaoCorporativa'
        }).then((entries) => {
            this.setState({
                titulo_banner: entries.items[0], frase: entries.items[0], 
                titulo_portfolio: entries.items[0],
                texto_portfolio: entries.items[0],
                titulo_treinamentos: entries.items[0], texto_treinamento: entries.items[0],
                titulo_ambiente: entries.items[0], texto_ambiente: entries.items[0],
                titulo_servicos: entries.items[0], titulo_card1: entries.items[0],
                titulo_card2: entries.items[0], titulo_card3: entries.items[0],
                titulo_card4: entries.items[0], titulo_card5: entries.items[0],
                titulo_card6: entries.items[0], texto_ebook: entries.items[0],
                titulo_cursos: entries.items[0], titulo_depoimentos: entries.items[0],
                depoimentos1: entries.items[0], depoimentos2: entries.items[0],
                depoimentos3: entries.items[0], depoimentos4: entries.items[0],
                nome_depoimento1: entries.items[0], nome_depoimento2: entries.items[0],
                nome_depoimento3: entries.items[0], nome_depoimento4: entries.items[0],
                texto_ebook: entries.items[0]
            })
            /*
            this.setState({ frase: entries.items[0] })
            this.setState({ titulo_recrutamento: entries.items[0] })
            this.setState({ texto_recrutamento: entries.items[0] })
            this.setState({ titulo_servicos: entries.items[0] })
            this.setState({ titulo_card1: entries.items[0] })
            this.setState({ titulo_card2: entries.items[0] })
            this.setState({ titulo_card3: entries.items[0] })
            this.setState({ titulo_card4: entries.items[0] })
            this.setState({ titulo_card5: entries.items[0] })
            this.setState({ titulo_card6: entries.items[0] })
            this.setState({ titulo_card7: entries.items[0] })
            this.setState({ titulo_card8: entries.items[0] })
            this.setState({ texto_ebook: entries.items[0] }) */
        })
    }
    render() {
        return (
            <div>
                <div class="banner-edu-corporativa" style={banner}>
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

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="titulo-corporativo1">
                                {this.state.titulo_portfolio.length === 0 ?
                                    <div>Carregando</div>
                                    :
                                    <p>{this.state.titulo_portfolio.fields.tituloPortfolio}</p>
                                }
                            </div>
                            <div class="conteudo-corporativo1">
                                {this.state.texto_portfolio.length === 0 ?
                                    <div>Carregando</div>
                                    :
                                    <p>{this.state.texto_portfolio.fields.textoPortfolio}</p>
                                }
                            </div>
                            <div class="titulo-corporativo2">
                                Palestras, Worksshops e Cursos In Company
                            </div>
                            <div class="conteudo-corporativo2">
                                <p>A partir de demandas, problemas identificados ou diagnósticos de desenvolvimento, implementamos treinamentos personalizados ao cliente para alavancar eficiência.</p>
                            </div>
                            <div class="titulo-corporativo3">
                                Locação de ambientes corporativos
                            </div>
                            <div class="conteudo-corporativo3">
                                <p>Ambiente completo e versátil para reuniões e apresentações corporativas, cursos e palestras fechadas para a sua empresa, com climatização, equipamento de sonorização e imagem, serviços de copa e suporte ao longo do evento.</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sessao-atuacao">
                                Área de Atuação
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone21.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">Conservação e limpeza</div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone22.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">Produção</div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone23.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">Logística</div>
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
                        <div class="col-md-4">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone24.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">Atendimento</div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone25.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">Facilities</div>
                                    <div class="text-conteudo">
                                        <p>• Deﬁnir metas e objetivos;</p>
                                        <p>• Deﬁnir projetos de suporte ao plano;</p>
                                        <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                                        <p>• Deﬁnir indicadores de desempenho.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="container-card">
                                <img src="arquivos-layout/images/icone26.svg" alt="Icone" class="image" />
                                <div class="overlay">
                                    <div class="titulo">Telemarketing</div>
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
                                <button type="button" class="btn btn-primary">ENVIAR</button>
                            </div>
                        </div>
                    </div>
                </div>





                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sessao-cursos">
                                Nossos cursos
                </div>
                        </div>
                    </div>
                </div>

                <div class="container container-cursos">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="img-cursos-card">
                                    <img src="arquivos-layout/images/cursos.jpg" alt="Card image cap" />
                                </div>
                                <div class="card-cursos">
                                    <h5 class="card-title">Liderança e Gestão</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="img-cursos-card">
                                    <img src="arquivos-layout/images/cursos.jpg" alt="Card image cap" />
                                </div>
                                <div class="card-cursos">
                                    <h5 class="card-title">Liderança e Gestão</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="img-cursos-card">
                                    <img src="arquivos-layout/images/cursos.jpg" alt="Card image cap" />
                                </div>
                                <div class="card-cursos">
                                    <h5 class="card-title">Liderança e Gestão</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="img-cursos-card">
                                    <img src="arquivos-layout/images/cursos.jpg" alt="Card image cap" />
                                </div>
                                <div class="card-cursos">
                                    <h5 class="card-title">Liderança e Gestão</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="sessao-depoimentos col-lg-12 col-md-6 col-xs-12">
                        Depoimentos
            </div>
                </div>

                <section id="sessao-comentarios">
                    <div class="container container-comentarios1">
                        <div class="row">
                            <div class="card-comentario1 col-md-6 col-xs-8">
                                <div class="bloco-foto">
                                    <img src="arquivos-layout/images/testimonial-1.jpg" />
                                </div>
                                <div class="bloco-comentario">
                                    &quot;O curso de Recursos Humanos me ajudou a ter uma visão mais profunda dos diversos perfis que uma empresa solicita.&quot;
                    <figcaption><b>Joaquim Brilhante, Aluno do curso de RH</b></figcaption>
                                </div>
                            </div>

                            <div class="card-comentario2 col-md-6 col-xs-8">
                                <div class="bloco-foto">
                                    <img src="arquivos-layout/images/testimonial-2.jpg" />
                                </div>
                                <div class="bloco-comentario">
                                    &quot;O curso de Recursos Humanos me ajudou a ter uma visão mais profunda dos diversos perfis que uma empresa solicita.&quot;
                    <figcaption><b>Paula Ribeiro, Aluna do curso de RH</b></figcaption>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container container-comentarios2">
                        <div class="row">
                            <div class="card-comentario3 col-md-6 col-xs-8">
                                <div class="bloco-foto">
                                    <img src="arquivos-layout/images/testimonial-3.jpg" />
                                </div>
                                <div class="bloco-comentario">
                                    &quot;O curso de Recursos Humanos me ajudou a ter uma visão mais profunda dos diversos perfis que uma empresa solicita.&quot;
                    <figcaption><b>Joaquim Brilhante, Aluno do curso de RH</b></figcaption>
                                </div>
                            </div>

                            <div class="card-comentario4 col-md-6 col-xs-8">
                                <div class="bloco-foto">
                                    <img src="arquivos-layout/images/testimonial-4.jpg" />
                                </div>
                                <div class="bloco-comentario">
                                    &quot;O curso de Recursos Humanos me ajudou a ter uma visão mais profunda dos diversos perfis que uma empresa solicita.&quot;
                    <figcaption><b>Paula Ribeiro, Aluna do curso de RH</b></figcaption>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Educacao_corporativa;