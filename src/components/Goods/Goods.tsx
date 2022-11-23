import React from 'react';
import cn from 'classnames';

import { Product } from '../../types/types';
import deleteImg from '../../assets/img/delete.png';

import s from './Goods.module.scss';

interface ProductProps {
   inProductsPanel: boolean;
   product: Product;
   // setData: React.Dispatch<React.SetStateAction<Object[]>>;
}

const Goods: React.FC<ProductProps> = ({ inProductsPanel, product }) => {
   return (
      <div
         className={cn(s.product, {
            [s.inProductsPanel]: inProductsPanel,
            [s.inOrder]: !inProductsPanel,
         })}
      >
         <img className={s.productImg} src={product.img} alt='' />
         <div className={s.productInfo}>
            <div>
               {product.name} | {product.price + '₽'}
            </div>
         </div>
         {inProductsPanel ? (
            <button className={s.productButton} type='button'>
               +
            </button>
         ) : (
            <div className={s.productEdit}>
               <button className={s.productEdit__Delete}>
                  <img src={deleteImg} alt='' width='35px' />
               </button>
               <div className={s.productEdit__Count}>
                  <div className={s.productEdit__CountSign}>
                     <button>-</button>
                  </div>
                  <div className={s.productEdit__CountSeparation} />
                  <div className={s.productEdit__CountSign}>
                     <button>+</button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Goods;
