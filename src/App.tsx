import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react';

import Received from './components/Received/Received';
import { useStore } from './stores/main.store';
import Header from './components/Header/Header';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';

import s from './App.module.scss';

const App: React.FC = observer(() => {
   const store = useStore();
   return (
      <>
         <Header />
         {store.isReceived && <Received clearCart={store.clearCart} />}
         {store.data ? (
            <main className={s.app}>
               <Routes>
                  <Route path='/' element={<Order />} />
                  <Route path='/cart' element={<Cart />} />
               </Routes>
            </main>
         ) : (
            <h1>Произошла ошибка при получении данных</h1>
         )}
      </>
   );
});

export default App;
