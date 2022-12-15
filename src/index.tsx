import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { mainStore, StoreProvider } from './stores/main.store';
import App from './App';

import './index.css';

const store = mainStore.create();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
   <BrowserRouter>
      <StoreProvider value={store}>
         <App />
      </StoreProvider>
   </BrowserRouter>
);
