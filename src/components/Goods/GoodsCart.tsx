import React from 'react';
import { inject, observer } from 'mobx-react';

import { Product } from '../../types/types';

import deleteImg from '../../assets/img/delete.png';

import s from './Goods.module.scss';

interface ProductProps {
   product: Product;
   store?: any;
}

// Товар
const Goods: React.FC<ProductProps> = inject('store')(
   observer(({ product, store = {} }) => (
      <div className={s.inCart}>
         <img className={s.productImg} src={product.img} alt='' />
         <div className={s.productEdit}>
            <div className={s.productInfo}>
               <div>Название: {product.name}</div>
               <div>Цена: {product.price} Р</div>
               <div>Количество: {`${product.amount} шт.`}</div>
            </div>
            <div className={s.productEdit__InCart}>
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
      </div>
   ))
);

export default Goods;
