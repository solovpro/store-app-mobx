import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { mainStore, StoreProvider } from './stores/main.store';
import App from './App';

import './index.css';

const store = mainStore.create();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
   <HashRouter>
      <StoreProvider value={store}>
         <App />
      </StoreProvider>
   </HashRouter>
);
