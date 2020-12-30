import React from 'react';
import ReactDom from 'react-dom';
import ReduxTest from './components/ReduxTest';
import store from "./store";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={store}>
    <ReduxTest />
  </Provider>
  , document.querySelector('#root'));