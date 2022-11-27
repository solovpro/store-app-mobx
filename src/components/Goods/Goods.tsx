import React, { useEffect } from 'react';
import cn from 'classnames';

import { Product } from '../../types/types';
import deleteImg from '../../assets/img/delete.png';

import s from './Goods.module.scss';

interface ProductProps {
   setDataContainer: (product: Product, func: (dataEl: Product) => void) => void;
   calculateSum: () => void;
   inProductsPanel: boolean;
   location: LocationType;
   product: Product;
}

type LocationType = 'inProductsPanel' | 'inOrder' | 'inCart';

// Товар
const Goods: React.FC<ProductProps> = ({ setDataContainer, calculateSum, product, location }) => {
   // При изменении количества выбранного товара, меняем итоговую сумму
   useEffect(() => {
      calculateSum();
   }, [product.amount]);

   // Добавить товар в заказ
   const onClickAdd = (): void => {
      if (!product.selected) {
         setDataContainer(product, (dataEl: Product) => {
            dataEl.selected = true;
            dataEl.amount = 1;
            dataEl.sum = Number(dataEl.price);
         });
      }
   };

   // Удалить товар из заказа или корзины
   const onClickDelete = (): void => {
      setDataContainer(product, (dataEl: Product) => {
         dataEl.selected = false;
         dataEl.amount = 0;
         dataEl.sum = 0;
      });
   };

   // Уменьшить количество товара в заказе
   const onClickMinus = (): void => {
      if (product.amount !== 1) {
         setDataContainer(product, (dataEl: Product) => {
            dataEl.amount -= 1;
            dataEl.sum -= Number(dataEl.price);
         });
      } else {
         onClickDelete();
      }
   };

   // Увеличить количество товара в заказе
   const onClickPlus = (): void => {
      setDataContainer(product, (dataEl: Product) => {
         dataEl.amount += 1;
         dataEl.sum += Number(dataEl.price);
      });
   };

   return (
      <div
         className={cn({
            [s.product]: location !== 'inCart',
            [s.inProductsPanel]: location === 'inProductsPanel',
            [s.inOrder]: location === 'inOrder',
            [s.inCart]: location === 'inCart',
         })}
      >
         {location === 'inCart' ? (
            <img className={s.productImg} src={product.img} alt='' />
         ) : (
            <>
               <div className={s.productName}>{product.name}</div>
               <img className={s.productImg} src={product.img} alt='' />
               <div className={s.productInfo}>
                  <div>{location === 'inProductsPanel' ? product.price + '₽' : product.sum + '₽'}</div>
                  <div>{location !== 'inProductsPanel' && `${product.amount} шт.`}</div>
               </div>
            </>
         )}
         {location === 'inProductsPanel' ? (
            <button disabled={product.selected} className={s.productButton} type='button' onClick={onClickAdd}>
               +
            </button>
         ) : (
            <div className={s.productEdit}>
               {location === 'inCart' && (
                  <div className={s.productInfo}>
                     <div>Название: {product.name}</div>
                     <div>Цена: {product.price + '₽'}</div>
                     <div>Количество: {`${product.amount} шт.`}</div>
                  </div>
               )}
               <div
                  className={cn({
                     [s.productEdit__InCart]: location === 'inCart',
                     [s.productEdit_InOrder]: location === 'inOrder',
                  })}
               >
                  <button className={s.productEdit__Delete} onClick={onClickDelete}>
                     <img src={deleteImg} alt='' width='35px' />
                  </button>
                  <div className={s.productEdit__Count}>
                     <div className={s.productEdit__CountSign}>
                        <button className={s.productEdit__CountSign_Minus} type='button' onClick={onClickMinus}>
                           -
                        </button>
                     </div>
                     <div className={s.productEdit__CountSign}>
                        <button className={s.productEdit__CountSign_Plus} type='button' onClick={onClickPlus}>
                           +
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Goods;
