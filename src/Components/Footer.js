/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <div>

        <footer id="footer">

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="logo-rodape">
                  <img src="arquivos-layout/images/logo-hunt.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="endereco-hunt">
                  <h4>Manaus - AM</h4>
                  <p>
                    Rua Rio Javari, 29, Vieiralves.
                    <br />
                    CEP: 69053-110
                    <br />
                    contato@grupohunt.com.br
                    <br />
                    +55 (92) 3088-5508 / 3088-1861 /
                    {' '}
                    <br />
                    99963-6562
                  </p>
                  <div className="social-links">
                    <h4>Redes Sociais</h4>
                    <a href="#" className="twitter"><img src="arquivos-layout/images/youtube.svg" alt="" /></a>
                    <a href="#" className="instagram"><img src="arquivos-layout/images/instagram.svg" alt="" /></a>
                    <a href="#" className="facebook"><img src="arquivos-layout/images/facebook.svg" alt="" /></a>
                    <a href="#" className="linkedin"><img src="arquivos-layout/images/linkedin.svg" alt="" /></a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="titulo-downloads">
                  <h4>Downloads</h4>
                  <div className="img-app-store">
                    <a href="#"><img src="arquivos-layout/images/app_store.png" alt="" /></a>
                  </div>
                  <div className="img-app-googleplay">
                    <a href="#"><img src="arquivos-layout/images/google_play.png" alt="" /></a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div id="form-curriculo">
                  <h4 id="titulo-curriculo">Envie seu currículo</h4>
                  <div id="contato-ancora">
                    <form id="contact" action="#" method="post">
                      <fieldset>
                        <input placeholder="Seu nome" type="text" tabIndex="0" required />
                      </fieldset>
                      <fieldset>
                        <input placeholder="Seu e-mail" type="email" tabIndex="0" required />
                      </fieldset>
                      <fieldset>
                        <input placeholder="Seu telefone" type="tel" tabIndex="0" required />
                      </fieldset>
                      <fieldset>
                        <button name="file" type="file" id="btn-file">ARQUIVO</button>
                        <button name="submit" type="submit" id="contact-submit">ENVIAR</button>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="copyright">
          <div className="conteudo">
          &copy;2018 Grupo Hunt. Todos os direitos reservados.
          </div>
        </div>

        <div className="gototop js-top">
          <a href="#" className="js-gotop"><i className="icon-arrow-up" /></a>
        </div>
      </div>
    );
  }
}

export default Footer;
