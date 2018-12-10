import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './src/store/configureStore';
import App from './App';
import { AppRegistry } from "react-native";
const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('rncourse', () => RNRedux);