import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import { store, StoreContext } from './stores/store';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';


if(document.getElementById('home'))
{
  ReactDOM.render(
    <StoreContext.Provider value={store}>\
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </StoreContext.Provider>,
    document.getElementById('home')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
