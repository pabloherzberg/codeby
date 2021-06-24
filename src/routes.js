import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Stories from './pages/Stories';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/stories" exact component={Stories} />
        <Route path="/" exact component={Home} />
        <Route path="/cardapio" exact component={Menu} />
        <Route path="/carrinho" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
