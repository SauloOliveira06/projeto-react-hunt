import React, { Component } from 'react';


import client from '../Components/Client';

let slide1 = 'arquivos-layout/images/cumprimento.jpg'
var style1  = {
    background: `url(${slide1}) round`
}

let slide2 = 'arquivos-layout/images/meetup.png'
var style2  = {
    background: `url(${slide2}) round`
}

let slide3 = 'arquivos-layout/images/cursos.jpg'
var style3  = {
    background: `url(${slide3}) round`
}

let slide4 = 'arquivos-layout/images/ceu-estrelado.jpg'
var style4  = {
    background: `url(${slide4}) round` 
}
class Slide extends Component {

    constructor(){
        super()
        this.state = { texto_slidepage: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'textoSlide'
        }).then( (entries) => {
            this.setState({texto_slidepage: entries.items[0]})
        })
    }

    render(){
        return(
            <div>
            <div id="ubea-hero" class="js-fullheight"  data-section="home">
                <div class="flexslider js-fullheight">
                    <ul class="slides">
                        <li class="slide1" style={ style1 }>
                            <div class="overlay"></div>
                            <div class="container">
                                <div class="col-md-10 col-md-offset-1 js-fullheight slider-text">
                                    <div class="slider-text-inner">
                                    <h2>Soluções customizadas <br/>para pessoas e negócios.</h2>
                                        <button type="button" class="btn btn-slide" href="#">
                                            <p>Veja nossos serviços</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="slide2" style={ style2 }>
                            <div class="overlay"></div>
                            <div class="container">
                                <div class="col-md-10 col-md-offset-1 js-fullheight slider-text">
                                    <div class="slider-text-inner">
                                        <h2>Soluções customizadas <br/>para pessoas e negócios.</h2>
                                        <button type="button" class="btn btn-slide" href="#">
                                            Veja nossos serviços
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="slide3"  style={ style3 } >
                            <div class="overlay"></div>
                            <div class="container">
                                <div class="col-md-10 col-md-offset-1 js-fullheight slider-text">
                                    <div class="slider-text-inner">
                                        <h2>Soluções customizadas <br/>para pessoas e negócios.</h2>
                                        <button type="button" class="btn btn-slide" href="#">
                                            Veja nossos serviços
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="slide4"  style={ style4 }>
                            <div class="overlay"></div>
                            <div class="container">
                                <div class="col-md-10 col-md-offset-1 text-center js-fullheight slider-text">
                                    <div class="slider-text-inner">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/wuwLfebuKpw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            </div>
            
        );
    }
}

export default Slide