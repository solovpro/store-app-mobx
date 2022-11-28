import React from 'react';
import { Link } from 'react-router-dom';

import iconApp from '../../assets/img/icon-app.png';
import cart from '../../assets/img/cart.png';

import s from './Header.module.scss';
import { inject, observer } from 'mobx-react';

interface HeaderProps {
   store?: any;
}

// Шапка сайта
const Header: React.FC<HeaderProps> = inject('store')(
   observer(({ store }) => {
      return (
         <div className={s.header}>
            <div className={s.headerContainer}>
               <div className={s.headerContent}>
                  <Link to='/store-app/'>
                     <div className={s.headerContent__Icon}>
                        <img src={iconApp} alt='' width='30px' height='30px' />
                     </div>
                  </Link>
                  <Link to='/store-app/'>
                     <div className={s.headerContent__Name}>Store app</div>
                  </Link>
               </div>
               <Link className={s.headerInfo} to='/store-app/cart'>
                  <div className={s.headerInfo__Cart}>
                     <div className={s.headerInfo__CartImage}>
                        <img src={cart} alt='' width='25px' height='25px' />
                     </div>
                     <div className={s.headerInfo__CartSeparation} />
                     <div className={s.headerInfo__CartCount}>
                        <div className={s.headerInfo__CartCount_Text}>Выбранные товары:</div>
                        <div className={s.headerInfo__CartCount_Number}>{store?.countSelected}</div>
                     </div>
                  </div>
               </Link>
            </div>
         </div>
      );
   })
);

export default Header;
