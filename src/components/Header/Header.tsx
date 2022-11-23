import React from 'react';
import { Link } from 'react-router-dom';

import iconApp from '../../assets/img/icon-app.png';
import cart from '../../assets/img/cart.png';

import s from './Header.module.scss';

const Header: React.FC = () => {
   return (
      <div className={s.header}>
         <div className={s.headerContainer}>
            <div className={s.headerApp}>
               <Link to='/'>
                  <div className={s.headerApp__Icon}>
                     <img src={iconApp} alt='' width='30px' height='30px' />
                  </div>
               </Link>
               <div className={s.headerApp__Name}>Store app</div>
            </div>
            <div className={s.headerInfo}>
               <Link className={s.headerInfo__Cart} to='/cart'>
                  <img src={cart} alt='' width='25px' height='25px' />
               </Link>
               <div className={s.headerInfo__Separation} />
               <div className={s.headerInfo__Count}>1</div>
            </div>
         </div>
      </div>
   );
};

export default Header;
