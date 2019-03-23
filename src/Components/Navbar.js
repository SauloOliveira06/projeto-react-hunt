import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <nav class="ubea-nav" role="navigation">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-5 col-md-5 col-xs-4">
                                    <div id="ubea-logo">
                                        <Link to="/"> 
                                            <img src="arquivos-layout/images/logo-hunt.svg"/> 
                                        </Link> 
                                    </div>
                                </div>
                                <div class="col-lg-7 col-md-7 ">
                                    <ul>
                                    <li><Link to="/">Início</Link></li>
                                    <li><Link to="/sobre">Sobre</Link></li>          
                                    <li><a href="#">Serviços<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                                        <ul id="submenu" class="has-dropdown">
                                            <li><Link to="/empresarial">Consultoria Empresarial</Link></li>
                                            <li><Link to="/terceirizacao_temporarios">Terceirização e Temporários</Link></li>
                                            <li><Link to="/consultoria_rh">Consultoria de RH</Link></li>
                                            <li><Link to="/educacao_corporativa">Educação Corporativa</Link></li>
                                        </ul>
                                    </li> 
                                        <li id="contato-li"><a href="index.html#contato-ancora" >Contato</a></li> 
 
                                        <button type="button" class="btn btn-curr" href="#" data-toggle="modal" data-target="#modalLoginForm">
                                            Enviar Currículo
                                        </button> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">

                            <div class="modal-header text-center">
                                <h4 class="modal-title w-100 font-weight-bold">Enviar Currículo</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fa fa-times" aria-hidden="true"></i></span>
                                </button>
                            </div>

                            <div class="modal-body mx-3">
                                <div class="md-form mb-5">
                                    <label data-error="wrong" data-success="right" for="defaultForm-name" id="nome-modal">Seu Nome:</label>
                                    <input type="name" id="defaultForm-name" class="form-control validate"/>
                                </div>
                                <div class="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email" id="email-modal">Seu E-mail:</label>
                                    <input type="email" id="defaultForm-email" class="form-control validate"/>
                                </div>
                                <div class="md-form mb-3">
                                    <label data-error="wrong" data-success="right" for="defaultForm-arquivo" id="arquivo-modal">Arquivo CV:</label>
                                    <input type="file" id="defaultForm-arquivo" class="form-control validate"/>
                                </div>
                            </div>

                            <div class="modal-footer d-flex justify-content-center">
                                <button class="btn btn-danger">ENVIAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar