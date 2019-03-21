import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css'
import './Consultoria_empresarial.css'



let img = 'arquivos-layout/images/banner-consultoria.jpg'
var banner  = {
    background: `url(${img}) round`
}


let ebookimg = 'arquivos-layout/images/back-cafe.jpg'
var ebook  = {
    background: `url(${ebookimg}) round`
}


class Consultoria_empresarial extends Component {

  constructor() {
    super()
    this.state = {
      names: []
    }
    this.removeName = this.removeName.bind(this)
    console.log('Constructor')
  }

  removeName(nameRemoved) {
    console.log(nameRemoved);
    this.setState((state) => ({
      names: state.names.filter(name => name !== nameRemoved)
    }))
  }

  

  render() {
    console.log('render')
    return (
      <div>
        <Navbar />

        <div class="banner-consultoria" style={ banner }>
          <div class="container col-md-9">
            <div class="texto-banner">
              Consultoria Empresarial
            </div>
          </div>
        </div>

        <section>
          <div class="container-frase-home">
            <div class="conteudo-frase">
              <div class="col-md-12 col-xs-12 col-sm-12">
                <p>A sua referência em capacitação proﬁssional, com facilitadores qualiﬁcados para desenvolver cursos, workshops e palestras para a demanda de sua equipe.</p>
              </div>
            </div>
          </div>
        </section>


        <div class="container col-md-9">
          <div class="sessao-servicos">
            Serviços
          </div>
        </div>

        <div class="container card-body">
          <div class="row">
            <div class="col-md-3 col-sm-3">
              <div class="container-card">
                <img src="arquivos-layout/images/icone1.svg" alt="Icone" class="image"/>
                <div class="overlay">
                  <div class="titulo" id="planejamento">Planejamento estratégico</div>
                  <div class="text-conteudo">
                    <p>• Deﬁnir metas e objetivos;</p>
                    <p>• Deﬁnir projetos de suporte ao plano;</p>
                    <p>• Elaborar plano de ação em todos os níveis hierárquicos;</p>
                    <p>• Deﬁnir indicadores de desempenho.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-3">
              <div class="container-card">
                <img src="arquivos-layout/images/icone2.svg" alt="Icone" class="image"/>
                <div class="overlay">
                  <div class="titulo">Governança Corporativa</div>
                  <div class="text-conteudo">
                    <p>• Deﬁnir as reuniões de gestão;</p>
                  <p>• Monitoramento dos projetos e planos;</p>
                  <p>• Realizar acompanhamento de despesas e investimentos;</p>
                  <p>• Criar a cultura de gestão.</p>
                </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-3">
              <div class="container-card">
                <img src="arquivos-layout/images/icone3.svg" alt="Icone" class="image"/>
                <div class="overlay">
                  <div class="titulo">Processos</div>
                  <div class="text-conteudo">
                    <p>• Elaborar fluxo de processos;</p>
                    <p>• Elaborar normas da empresa;</p>
                    <p>• Documentar procedimentos operacionais;</p>
                    <p>• Criar as instruções de processos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-3">
              <div class="container-card">
                <img src="arquivos-layout/images/icone4.svg" alt="Icone" class="image"/>
                <div class="overlay">
                  <div class="titulo">Pessoas</div>
                  <div class="text-conteudo">
                    <p>• Mapear rotinas e atividades críticas;</p>
                  <p>• Definir treinamentos operacionais;</p>
                  <p>• Definir quadro de pessoa x processos;</p>
                  <p>• Eliminar desvios de função.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container card-body2">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="container-card">
                <img src="arquivos-layout/images/icone5.svg" alt="Icone" class="image"/>
                <div class="overlay">
                  <div class="titulo">Tecnologia</div>
                  <div class="text-conteudo">
                    <p>• Diagnóstico da situação atual;</p>
                    <p>• Visão futura;</p>
                    <p>• Elaborar roadmap de projetos;</p>
                    <p>• Gestão dos projetos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="container-card">
                <img src="arquivos-layout/images/icone5.svg" alt="Icone" class="image"/>
                <div class="overlay">
                  <div class="titulo">Redução de despesas</div>
                  <div class="text-conteudo">
                    <p>• Avaliar os contratos vigentes;</p>
                  <p>• Realizar análise de despesas;</p>
                  <p>• Elaborar plano de ação e redução;</p>
                  <p>• Maximizar o resultado operacional.</p>
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
              <p>Leia nossos materiais <br/>sobre Educação Corporativa</p>
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


export default Consultoria_empresarial
