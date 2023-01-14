import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import { useStore } from '../../stores/main.store';
import { Product } from '../../types/types';

import s from './Goods.module.scss';

interface ProductProps {
   product: Product;
}

// Товар
const GoodsPanel: React.FC<ProductProps> = observer(({ product }) => {
   const store = useStore();
   return (
      <article className={cn(s.product, s.inProductsPanel)}>
         <p className={s.productName}>{product.name}</p>
         <img className={s.productImg} src={product.img} alt='' />
         <div className={s.productInfo}>
            <p>{product.price} р</p>
         </div>
         <button
            disabled={product.selected}
            className={s.productButton}
            type='button'
            onClick={() => store.selectProduct(product)}
         >
            {product.selected ? 'Добавлено' : 'Добавить в корзину'}
         </button>
      </article>
   );
});

export default GoodsPanel;
