import React, { Component } from 'react';


let img = 'arquivos-layout/images/back-cafe.jpg'
var ebookBackground  = {
    background: `url(${img}) center top no-repeat`
}
// background: url("../images/back-cafe.jpg") ;
// ebookBackground
class SessaoEbook extends Component {
  render(){
    return(
  <div>
    <div class="flex-container ebook-background" style={ ebookBackground }>
      <div class="container col-md-9">
        <div class="flex-conteudo-ebook">
          <p>Leia nossos materiais <br/>sobre RH</p>
          <a class="botao-baixar-ebook" href="#" data-toggle="modal" data-target="#myModal">Baixar Ebook</a>
        </div>
      </div>
    </div>

      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-smll" role="document">
          <div class="modal-content">
            <div class="modal-header bg-primary text-center">
              <h2 class="modal-title" id="myModalLabel">Cadastre seu e-mail e receba nosso material.</h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times time" aria-hidden="true"></i></span></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <form action="#">
                  <div class="form-group col-md-12">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
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
    </div>
    );
  }
}

export default SessaoEbook



