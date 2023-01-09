import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useStore } from '../../stores/main.store';

import iconApp from '../../assets/img/icon-app.png';
import cart from '../../assets/img/cart.png';

import s from './Header.module.scss';

// Шапка сайта
const Header: React.FC = observer(() => {
   const store = useStore();
   return (
      <header className={s.header}>
         <nav className={s.headerContainer}>
            <Link to='/'>
               <div className={s.headerContent}>
                  <div className={s.headerContent__Icon}>
                     <img src={iconApp} alt='' width='30px' height='30px' />
                  </div>
                  <p className={s.headerContent__Name}>Store app</p>
               </div>
            </Link>
            <Link className={s.headerInfo} to='/cart'>
               <div className={s.headerInfo__Cart}>
                  <div className={s.headerInfo__CartImage}>
                     <img src={cart} alt='' width='25px' height='25px' />
                  </div>
                  <div className={s.headerInfo__CartSeparation} />
                  <div className={s.headerInfo__CartCount}>
                     <p className={s.headerInfo__CartCount_Text}>Выбранные товары:</p>
                     <div className={s.headerInfo__CartCount_Number}>{store.countSelectedComputed}</div>
                  </div>
               </div>
            </Link>
         </nav>
      </header>
   );
});

export default Header;
