import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css'
import './Terceirizacao_temporarios.css'
import client from './Components/Client';


let img = 'arquivos-layout/images/about_plan.jpg'
var banner  = {
    background: `url(${img}) round`
}

let img1 = 'arquivos-layout/images/back-cafe.jpg'
var ebook  = {
    background: `url(${img1}) round`
}


class Terceirizacao_temporarios extends Component {
    constructor(){
        super()
        this.state = { frasepage: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'conteudoFrase'
        }).then( (entries) => {
            this.setState({frasepage: entries.items[0]})
        })
    }
    render() {
        return (
        <div>
            <Navbar />
            
            <div class="banner-terceirizacao" style={ banner }>
                <div class="container col-md-9">
                    <div class="texto-banner">
                        Terceirização e Temporários
                    </div>
                </div>
            </div>  


            <section>
            <div class="container-frase-home">
                    <div class="conteudo-frase">
                        <div class="col-md-12 col-xs-12 col-sm-12">
                        {this.state.frasepage.length === 0 ?
                            <div>Carregando</div>
                            :
                            <p>{this.state.frasepage.fields.conteudoFraseDesc}</p>
                        }
                        </div>
                    </div>
                </div>
            </section>



            <div class="container col-md-12 col-xs-4 col-sm-12">

            <div class="titulo-content">
                Mão de Obra Temporária
            </div>
            <div class="titulo-conteudo">
                <p>Contrate temporários por até nove meses para suprir o aumento de demanda.</p>  
            </div>

            <div class="titulo-content1">
                Benefícios
            </div>
            <div class="titulo-conteudo1">
                <p>
                • Redução de custos;<br/>
                • Recrutamento rápido e eficiente;<br/>
                • Segurança jurídica;<br/>
                • Sem oneração na folha de pagamento.<br/>
                </p>
            </div>

            </div>

            <div class="container col-md-12 col-xs-4 col-sm-12">
            <div class="sessao-servicos">
                Serviços
            </div>
            </div>

            <div class="container card-body">
                <div class="row">
                <div class="col-md-3">
                    <div class="container-card">
                    <img src="arquivos-layout/images/icone7.svg" alt="Icone" class="image"/>
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
                <div class="col-md-3">
                    <div class="container-card">
                    <img src="arquivos-layout/images/icone8.svg" alt="Icone" class="image"/>
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
                <div class="col-md-3">
                    <div class="container-card">
                    <img src="arquivos-layout/images/icone9.svg" alt="Icone" class="image"/>
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
                <div class="col-md-3">
                    <div class="container-card">
                    <img src="arquivos-layout/images/icone-at.svg" alt="Icone" class="image"/>
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
                </div>
            </div>
            <div class="container card-body2">
                <div class="row">
                <div class="col-md-4 col-sm-4">
                    <div class="container-card">
                    <img src="arquivos-layout/images/icone10.svg" alt="Icone" class="image"/>
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
                <div class="col-md-4 col-sm-4">
                    <div class="container-card">
                    <img src="arquivos-layout/images/icone11.svg" alt="Icone" class="image"/>
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
                <div class="col-md-4 col-sm-4">
                    <div class="container-card">
                    <img src="arquivos-layout/images/icone12.svg" alt="Icone" class="image"/>
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


            <div class="flex-container ebook-background" style={ ebook }>
            <div class="container col-md-9">
                <div class="flex-conteudo-ebook">
                <p>Leia nossos materiais <br/>sobre Terceirização de Temporários</p>
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
                            <input type="email" class="form-control input-lg" size="50" placeholder="Seu e-mail"/>
                        </div>
                        </div>
                        <div class="form-group col-md-12">
                        <input type="submit" class="btn btn-primary btn-lg btn-block" value="INSCREVER-SE"/>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>









            <Footer/>
        </div>
        );
    }
}
export default Terceirizacao_temporarios;