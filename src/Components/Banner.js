import React, { Component } from 'react';
let img = 'arquivos-layout/images/about_plan.jpg'
var banner  = {
    background: `url(${img}) repeat`
}
class Footer extends Component {
    render() {
        return (
        <div class="banner-sobre" style={ banner }>
            <div class="container col-md-9">
                <div class="texto-banner">
                <p>Sobre Nós</p>
                </div>
            </div>  
        </div>
        );
    }
}
export default Footer;