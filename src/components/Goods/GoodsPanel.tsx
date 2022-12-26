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
            onClick={() => store.selectProduct(product)}
         >
            +
         </button>
      </div>
   );
});

export default GoodsPanel;
