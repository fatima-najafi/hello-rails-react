import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store

import Greeting from './components/greeting';

ReactDOM.render(
  <Provider store={store}>
    <Greeting />
  </Provider>,
  document.getElementById('root')
);
