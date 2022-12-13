import React from 'react';
import { inject, observer } from 'mobx-react';
import cn from 'classnames';

import { Product } from '../../types/types';

import s from './Goods.module.scss';

interface ProductProps {
   product: Product;
   store?: any;
}

// Товар
const Goods: React.FC<ProductProps> = inject('store')(
   observer(({ product = {}, store = {} }) => (
      <div className={cn(s.product, s.inProductsPanel)}>
         <div className={s.productName}>{product.name}</div>
         <img className={s.productImg} src={product.img} alt='' />
         <div className={s.productInfo}>
            <div>{product.price} Р</div>
         </div>
         <button
            disabled={product.selected}
            className={s.productButton}
            type='button'
            onClick={() => store?.selectProduct(product)}
         >
            +
         </button>
      </div>
   ))
);

export default Goods;
