import React from 'react';

import close from '../../assets/img/close.png';

import s from './Received.module.scss';

interface ReceivedProps {
   setIsReceived: React.Dispatch<React.SetStateAction<boolean>>;
}

const Received: React.FC<ReceivedProps> = ({ setIsReceived }) => {
   const onClick = () => {
      setIsReceived(false);
   };
   return (
      <div className={s.received}>
         <div className={s.container} onClick={onClick} />
         <div className={s.receivedContent}>
            <img className={s.receivedContent_Image} onClick={onClick} src={close} width='20px' height='20px' alt='' />
            <div>Заказ принят!</div>
         </div>
      </div>
   );
};

export default Received;
