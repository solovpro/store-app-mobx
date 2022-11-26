import React, { ReactElement } from 'react';

import Goods from '../../components/Goods/Goods';
import { Product } from '../../types/types';

import s from './Cart.module.scss';

interface CartProps {
   setDataContainer: (product: Product, func: (dataEl: Product) => void) => void;
   setIsReceived: React.Dispatch<React.SetStateAction<boolean>>;
   isSelectedProducts: () => boolean;
   calculateSum: () => void;
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
   data,
   sum,
}) => {
   const onClick = () => {
      if (isSelectedProducts()) {
         setIsReceived(true);
      }
   };
   return (
      <div className={s.cart}>
         <div className={s.cartHeader}>Корзина</div>
         <div>
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
         </div>
         {isSelectedProducts() && (
            <div className={s.cartResult}>
               <div>Сумма заказа: {sum} ₽</div>
               <button className={s.cartButton} type='button' onClick={onClick}>
                  Заказать
               </button>
            </div>
         )}
      </div>
   );
};

export default Cart;
