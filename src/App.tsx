import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Received from './components/Received/Received';
import Header from './components/Header/Header';
import { Product } from './types/types';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';

import product1 from './assets/img/product-1.png';
import product2 from './assets/img/product-2.png';
import product3 from './assets/img/product-3.png';
import product4 from './assets/img/product-4.png';
import product5 from './assets/img/product-5.png';
import product6 from './assets/img/product-6.png';
import product7 from './assets/img/product-7.png';
import product8 from './assets/img/product-8.png';
import product9 from './assets/img/product-9.png';
import product10 from './assets/img/product-10.png';

import s from './App.module.scss';

const App: React.FC = () => {
   const [isReceived, setIsReceived] = useState<boolean>(false);
   const [sum, setSum] = useState<number>(0);
   const [data, setData] = useState<Product[]>([
      {
         id: 1,
         img: product1,
         name: 'Товар1',
         price: '50',
         selected: false,
         amount: 0,
         sum: 0,
      },
      {
         id: 2,
         img: product2,
         name: 'Товар2',
         price: '100',
         selected: false,
         amount: 0,
         sum: 0,
      },
      {
         id: 3,
         img: product3,
         name: 'Товар3',
         price: '150',
         selected: false,
         amount: 0,
         sum: 0,
      },
      {
         id: 4,
         img: product4,
         name: 'Товар4',
         price: '200',
         selected: false,
         amount: 0,
         sum: 0,
      },
      {
         id: 5,
         img: product5,
         name: 'Товар5',
         price: '250',
         selected: false,
         amount: 0,
         sum: 0,
      },
      {
         id: 6,
         img: product6,
         name: 'Товар6',
         price: '300',
         selected: false,
         amount: 0,
         sum: 0,
      },
      {
         id: 7,
         img: product7,
         name: 'Товар7',
         price: '350',
         selected: false,
         amount: 0,
         sum: 0,
      },
      {
         id: 8,
         img: product8,
         name: 'Товар8',
         price: '400',
         selected: false,
         amount: 0,
         sum: 0,
      },
      {
         id: 9,
         img: product9,
         name: 'Товар9',
         price: '450',
         selected: false,
         amount: 0,
         sum: 0,
      },
      {
         id: 10,
         img: product10,
         name: 'Товар10',
         price: '500',
         selected: false,
         amount: 0,
         sum: 0,
      },
   ]);

   // Изменения массива данных
   const setDataContainer = (product: Product, func: (dataEl: Product) => void): void => {
      const dataArr = data;
      dataArr?.forEach((dataEl): void => {
         if (dataEl.id === product?.id) {
            func(dataEl);
         }
      });
      setData([...dataArr]);
   };

   // Высчитываем итоговую сумму
   const calculateSum = (): void => {
      setSum(0);
      data.forEach((product): void => {
         if (product.sum) {
            // eslint-disable-next-line @typescript-eslint/no-shadow
            setSum(sum => sum + product.sum);
         }
      });
   };

   // Высчитываем сколько товаров выбрано
   const calculateSelected = (): number => {
      let count = 0;
      data.forEach((product): void => {
         if (product.selected) {
            count++;
         }
      });
      return count;
   };

   // Есть ли товары, которые выбрали
   const isSelectedProducts = (): boolean => {
      let isSelected: boolean = false;
      data?.forEach(product => {
         if (product.selected) {
            isSelected = true;
         }
      });
      return isSelected;
   };

   // Очистить корзину
   const clearCart = () => {
      let dataArr = data;
      dataArr.forEach(dataEl => {
         dataEl.amount = 0;
         dataEl.selected = false;
         dataEl.sum = 0;
      });
      setData([...dataArr]);
      setIsReceived(false);
   };

   return (
      <main className={s.app}>
         <BrowserRouter>
            <Header calculateSelected={calculateSelected} />
            {isReceived && <Received clearCart={clearCart} />}
            <div className={s.appContent}>
               <Routes>
                  <Route
                     path='/'
                     element={
                        <Order
                           isSelectedProducts={isSelectedProducts}
                           setDataContainer={setDataContainer}
                           calculateSum={calculateSum}
                           data={data}
                           sum={sum}
                        />
                     }
                  />
                  <Route
                     path='/cart'
                     element={
                        <Cart
                           isSelectedProducts={isSelectedProducts}
                           setDataContainer={setDataContainer}
                           calculateSum={calculateSum}
                           setIsReceived={setIsReceived}
                           isReceived={isReceived}
                           clearCart={clearCart}
                           data={data}
                           sum={sum}
                        />
                     }
                  />
               </Routes>
            </div>
         </BrowserRouter>
      </main>
   );
};

export default App;
