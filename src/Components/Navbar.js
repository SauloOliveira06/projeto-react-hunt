import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
        <div>
            <header id="header">
                <nav className="ubea-nav" role="navigation">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-xs-4 teste">
                                <div id="ubea-logo"><Link to="/"><img src="arquivos-layout/images/logo-hunt.svg" alt=""/></Link></div>
                            </div>
                            <div className="col-lg-7 col-md-7 menu-1 main-nav teste1">
                                <ul class="has-dropdown">
                                    <li><Link to="/">Início</Link></li>
                                    <li><Link to="/sobre">Sobre</Link></li>
                                    <li><Link to="#">Serviços<i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                                        <ul id="submenu" className="has-dropdown">
                                            <li><Link to="/consultoria-empresarial">Consultoria Empresarial</Link></li>
                                            <li><Link to="/terceirizacao-temporarios">Terceirização e Temporários</Link></li>
                                            <li><Link to="/consultoria-rh">Consultoria de RH</Link></li>
                                            <li><Link to="/educacao-corporativa">Educação Corporativa</Link></li>
                                        </ul>
                                    </li>
                                    <li id="contato-li"><a href="index.html#contato-ancora" >Contato</a></li>

                                    <button type="button" className="btn btn-curr" href="#" data-toggle="modal" data-target="#modalLoginForm">
                                        Enviar Currículo
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">

                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Enviar Currículo</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i></span>
                            </button>
                        </div>

                        <div className="modal-body mx-3">
                            <div className="md-form mb-5">
                                <label data-error="wrong" data-success="right" htmlFor="defaultForm-name" id="nome-modal">Seu Nome:</label>
                                <input type="name" id="defaultForm-name" className="form-control validate"/>
                            </div>
                            <div className="md-form mb-4">
                                <label data-error="wrong" data-success="right" htmlFor="defaultForm-email" id="email-modal">Seu E-mail:</label>
                                <input type="email" id="defaultForm-email" className="form-control validate"/>
                            </div>
                            <div className="md-form mb-3">
                                <label data-error="wrong" data-success="right" htmlFor="defaultForm-arquivo" id="arquivo-modal">Arquivo CV:</label>
                                <input type="file" id="defaultForm-arquivo" className="form-control validate"/>
                            </div>
                        </div>

                        <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-danger">ENVIAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Navbar