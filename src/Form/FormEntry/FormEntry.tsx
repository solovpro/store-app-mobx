import React from 'react';
import cn from 'classnames';

import Authorization from '../Authorization/Authorization';

// @ts-ignore
import yandex from '../../assets/img/yandex-icon.svg';
// @ts-ignore
import google from '../../assets/img/google-icon.svg';
// @ts-ignore
import sberId from '../../assets/img/sber-id-icon.svg';

// @ts-ignore
import s from './FormEntry.module.scss';

const FormEntry = () => {
   return (
      <div>
         <Authorization>
            <div className={s.form}>
               <div className={s.formHeader}>Вход</div>
               <div className={s.formContent}>
                  <div className={s.formContent__Inputs}>
                     <div className={s.inputContainer}>
                        <div className={s.inputHeader}>Телефон или электронная почта</div>
                        <input className={s.input} type='text' />
                     </div>
                     <div className={s.inputContainer}>
                        <div className={cn(s.inputHeader, s.inputHeader__Password)}>
                           <div className={s.inputHeader__PasswordName}>Пароль</div>
                           <div className={s.inputHeader__PasswordRecovery}>Восстановить</div>
                        </div>
                        <input className={s.input} type='password' />
                        <div className={s.inputCheckbox__Container}>
                           <input className={s.inputCheckbox} type='checkbox' />
                           <div className={s.inputCheckbox__Title}>Запомнить</div>
                        </div>
                     </div>
                  </div>
                  <div className={s.formContent__Buttons}>
                     <button className={s.buttonBackground}>Войти</button>
                     <button className={s.buttonTransparent}>Зарегестрироваться</button>
                  </div>
               </div>
            </div>
            <div className={s.entryHelp}>
               <p className={s.entryHelp__Header}>Войти с помощью</p>
               <div className={s.entryHelp__Icons}>
                  <img className={cn(s.entryHelp__IconsIcon, s.entryHelp__IconsIcon_First)} src={yandex} alt='' />
                  <img className={s.entryHelp__IconsIcon} src={google} alt='' />
                  <img className={s.entryHelp__IconsIcon} src={sberId} alt='' />
               </div>
            </div>
         </Authorization>
      </div>
   );
};

export default FormEntry;
