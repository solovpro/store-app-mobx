import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Received from './components/Received/Received';
import Header from './components/Header/Header';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';

import s from './App.module.scss';

interface AppProps {
   store?: any;
}

const App: React.FC<AppProps> = inject('store')(
   observer(({ store = {} }: any) => {
      return (
         <main className={s.app}>
            <Header />
            {store?.isReceived && <Received clearCart={store?.clearCart} />}
            {store?.data ? (
               <div className={s.appContent}>
                  <Routes>
                     <Route path='/store-app/' element={<Order />} />
                     <Route path='/store-app/cart' element={<Cart />} />
                  </Routes>
               </div>
            ) : (
               <div>Произошла ошибка при получении данных</div>
            )}
         </main>
      );
   })
);

export default App;
