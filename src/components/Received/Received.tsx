import React from 'react';
import { Link } from 'react-router-dom';

import s from './Received.module.scss';

interface ReceivedProps {
   clearCart: () => void;
}

// Окно об успешном заказе
const Received: React.FC<ReceivedProps> = ({ clearCart }) => {
   return (
      <article className={s.received}>
         <div className={s.container} />
         <div className={s.receivedContent}>
            <h2>Заказ принят!</h2>
            <Link to='/' onClick={clearCart}>
               <button className={s.receivedContent__Button}>Ok</button>
            </Link>
         </div>
      </article>
   );
};

export default Received;
