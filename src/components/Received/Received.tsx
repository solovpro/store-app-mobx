import React from 'react';
import { Link } from 'react-router-dom';

import s from './Received.module.scss';

interface ReceivedProps {
   clearCart: () => void;
}

// Окно об успешном заказе
const Received: React.FC<ReceivedProps> = ({ clearCart }) => {
   return (
      <div className={s.received}>
         <div className={s.container} />
         <div className={s.receivedContent}>
            <div>Заказ принят!</div>
            <Link to='/store-app/' onClick={clearCart}>
               <div className={s.receivedContent__Button}>Ok</div>
            </Link>
         </div>
      </div>
   );
};

export default Received;
