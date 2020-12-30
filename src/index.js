import React from 'react';
import ReactDom from 'react-dom';
import store from "./store";
import { Provider } from "react-redux";
import Composition from './components/Composition';

ReactDom.render(
  <Provider store={store}>
    <Composition />
  </Provider>
  , document.querySelector('#root'));