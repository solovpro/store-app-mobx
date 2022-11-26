import React, { ReactElement } from 'react';
import { Product } from '../../types/types';
import cn from 'classnames';

import Goods from '../../components/Goods/Goods';

import s from './Order.module.scss';

interface OrderProps {
   setDataContainer: (product: Product, func: (dataEl: Product) => void) => void;
   isSelectedProducts: () => boolean;
   calculateSum: () => void;
   data: Product[];
   sum: number;
}

// Экран Заказа
const Order: React.FC<OrderProps> = ({ isSelectedProducts, setDataContainer, calculateSum, data, sum }) => {
   return (
      <div className={s.order}>
         <div className={cn(s.orderProducts, s.orderBlock)}>
            <div className={s.orderBlock__Header}>Товары</div>
            <div className={s.orderGoods}>
               {data?.map((product: Product): ReactElement | undefined => (
                  <Goods
                     setDataContainer={setDataContainer}
                     location={'inProductsPanel'}
                     calculateSum={calculateSum}
                     inProductsPanel={true}
                     product={product}
                     key={product.id}
                  />
               ))}
            </div>
         </div>
         <div className={s.orderSeparation} />
         <div className={cn(s.orderSelected, s.orderBlock)}>
            <div className={s.orderBlock__Header}>Заказ</div>
            <div className={s.orderGoods}>
               {isSelectedProducts() ? (
                  <>
                     {data?.map((product: Product): ReactElement | undefined => {
                        if (product.selected) {
                           return (
                              <Goods
                                 setDataContainer={setDataContainer}
                                 calculateSum={calculateSum}
                                 inProductsPanel={false}
                                 location={'inOrder'}
                                 product={product}
                                 key={product.id}
                              />
                           );
                        }
                     })}
                     <div className={s.orderGoods__Result}>
                        {isSelectedProducts() && <div className={s.cartResult}>Сумма заказа: {sum} ₽</div>}
                     </div>
                  </>
               ) : (
                  <div className={s.orderGoods__NotSelected}>Нет выбранных товаров</div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Order;
