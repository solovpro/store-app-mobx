import React, { ReactElement } from 'react';
import { inject, observer } from 'mobx-react';
import { Product } from '../../types/types';
import cn from 'classnames';

import Goods from '../../components/Goods/Goods';

import s from './Order.module.scss';

interface OrderProps {
   store?: any;
}

// Экран Заказа
const Order: React.FC<OrderProps> = inject('store')(
   observer(({ store = {} }) => {
      return (
         <div className={s.order}>
            <div className={cn(s.orderProducts, s.orderBlock)}>
               <div className={s.orderBlock__Header}>Товары</div>
               <div className={s.orderGoods}>
                  {store?.data?.map((product: Product): ReactElement | undefined => (
                     <Goods location={'inProductsPanel'} product={product} key={product.id} />
                  ))}
               </div>
            </div>
            <div className={s.orderSeparation} />
            <div className={cn(s.orderSelected, s.orderBlock)}>
               <div className={s.orderBlock__Header}>Заказ</div>
               <div className={s.orderGoods}>
                  {store?.isSelected ? (
                     <>
                        {store?.data?.map((product: Product): ReactElement | undefined => {
                           if (product.selected) {
                              return <Goods location={'inOrder'} product={product} key={product.id} />;
                           }
                        })}
                        <div className={s.orderGoods__Result}>
                           <div className={s.cartResult}>Сумма заказа: {store.sum} ₽</div>
                        </div>
                     </>
                  ) : (
                     <div className={s.orderGoods__NotSelected}>Нет выбранных товаров</div>
                  )}
               </div>
            </div>
         </div>
      );
   })
);

export default Order;
