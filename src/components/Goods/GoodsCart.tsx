import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from '../../stores/main.store';
import { Product } from '../../types/types';

import deleteImg from '../../assets/img/delete.png';

import s from './Goods.module.scss';

interface ProductProps {
   product: Product;
}

// Товар
const GoodsCart: React.FC<ProductProps> = observer(({ product }) => {
   const store = useStore();
   return (
      <article className={s.inCart}>
         <img className={s.productImg} src={product.img} alt='' />
         <div className={s.productEdit}>
            <div className={s.productInfo}>
               <p>Название: {product.name}</p>
               <p>Цена: {product.price} Р</p>
               <p>Количество: {`${product.amount} шт.`}</p>
            </div>
            <div className={s.productEdit__InCart}>
               <button className={s.productEdit__Delete} onClick={() => store.deleteProduct(product)}>
                  <img src={deleteImg} alt='' width='35px' />
               </button>
               <div className={s.productEdit__Count}>
                  <div className={s.productEdit__CountSign}>
                     <button
                        className={s.productEdit__CountSign_Minus}
                        type='button'
                        onClick={() => store.minusAmount(product)}
                     >
                        -
                     </button>
                  </div>
                  <div className={s.productEdit__CountSign}>
                     <button
                        className={s.productEdit__CountSign_Plus}
                        type='button'
                        onClick={() => store.plusAmount(product)}
                     >
                        +
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
});

export default GoodsCart;
