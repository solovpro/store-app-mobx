import React, { ReactElement, useState } from 'react';
import { observer } from 'mobx-react';
import { Product } from '../../types/types';
import cn from 'classnames';

import SelectedProducts from '../../components/SelectedProducts/SelectedProducts';
import GoodsPanel from '../../components/Goods/GoodsPanel';
import { useStore } from '../../stores/main.store';

import s from './Order.module.scss';

// Экран Заказа
const Order: React.FC = observer(() => {
   const [isAside, setIsAside] = useState<boolean>(false);
   const store = useStore();
   return (
      <section className={s.order}>
         <article
            className={cn(s.orderProducts, {
               [s.orderProducts__widthBig]: !isAside,
               [s.orderProducts__widthSmall]: isAside,
            })}
         >
            <h1 className={s.orderProducts__Header}>Товары</h1>
            <ul className={s.orderProducts__Goods}>
               {store.data.map((product: Product): ReactElement | undefined => (
                  <li key={product.id}>
                     <GoodsPanel product={product} />
                  </li>
               ))}
            </ul>
         </article>
         <div className={s.aside}>
            <div className={s.asideArrow} onClick={() => setIsAside(aside => !aside)}>
               <span
                  className={cn(s.asideArrow__Left, {
                     [s.asideArrow__LeftOpen]: !isAside,
                  })}
               ></span>
               <span
                  className={cn(s.asideArrow__Right, {
                     [s.asideArrow__RightOpen]: !isAside,
                  })}
               ></span>
            </div>
            <p className={s.asideText}>{isAside ? 'Закрыть' : 'Открыть'} заказ</p>
         </div>
         {isAside && <SelectedProducts />}
      </section>
   );
});

export default Order;
