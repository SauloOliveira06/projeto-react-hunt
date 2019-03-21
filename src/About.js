import React, { Component } from 'react';
// import List from './Components/List';
// import Title from './Components/Title';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Frase from './Components/Frase';
import SessaoServicos from './Components/SessaoServicos';
import './App.css'
import './About.css'
class About extends Component {

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

        <Banner />

        {/* SESSAO AREA DE ATUACAO */}
        <div class="container">
          <div class="sessao-sobre">
            <p>Sobre o Grupo Hunt</p>
          </div>
        </div>

        <div class="container">
          
            <div class="conteudo-sobre">
              <p>
                Com o foco no desenvolvimento de pessoas e contribuição para o crescimento das empresas, o Grupo Hunt apresenta um portfólio completo de soluções para a área de RH e Gestão Corporativa.
              </p>
              <p>
                Possuímos mais de dez anos de experiência e abrangência nacional de atuação, nosso time é formado por profissionais capacitados e comprometidos com prazos e satisfação dos nossos clientes.
              </p>
              <p>
                Nos segmentos de consultoria e projetos em RH, treinamento e desenvolvimento, M. O. temporária, terceirização e consultoria empresarial; somos os parceiros ideais no seu negócio ou carreira.
              </p>
            </div>
          
        </div>


        <div class="container">
          <div class="sessao-equipe">
            <p>Equipe</p>
          </div>
        </div>
        <div class="container">
          <div class="row">

            <div class="card col-md-10 p-3">
              <div class="row ">
                <div class="col-md-8">
                  <div class="card-block">
                    <p class="card-text text-justify"><b>"</b>Lorem ipsum dolor sit amet, eum vidit veniam verterem, eam ullum harum eu, ius id minim alterum. Mea dico omnes mollis ea, patrioque inciderint usu. Libris essent singulis ad, iriure alienum dissentiet ut mel. Ad modo soleat voluptaria vel, vel an reprimique efficiendi. Sint ipsum eos, mazim laudem.<b>"</b></p>
                  </div>
                </div>
                <div class="col-md-4">
                  <img class="w-100" src="https://via.placeholder.com/335x446"/>
                </div>
              </div>
              <div class="card-nome">
                <h5>Nome da Pessoa</h5>
              </div>
            </div>
            <div class="card col-md-10 p-3">
              <div class="row ">
                <div class="col-md-4">
                  <img class="w-100" src="https://via.placeholder.com/335x446"/>
                </div>
                <div class="col-md-8">
                  <div class="card-block">
                    <p class="card-text text-justify"><b>"</b>Lorem ipsum dolor sit amet, eum vidit veniam verterem, eam ullum harum eu, ius id minim alterum. Mea dico omnes mollis ea, patrioque inciderint usu. Libris essent singulis ad, iriure alienum dissentiet ut mel. Ad modo soleat voluptaria vel, vel an reprimique efficiendi. Sint ipsum eos, mazim laudem.<b>"</b></p>
                  </div>
                </div>
              </div>
              <div class="card-nome-left">
                <h5>Nome da Pessoa</h5>
              </div>
            </div>

            <div class="card col-md-10 p-3">
              <div class="row ">
                <div class="col-md-8">
                  <div class="card-block">
                    <p class="card-text text-justify"><b>"</b>Lorem ipsum dolor sit amet, eum vidit veniam verterem, eam ullum harum eu, ius id minim alterum. Mea dico omnes mollis ea, patrioque inciderint usu. Libris essent singulis ad, iriure alienum dissentiet ut mel. Ad modo soleat voluptaria vel, vel an reprimique efficiendi. Sint ipsum eos, mazim laudem.<b>"</b></p>
                    
                  </div>
                </div>
                <div class="col-md-4">
                  <img class="w-100" src="https://via.placeholder.com/335x446"/>
                </div>
              </div>
              <div class="card-nome">
                <h5>Nome da Pessoa</h5>
              </div>
            </div>

          </div>
        </div>
















        <section class="background-sobre">
          <div class="container">
            <div class="row">
              <div class="img-hunt">
                <img src="arquivos-layout/images/foto-hunt.png"/>
              </div>
              <div class="div-informacoes">
                <div class="matriz-div">
                  <div class="matriz">
                    <h5>Matriz</h5>  
                  </div>
                </div>
                <br/><br/><br/><br/>
                <div class="endereco">
                  <i class="fa fa-map-marker" aria-hidden="true"/>
                  <h5>Grupo Hunt, Rua Rio Javari, 29, <br/>
                      Vieiralves, Manaus-Am
                  </h5>
                </div>
                <div class="contato">
                  <i class="fa fa-phone fa-2x" aria-hidden="true"/>
                  <h5>+55 92 3088 1861 / 3088-5508</h5>
                </div>
                <div class="email">
                  <i class="fa fa-envelope fa-2x" aria-hidden="true"/>
                  <h5>contato@grupohunt.com.br</h5>
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
