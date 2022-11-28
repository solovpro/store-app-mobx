import React from 'react';
import { inject, observer } from 'mobx-react';
import cn from 'classnames';

import { Product } from '../../types/types';

import deleteImg from '../../assets/img/delete.png';

import s from './Goods.module.scss';

interface ProductProps {
   location: LocationType;
   product: Product;
   store?: any;
}

type LocationType = 'inProductsPanel' | 'inOrder' | 'inCart';

// Товар
const Goods: React.FC<ProductProps> = inject('store')(
   observer(({ product = {}, location = '', store = {} }) => {
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
               <button
                  disabled={product.selected}
                  className={s.productButton}
                  type='button'
                  onClick={() => store?.selectProduct(product)}
               >
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
                     <button className={s.productEdit__Delete} onClick={() => store?.deleteProduct(product)}>
                        <img src={deleteImg} alt='' width='35px' />
                     </button>
                     <div className={s.productEdit__Count}>
                        <div className={s.productEdit__CountSign}>
                           <button
                              className={s.productEdit__CountSign_Minus}
                              type='button'
                              onClick={() => store?.minusAmount(product)}
                           >
                              -
                           </button>
                        </div>
                        <div className={s.productEdit__CountSign}>
                           <button
                              className={s.productEdit__CountSign_Plus}
                              type='button'
                              onClick={() => store?.plusAmount(product)}
                           >
                              +
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      );
   })
);

export default Goods;
