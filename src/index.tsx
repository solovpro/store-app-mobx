import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';

import { MainStore } from './stores/MainStore';
import App from './App';

import './index.css';

const store = MainStore.create();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>
);
