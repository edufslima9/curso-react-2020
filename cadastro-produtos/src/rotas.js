import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './view/home';
import CadastroProduto from './view/produtos/cadastro';
import ConsultaProdutos from './view/produtos/consulta';

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cadastro-produtos" component={CadastroProduto} />
                <Route exact path="/consulta-produtos" component={ConsultaProdutos} />
            </Switch>
        </HashRouter>
    )
}