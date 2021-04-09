import React from 'react';
import ReactDOM from 'react-dom';
import Route from './routes';
import GlobalStyle from './styles/global';
import CartProvider from './context/Candies';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Route />
    </CartProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
