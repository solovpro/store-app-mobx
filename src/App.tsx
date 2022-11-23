import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import { Product } from './types/types';
import Order from './pages/Order/Order';

import steakHouse from './assets/img/steak-house.png';

import s from './App.module.scss';

const App: React.FC = () => {
   const [data] = useState<Product[]>([
      {
         id: 1,
         img: steakHouse,
         name: 'товар1',
         price: '50',
      },
      {
         id: 2,
         img: steakHouse,
         name: 'товар2',
         price: '100',
      },
      {
         id: 3,
         img: steakHouse,
         name: 'товар3',
         price: '150',
      },
      {
         id: 4,
         img: steakHouse,
         name: 'товар4',
         price: '200',
      },
      {
         id: 5,
         img: steakHouse,
         name: 'товар5',
         price: '250',
      },
      {
         id: 6,
         img: steakHouse,
         name: 'товар6',
         price: '300',
      },
      {
         id: 7,
         img: steakHouse,
         name: 'товар7',
         price: '350',
      },
      {
         id: 8,
         img: steakHouse,
         name: 'товар8',
         price: '400',
      },
      {
         id: 9,
         img: steakHouse,
         name: 'товар9',
         price: '450',
      },
      {
         id: 10,
         img: steakHouse,
         name: 'товар10',
         price: '500',
      },
   ]);

   return (
      <main className={s.app}>
         <BrowserRouter>
            <Header />
            <div className={s.appContent}>
               <Routes>
                  <Route path='/' element={<Order data={data} />} />
                  <Route path='/cart' element={<div>123</div>} />
               </Routes>
            </div>
         </BrowserRouter>
      </main>
   );
};

export default App;
