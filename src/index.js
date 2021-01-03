import React from 'react';
import ReactDom from 'react-dom';
import store from "./store";
import { Provider } from "react-redux";
import ReduxTest from './components/ReduxTest';

ReactDom.render(
  <Provider store={store}>
    <ReduxTest />
  </Provider>
  , document.querySelector('#root'));