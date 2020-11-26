import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './view/home';
import CadastroProduto from './view/produtos/cadastro';

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cadastro-produtos" component={CadastroProduto} />
            </Switch>
        </HashRouter>
    )
}