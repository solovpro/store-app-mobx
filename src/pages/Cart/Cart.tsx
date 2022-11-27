import React, { ReactElement } from 'react';
import cn from 'classnames';

import Goods from '../../components/Goods/Goods';
import { Product } from '../../types/types';

import s from './Cart.module.scss';

interface CartProps {
   setDataContainer: (product: Product, func: (dataEl: Product) => void) => void;
   setIsReceived: React.Dispatch<React.SetStateAction<boolean>>;
   isSelectedProducts: () => boolean;
   calculateSum: () => void;
   clearCart: () => void;
   isReceived: boolean;
   data: Product[];
   sum: number;
}

// Экран Корзины
const Cart: React.FC<CartProps> = ({
   isSelectedProducts,
   setDataContainer,
   setIsReceived,
   calculateSum,
   clearCart,
   data,
   sum,
}) => {
   // Всплытие окна об успешном заказе
   const onClickOrder = () => {
      setIsReceived(true);
   };

   return (
      <div className={s.cart}>
         <div className={s.cartHeader}>Корзина</div>
         <>
            {data?.map((product: Product): ReactElement | undefined => {
               if (product.selected) {
                  return (
                     <Goods
                        setDataContainer={setDataContainer}
                        calculateSum={calculateSum}
                        inProductsPanel={false}
                        location={'inCart'}
                        product={product}
                        key={product.id}
                     />
                  );
               }
            })}
            {!isSelectedProducts() && <div className={s.cartNotSelected}>Нет выбранных товаров</div>}
         </>
         {isSelectedProducts() && (
            <div className={s.cartButtons}>
               <button className={cn(s.cartButton, s.cartButtons__Clear)} type='button' onClick={clearCart}>
                  Очистить корзину
               </button>
               <div className={s.cartButtons__Result}>
                  <div className={s.cartButtons__ResultSum}>Сумма заказа: {sum} ₽</div>
                  <button className={cn(s.cartButton, s.cartButtons__Order)} type='button' onClick={onClickOrder}>
                     Заказать
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default Cart;
