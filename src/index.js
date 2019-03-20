import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Consultoria_empresarial from './Consultoria_empresarial';
import Terceirizacao_temporarios from './Terceirizacao_temporarios';
import Consultoria_rh from './Consultoria_rh';
import Educacao_corporativa from './Educacao_corporativa';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
                <Route path="/" exact={true} component={App} />
                <Route path="/sobre" component={About} />
                <Route path="/empresarial" component={Consultoria_empresarial} />
                <Route path="/terceirizacao" component={Terceirizacao_temporarios} />
                <Route path="/consultoria" component={Consultoria_rh} />

                <Route path="/educacao" component={Educacao_corporativa} />

                {/* <Route path='*' component={ComponenteDePagina404} /> */}
    </BrowserRouter>
    , document.getElementById('root')
);