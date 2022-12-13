import React, { ReactElement } from 'react';
import { inject, observer } from 'mobx-react';
import { Product } from '../../types/types';
import cn from 'classnames';

import GoodsPanel from '../../components/Goods/GoodsPanel';
import GoodsOrder from '../../components/Goods/GoodsOrder';

import s from './Order.module.scss';

interface OrderProps {
   store?: any;
}

// Экран Заказа
const Order: React.FC<OrderProps> = inject('store')(
   observer(({ store = {} }) => (
      <div className={s.order}>
         <div className={cn(s.orderProducts, s.orderBlock)}>
            <div className={s.orderBlock__Header}>Товары</div>
            <div className={s.orderGoods}>
               {store?.data?.map((product: Product): ReactElement | undefined => (
                  <GoodsPanel product={product} key={product.id} />
               ))}
            </div>
         </div>
         <div className={s.orderSeparation} />
         <div className={cn(s.orderSelected, s.orderBlock)}>
            <div className={s.orderBlock__Header}>Заказ</div>
            <div className={s.orderGoods}>
               {store?.hasSelectedComputed ? (
                  <>
                     {store?.data?.map((product: Product): ReactElement | undefined => {
                        if (product.selected) {
                           return <GoodsOrder product={product} key={product.id} />;
                        }
                     })}
                     <div className={s.orderGoods__Result}>
                        <div className={s.cartResult}>Сумма заказа: {store.sumComputed} &#8381;</div>
                     </div>
                  </>
               ) : (
                  <div className={s.orderGoods__NotSelected}>Нет выбранных товаров</div>
               )}
            </div>
         </div>
      </div>
   ))
);

export default Order;
