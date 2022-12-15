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
      <div className={s.cart}>
         <div className={s.cartHeader}>Корзина</div>
         <>
            {store?.data?.map((product: Product): ReactElement | undefined => {
               if (product.selected) {
                  return <GoodsCart product={product} key={product.id} />;
               }
            })}
            {!store?.hasSelectedComputed && <div className={s.cartNotSelected}>Нет выбранных товаров</div>}
         </>
         {store?.hasSelectedComputed && (
            <div className={s.cartButtons}>
               <button className={cn(s.cartButton, s.cartButtons__Clear)} type='button' onClick={store.clearCart}>
                  Очистить корзину
               </button>
               <div className={s.cartButtons__Result}>
                  <div className={s.cartButtons__ResultSum}>Сумма заказа: {store.sumComputed} ₽</div>
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
      </div>
   );
});

export default Cart;
