import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css'
import client from './Components/Client';
import './Consultoria_rh.css'

let img = 'arquivos-layout/images/cumprimento.jpg'
var banner  = {
    background: `url(${img}) round`
}


let img1 = 'arquivos-layout/images/back-cafe.jpg'
var ebook  = {
    background: `url(${img1}) round`
}





class Consultoria_rh extends Component {
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
                Consultoria de RH
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


            <div class="container">
                <div class="sessao-recrutamento">
                    <p>Recrutamento e Seleção | Executive</p>
                </div>
            </div>

            <div class="container">
                <div class="infografo-img">
                    <img src="arquivos-layout/images/infografo.png"/>
                </div>
            </div>

            <div class="container">
                <div class="conteudo-recrutamento">
                    <ul>
                    <li>• Sigilo e confiança na busca dos candidatos ideais para a vaga;</li>
                    <li>• Uso das mais modernas ferramentas para recrutamento e análise do candidato;</li>
                    <li>• Aplicação de provas de conhecimentos gerais e específicos;</li>
                    <li>• Seleção de candidatos qualificados para diminuir o tempo de adaptação na empresa;</li>
                    <li>• Banco de profissionais e currículos em constante atualização;</li>
                    <li>• Feedback constante aos envolvidos no processo;</li>
                    <li>• Espaço físico próprio e bem localizado em Manaus e Belém.</li>
                    </ul>
                </div>
            </div>

            <div class="container col-md-12">
            <div class="sessao-servicos">
                Serviços
            </div>
            </div>

            <div class="container card-body">
            <div class="row">
            <div class="col-md-3">
                <div class="container-card">
                    <img src="arquivos-layout/images/icone13.svg" alt="Icone" class="image"/>
                    <div class="overlay">
                    <div class="titulo" id="pesquisa">Pesquisa de Clima Org.</div>
                    <div class="text-conteudo">
                        <p>• Analisar o ambiente interno;</p>
                    <p>• Pesquisar a satisfação dos funcionários;</p>
                    <p>• Identificar melhorias;</p>
                    <p>• Coletar informação para gestão.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="container-card">
                    <img src="arquivos-layout/images/icone14.svg" alt="Icone" class="image"/>
                    <div class="overlay">
                    <div class="titulo" id="plano">Plano de Cargos e Salários</div>
                    <div class="text-conteudo">
                        <p>• Analisar e descrever os cargos;</p>
                        <p>• Pesquisar níveis salariais;</p>
                        <p>• Elaborar estruturas salariais;</p>
                        <p>• Desenvolver política de cargos e salários.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="container-card">
                    <img src="arquivos-layout/images/icone15.svg" alt="Icone" class="image"/>
                    <div class="overlay">
                    <div class="titulo" id="avaliacao">Avaliação de desempenho</div>
                    <div class="text-conteudo">
                        <p>• Analisar resultado e comportamento;</p>
                        <p>• Identificar pontos fortes e a melhorar;</p>
                        <p>• Analisar a evolução profissional;</p>
                        <p>• Melhorar o desempenho de pessoas e equipes.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="container-card">
                    <img src="arquivos-layout/images/icone16.svg" alt="Icone" class="image"/>
                    <div class="overlay">
                    <div class="titulo">Assessment</div>
                    <div class="text-conteudo-asses">
                        <p>• Analisar o potencial de profissionais para sucessão;</p>
                    <p>• Diagnosticar o potencial de liderança para promoções;</p>
                    <p>• Apontar tendências de comportamento e performance;</p>
                    <p>• Levantar lacunas de desenvolvimento profissional.</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div class="container card-body">
            <div class="row">
            <div class="col-md-3">
                <div class="container-card">
                    <img src="arquivos-layout/images/icone17.svg" alt="Icone" class="image"/>
                    <div class="overlay">
                    <div class="titulo">Coaching Profissional</div>
                    <div class="text-conteudo-coach">
                        <p>• Expandir os potenciais para função atual ou promoções;</p>
                    <p>• Desenvolver competências em liderança;</p>
                    <p>• Alcançar metas e melhorar a performance;</p>
                    <p>• Acelerar e potencializar o alcance de resultados.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="container-card">
                    <img src="arquivos-layout/images/icone18.svg" alt="Icone" class="image"/>
                    <div class="overlay">
                    <div class="titulo">Mentoring em Gestão</div>
                    <div class="text-conteudo">
                        <p>• Desenvolver planos estratégicos;</p>
                    <p>• Estabelecer metas e objetivos;</p>
                    <p>• Aperfeiçoar a gestão de processos e equipes;</p>
                    <p>• Aplicar, acompanhar e avaliar indicadores.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="container-card">
                    <img src="arquivos-layout/images/icone19.svg" alt="Icone" class="image"/>
                    <div class="overlay">
                    <div class="titulo">Outplacement</div>
                    <div class="text-conteudo">
                        <p>• Avaliar o histórico profissional e comportamental;</p>
                        <p>• Simular entrevista com feedback;</p>
                        <p>• Mapear oportunidades no mercado;</p>
                        <p>• Agendar entrevistar de emprego.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="container-card">
                    <img src="arquivos-layout/images/icone20.svg" alt="Icone" class="image"/>
                    <div class="overlay">
                    <div class="titulo" id="diagnostico">Diagnóstico Comportamental</div>
                    <div class="text-conteudo-diag">
                        <p>• Suportar a seleção e desenvolvimento de profissionais;</p>
                        <p>• Mapear tendências comportamentais de gestão do staff;</p>
                        <p>• Identificar lacunas do perfil de gestores em relação aos seus cargos;</p>
                        <p>• Apresentar os laudos e planos de desenvolvimento da equipe.</p>
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
                <p>Leia nossos materiais <br/>sobre Consultoria de RH</p>
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
export default Consultoria_rh;