import React, { Component } from 'react';

class Slide extends Component {
    render(){
        return(
            <div>
            <div id="ubea-hero" class="js-fullheight"  data-section="home">
                <div class="flexslider js-fullheight">
                    <ul class="slides">
                        <li class="slide1">
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
                        <li class="slide2">
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
                        <li class="slide3">
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
                        <li class="slide4">
                            <div class="overlay"></div>
                            <div class="container">
                                <div class="col-md-10 col-md-offset-1 text-center js-fullheight slider-text">
                                    <div class="slider-text-inner">
                                        <iframe width="660" height="400" id="youtube" src="https://www.youtube.com/embed/4LvQmreoCSE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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