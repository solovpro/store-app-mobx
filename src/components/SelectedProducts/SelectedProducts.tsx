import React, { ReactElement } from 'react';
import { observer } from 'mobx-react';

import { useStore } from '../../stores/main.store';
import GoodsOrder from '../Goods/GoodsOrder';
import { Product } from '../../types/types';

import s from './SelectedProducts.module.scss';

// Блок выбранных товаров
const SelectedProducts: React.FC = observer(() => {
   const store = useStore();
   return (
      <aside className={s.selectedProducts}>
         <h1 className={s.selectedProducts__Header}>Заказ</h1>
         <div className={s.selectedProducts__Goods}>
            {store.hasSelectedComputed ? (
               <ul>
                  {store.data.map((product: Product): ReactElement | undefined => {
                     if (product.selected) {
                        return (
                           <li key={product.id}>
                              <GoodsOrder product={product} />
                           </li>
                        );
                     }
                  })}
                  <h2 className={s.selectedProducts__GoodsResult}>Сумма заказа: {store.sumComputed} р</h2>
               </ul>
            ) : (
               <p className={s.selectedProducts__GoodsNotSelected}>Нет выбранных товаров</p>
            )}
         </div>
      </aside>
   );
});

export default SelectedProducts;
