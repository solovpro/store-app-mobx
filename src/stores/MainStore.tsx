import { types } from 'mobx-state-tree';

import { Product } from '../types/types';
import { data } from '../data/data';

const dataModel = types.model('arrayEl', {
   id: types.number,
   img: types.string,
   name: types.string,
   price: types.number,
   selected: types.boolean,
   amount: types.number,
   sum: types.number,
});

export const MainStore = types
   .model('MainStore', {
      isReceived: types.optional(types.boolean, false), // Состояние окна об успешном заказе
      data: types.optional(types.array(dataModel), data), // Данные о товарах
   })
   .views(self => ({
      // Высчитываем количество выбранных товаров
      get countSelectedComputed() {
         return self.data.reduce((count, item) => (item.selected ? (count += 1) : count), 0);
      },

      // Проверяем, есть ли выбранные товары
      get hasSelectedComputed() {
         return this.countSelectedComputed > 0;
      },

      // Высчитываем сумму выбранных товаров
      get sumComputed() {
         return self.data.reduce((sum, item) => (item.selected ? (sum += item.sum) : sum), 0);
      },
   }))
   .actions(self => ({
      // Изменения массива данных
      setDataContainer(product: Product, func: (dataEl: Product) => void): void {
         self.data.forEach((dataEl: Product): void => {
            if (dataEl.id === product.id) {
               func(dataEl);
            }
         });
      },

      // Очистить корзину
      clearCart(): void {
         self.data.forEach((dataEl: Product): void => {
            dataEl.amount = 0;
            dataEl.selected = false;
            dataEl.sum = 0;
         });
         self.isReceived = false;
      },

      // Открыть / Закрыть окно об успешном заказе
      setIsReceived(newValue: boolean): void {
         self.isReceived = newValue;
      },

      // Добавить товар в заказ
      selectProduct(product: Product): void {
         if (!product.selected) {
            this.setDataContainer(product, (dataEl: Product) => {
               dataEl.selected = true;
               dataEl.amount = 1;
               dataEl.sum = dataEl.price;
            });
         }
      },

      // Удалить товар из заказа или корзины
      deleteProduct(product: Product): void {
         this.setDataContainer(product, (dataEl: Product) => {
            dataEl.selected = false;
            dataEl.amount = 0;
         });
      },

      // Уменьшить количество товара в заказе
      minusAmount(product: Product): void {
         if (product.amount !== 1) {
            this.setDataContainer(product, (dataEl: Product) => {
               dataEl.amount -= 1;
               dataEl.sum -= dataEl.price;
            });
         } else {
            this.deleteProduct(product);
         }
      },

      // Увеличить количество товара в заказе
      plusAmount(product: Product): void {
         this.setDataContainer(product, (dataEl: Product) => {
            dataEl.amount += 1;
            dataEl.sum += dataEl.price;
         });
      },
   }));
