import React, { ReactElement } from 'react';
import { inject, observer } from 'mobx-react';
import cn from 'classnames';

import Goods from '../../components/Goods/Goods';
import { Product } from '../../types/types';

import s from './Cart.module.scss';

interface CartProps {
   store?: any;
}

// Экран Корзины
const Cart: React.FC<CartProps> = inject('store')(
   observer(({ store }) => {
      return (
         <div className={s.cart}>
            <div className={s.cartHeader}>Корзина</div>
            <>
               {store?.data?.map((product: Product): ReactElement | undefined => {
                  if (product.selected) {
                     return <Goods location={'inCart'} product={product} key={product.id} />;
                  }
               })}
               {!store?.isSelected && <div className={s.cartNotSelected}>Нет выбранных товаров</div>}
            </>
            {store?.isSelected && (
               <div className={s.cartButtons}>
                  <button className={cn(s.cartButton, s.cartButtons__Clear)} type='button' onClick={store.clearCart}>
                     Очистить корзину
                  </button>
                  <div className={s.cartButtons__Result}>
                     <div className={s.cartButtons__ResultSum}>Сумма заказа: {store.sum} ₽</div>
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
   })
);

export default Cart;
