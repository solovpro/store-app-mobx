import React, { ReactElement } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import GoodsCart from '../../components/Goods/GoodsCart';
import { useStore } from '../../stores/main.store';
import { Product } from '../../types/types';

import s from './Cart.module.scss';

// Экран Корзины
const Cart: React.FC = observer(() => {
   const store = useStore();
   return (
      <section className={s.cart}>
         <h1 className={s.cartHeader}>Корзина</h1>
         <ul>
            {store.hasSelectedComputed ? (
               store?.data?.map((product: Product): ReactElement | undefined => {
                  if (product.selected) {
                     return (
                        <li key={product.id}>
                           <GoodsCart product={product} />
                        </li>
                     );
                  }
               })
            ) : (
               <span className={s.cartNotSelected}>Нет выбранных товаров</span>
            )}
         </ul>
         {store?.hasSelectedComputed && (
            <div className={s.cartButtons}>
               <button className={cn(s.cartButton, s.cartButtons__Clear)} type='button' onClick={store.clearCart}>
                  Очистить корзину
               </button>
               <div className={s.cartButtons__Result}>
                  <h2 className={s.cartButtons__ResultSum}>Сумма заказа: {store.sumComputed} р</h2>
                  <button
                     className={cn(s.cartButton, s.cartButtons__Order)}
                     type='button'
                     onClick={() => store?.setIsReceived(true)}
                  >
                     Заказать
                  </button>
               </div>
            </div>
         )}
      </section>
   );
});

export default Cart;
