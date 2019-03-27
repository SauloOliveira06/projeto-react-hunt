import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';



ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , document.getElementById('root')
);
  


// ReactDOM.render(<App/>, document.getElementById('root'));


// ReactDOM.render(
//     <BrowserRouter>
//                 <Route path="/" exact={true} component={App} />
//                 <Route path="/sobre" component={About} />
//                 <Route path="/empresarial" component={Consultoria_empresarial} />
//                 <Route path="/terceirizacao" component={Terceirizacao_temporarios} />
//                 <Route path="/consultoria" component={Consultoria_rh} />

//                 <Route path="/educacao" component={Educacao_corporativa} />

//                 {/* <Route path='*' component={ComponenteDePagina404} /> */}
//     </BrowserRouter>
//     , document.getElementById('root')
// );
