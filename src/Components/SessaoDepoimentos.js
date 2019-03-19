import React, {Component } from 'react';

class SessaoDepoimentos extends Component{

  render(){
    return(
      /*==========================
      Sessao Comentários
    ============================ */
  <div>
    <div class="container">
      <div class="sessao-depoimentos col-lg-12 col-md-6 col-xs-12">
        Depoimentos
      </div>
    </div>
    
    <section id="sessao-comentarios">
      <div class="container container-comentarios1">
        <div class="row">
          <div class="card-comentario1 col-md-6 col-xs-8">
            <div class="bloco-foto">
              <img src="assets/images/testimonial-1.jpg"/>
            </div>
            <div class="bloco-comentario">
              &quot;O curso de Recursos Humanos me ajudou a ter uma visão mais profunda dos diversos perfis que uma empresa solicita.&quot;
              <figcaption><b>Joaquim Brilhante, Aluno do curso de RH</b></figcaption>
            </div>  
          </div>
        
          <div class="card-comentario2 col-md-6 col-xs-8">
            <div class="bloco-foto">
              <img src="assets/images/testimonial-2.jpg"/>
            </div>
            <div class="bloco-comentario">
              &quot;O curso de Recursos Humanos me ajudou a ter uma visão mais profunda dos diversos perfis que uma empresa solicita.&quot;
              <figcaption><b>Paula Ribeiro, Aluna do curso de RH</b></figcaption>
            </div>
          </div>
        </div>
      </div>
      <div class="container container-comentarios2"> 
        <div class="row">
          <div class="card-comentario3 col-md-6 col-xs-8">
            <div class="bloco-foto">
              <img src="assets/images/testimonial-3.jpg" />
            </div>
            <div class="bloco-comentario">
              &quot;O curso de Recursos Humanos me ajudou a ter uma visão mais profunda dos diversos perfis que uma empresa solicita.&quot;
              <figcaption><b>Joaquim Brilhante, Aluno do curso de RH</b></figcaption>
            </div>  
          </div>
          
          <div class="card-comentario4 col-md-6 col-xs-8">
            <div class="bloco-foto">
              <img src="assets/images/testimonial-4.jpg"/>
            </div>
            <div class="bloco-comentario">
              &quot;O curso de Recursos Humanos me ajudou a ter uma visão mais profunda dos diversos perfis que uma empresa solicita.&quot;
              <figcaption><b>Paula Ribeiro, Aluna do curso de RH</b></figcaption>
            </div>
          </div>
        </div>
      </div>
    </section> 
  </div>
    );
  }
}

export default SessaoDepoimentos