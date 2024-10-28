import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// <App /> - make a function call to App function.
// returned value of App function is going to be rendered here.
root.render(
    <App /> 
);
