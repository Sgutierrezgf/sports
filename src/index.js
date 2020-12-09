import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './container/App';

const initialState = {
  'myDeportes': [],
  'deportes': [
    {
      'id': 1,
      'name': 'Football',
      'price': 200,
      'cover': 'https://raw.githubusercontent.com/Sgutierrezgf/Imagenes/master/futbol.jpg',
    },
    {
      'id': 2,
      'name': 'Voleyball',
      'price': 100,
      'cover': 'https://raw.githubusercontent.com/Sgutierrezgf/Imagenes/master/voleyball.jpg',
    },
    {
      'id': 3,
      'name': 'Tennis',
      'price': 250,
      'cover': 'https://raw.githubusercontent.com/Sgutierrezgf/Imagenes/master/tennis.jpg',
    },
    {
      'id': 4,
      'name': 'Basketball',
      'price': 100,
      'cover': 'https://raw.githubusercontent.com/Sgutierrezgf/Imagenes/master/basketball.jpg',
    },
    {
      'id': 5,
      'name': 'Golf',
      'price': 500,
      'cover': 'https://raw.githubusercontent.com/Sgutierrezgf/Imagenes/master/golf.jpg',
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
