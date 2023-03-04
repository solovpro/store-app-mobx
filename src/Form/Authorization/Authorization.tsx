import React, { ReactNode } from 'react';
import cn from 'classnames';

// @ts-ignore
import logo from '../../assets/img/spichka.market.svg';
// @ts-ignore
import analytics from '../../assets/img/authorization-aside-analytics.svg';
// @ts-ignore
import warehouse from '../../assets/img/authorization-aside-warehouse.svg';
// @ts-ignore
import data from '../../assets/img/authorization-aside-data.svg';

// @ts-ignore
import s from './Authorization.module.scss';

interface ContainerAuthorizationProps {
   children: ReactNode;
}

const Authorization: React.FC<ContainerAuthorizationProps> = ({ children }) => {
   return (
      <div className={s.container}>
         <div>
            <div>
               <img src={logo} alt='' width={180} height={46} />
            </div>
            <div className={s.form}>{children}</div>
         </div>
         <div className={s.aside}>
            <p className={s.asideHeader}>
               Один клик <br /> до полной аналитики
            </p>
            <p className={s.asidePrice}>от 2 000 ₽ в месяц</p>
            <div className={s.asideIcons}>
               <div className={cn(s.asideIcons__Item, s.asideIcons__ItemFirst)}>
                  <img src={data} alt='' />
                  <p className={s.asideIcons__ItemText}>
                     Автоматическая <br /> загрузка данных
                  </p>
               </div>
               <div className={s.asideIcons__Item}>
                  <img src={analytics} alt='' />
                  <p className={s.asideIcons__ItemText}>
                     Гибкая настройка <br /> аналитики
                  </p>
               </div>
               <div className={s.asideIcons__Item}>
                  <img src={warehouse} alt='' />
                  <p className={s.asideIcons__ItemText}>
                     Синхронизация <br /> со складом
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Authorization;
