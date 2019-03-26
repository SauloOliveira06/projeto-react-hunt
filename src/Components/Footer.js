import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
        <div>
          
          <footer id="footer">
  
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="logo-rodape">
                    <img src="arquivos-layout/images/logo-hunt.svg"/>
                  </div>
                </div>
              </div>
    
            <div class="row">
              <div class="col-md-4">
                <div class="endereco-hunt">
                  <h4>Manaus - AM</h4>
                  <p>
                    Rua Rio Javari, 29, Vieiralves.<br/>
                    CEP: 69053-110<br/>
                    contato@grupohunt.com.br<br/>
                    +55 (92) 3088-5508 / 3088-1861 / <br/>
                    99963-6562
                  </p>
                  <div class="social-links">
                  <h4>Redes Sociais</h4>
                  <a href="#" class="twitter"><img src="arquivos-layout/images/youtube.svg"/></a>
                  <a href="#" class="instagram"><img src="arquivos-layout/images/instagram.svg"/></a>
                  <a href="#" class="facebook"><img src="arquivos-layout/images/facebook.svg"/></a>
                  <a href="#" class="linkedin"><img src="arquivos-layout/images/linkedin.svg"/></a>
                </div>
              </div>
            </div>
      
            <div class="col-md-4">
              <div class="titulo-downloads">
                <h4>Downloads</h4>
                <div class="img-app-store">
                  <a href="#"><img src="arquivos-layout/images/app_store.png"/></a>
                </div>
                <div class="img-app-googleplay">
                  <a href="#"><img src="arquivos-layout/images/google_play.png"/></a>
                </div>
              </div>
            </div>
      
            <div class="col-md-4">
              <div id="form-curriculo">
                <h4 id="titulo-curriculo">Envie seu currículo</h4>
                <div id="contato-ancora">
                  <form id="contact" action="#" method="post">
                    <fieldset>
                      <input placeholder="Seu nome" type="text" tabindex="1" required/>
                    </fieldset>
                    <fieldset>
                      <input placeholder="Seu e-mail" type="email" tabindex="2" required/>
                    </fieldset>
                    <fieldset>
                      <input placeholder="Seu telefone" type="tel" tabindex="3" required/>
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

      <div class="copyright">
        <div class="conteudo">
          &copy;2018 Grupo Hunt. Todos os direitos reservados.
        </div>
      </div>

      <div class="gototop js-top">
        <a href="#" class="js-gotop"><i class="fas fa-arrow-up fa-2x"></i></a>
      </div>
    </div>
        );
    }
}

export default Footer;