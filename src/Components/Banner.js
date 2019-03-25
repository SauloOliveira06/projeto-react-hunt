import React, { Component } from 'react';

const img = 'arquivos-layout/images/about_plan.jpg';
const banner = {
  background: `url(${img})`,
};
class Footer extends Component {
  render() {
    return (
      <div className="banner-sobre" style={banner}>
        <div className="container col-md-9">
          <div className="texto-banner">
            <p>Sobre Nós</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
