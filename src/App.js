import React from "react";
import { Provider } from "react-redux";
import {HashRouter} from 'react-router-dom';
import AppRoot from './AppRoot/AppRoot';
import store from "./store/store";
import './index.css'
const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppRoot />
      </HashRouter>
    </Provider>
  )
}

export default App;
