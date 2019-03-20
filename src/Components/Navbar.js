import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'

const routes = [
    {
      path: "/App",
      sidebar: () => <li><a>Início</a></li>,
    },
    {
      path: "/sobre",
      sidebar: () => <li><a>Sobre</a></li>,
    },
  ];

  
class Navbar extends Component {
    render() {
        return (
        <div>
            <header id="header">
                <nav class="ubea-nav" role="navigation">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-5 col-md-5 col-xs-4 teste">
                                <div id="ubea-logo"><a href=""><img src="arquivos-layout/images/logo-hunt.svg"/></a></div>
                            </div>
                            <div class="col-lg-7 col-md-7 menu-1    main-nav teste1">
                                <ul>
                                {/* <Link to="/App">Ir para a página sobre \o/</Link>
                                    {routes.map((route, index) => (
                                        <Route
                                        key={index}

                                        path={route.path}
                                        exact={route.exact}
                                        component={route.sidebar}
                                        />
                                    ))}
                                     */}
                                    <li><a href={'/App/' } >Início</a></li>
                                    <li><a>Sobre</a></li>
                                    <li><a href="#">Serviços<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                                        <ul id="submenu" class="has-dropdown">
                                        
                                            <li><a>Consultoria Empresarial</a></li>
                                            <li><a>Terceirização e Temporários</a></li>
                                            <li><a>Consultoria de RH</a></li>
                                            <li><a>Educação Corporativa</a></li>
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
            <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
        </div>

        );
    }
}

export default Navbar

// const mapStateToProps = state => {
//     return {
//       user: state.user
//     };
//   };


// export default withRouter(connect(
//   mapStateToProps,
// )(Navbar))