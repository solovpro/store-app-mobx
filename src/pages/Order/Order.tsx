import React, { ReactElement } from 'react';
import { observer } from 'mobx-react';
import { Product } from '../../types/types';
import cn from 'classnames';

import GoodsPanel from '../../components/Goods/GoodsPanel';
import GoodsOrder from '../../components/Goods/GoodsOrder';
import { useStore } from '../../stores/main.store';

import s from './Order.module.scss';

// Экран Заказа
const Order: React.FC = observer(() => {
   const store = useStore();
   return (
      <section className={s.order}>
         <article className={cn(s.orderProducts, s.orderBlock)}>
            <h1 className={s.orderBlock__Header}>Товары</h1>
            <ul className={s.orderGoods}>
               {store.data.map((product: Product): ReactElement | undefined => (
                  <li>
                     <GoodsPanel product={product} key={product.id} />
                  </li>
               ))}
            </ul>
         </article>
         <div className={s.orderSeparation} />
         <aside className={cn(s.orderSelected, s.orderBlock)}>
            <h1 className={s.orderBlock__Header}>Заказ</h1>
            <div className={s.orderGoods}>
               {store.hasSelectedComputed ? (
                  <ul>
                     {store.data.map((product: Product): ReactElement | undefined => {
                        if (product.selected) {
                           return (
                              <li>
                                 <GoodsOrder product={product} key={product.id} />
                              </li>
                           );
                        }
                     })}
                     <p className={s.orderGoods__Result}>Сумма заказа: {store.sumComputed} &#8381;</p>
                  </ul>
               ) : (
                  <p className={s.orderGoods__NotSelected}>Нет выбранных товаров</p>
               )}
            </div>
         </aside>
      </section>
   );
});

export default Order;
