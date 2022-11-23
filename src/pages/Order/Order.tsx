import React, { ReactElement } from 'react';
import { Product } from '../../types/types';
import cn from 'classnames';

import Goods from '../../components/Goods/Goods';

import s from './Order.module.scss';

interface OrderProps {
   data: Product[];
   // setData: React.Dispatch<React.SetStateAction<Object[]>>;
}

const Order: React.FC<OrderProps> = ({ data }) => {
   return (
      <div className={s.order}>
         <div className={cn(s.orderProducts, s.orderBlock)}>
            <div className={s.orderBlock__Header}>Товары</div>
            <div className={s.orderGoods}>
               {data.map(
                  (product: Product): ReactElement => (
                     <Goods key={product.id} product={product} inProductsPanel={true} />
                  )
               )}
            </div>
         </div>
         <div className={s.orderSeparation} />
         <div className={cn(s.orderSelected, s.orderBlock)}>
            <div className={s.orderBlock__Header}>Заказ</div>
            <div className={s.orderGoods}>
               {data.map(
                  (product: Product): ReactElement => (
                     <Goods key={product.id} product={product} inProductsPanel={false} />
                  )
               )}
            </div>
         </div>
      </div>
   );
};

export default Order;
