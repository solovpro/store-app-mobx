import React from 'react';
// import { observer } from 'mobx-react';
import FormEntry from './Form/FormEntry/FormEntry';

const App: React.FC = () => {
   return (
      <>
         <FormEntry />
         {/*<Header />*/}
         {/*{store.isReceived && <Received clearCart={store.clearCart} />}*/}
         {/*{store.data ? (*/}
         {/*   <main className={s.app}>*/}
         {/*      <Routes>*/}
         {/*         <Route path='/' element={<Order />} />*/}
         {/*         <Route path='/cart' element={<Cart />} />*/}
         {/*      </Routes>*/}
         {/*   </main>*/}
         {/*) : (*/}
         {/*   <h1>Произошла ошибка при получении данных</h1>*/}
         {/*)}*/}
      </>
   );
};

export default App;
