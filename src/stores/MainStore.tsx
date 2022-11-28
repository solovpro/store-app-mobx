import { types } from 'mobx-state-tree';

import { Product } from '../types/types';
import { data } from '../data/data';

import product1 from '../assets/img/product-1.png';

const dataModel = types.model('arrayEl', {
   id: types.optional(types.number, 1),
   img: types.optional(types.string, product1),
   name: types.optional(types.string, 'Товар1'),
   price: types.optional(types.string, '50'),
   selected: types.optional(types.boolean, false),
   amount: types.optional(types.number, 0),
   sum: types.optional(types.number, 0),
});

export const MainStore = types
   .model('MainStore', {
      isReceived: types.optional(types.boolean, false), // Состояние окна об успешном заказе
      isSelected: types.optional(types.boolean, false), // Есть ли выбранные товары
      countSelected: types.optional(types.number, 0), // Количество выбранных товаров
      sum: types.optional(types.number, 0), // Сумма выбранных товаров
      data: types.optional(types.array(dataModel), data), // Данные о товарах
   })
   .actions(self => ({
      // Изменения массива данных
      setDataContainer(product: Product, func: (dataEl: Product) => void): void {
         self.data?.forEach((dataEl: Product): void => {
            if (dataEl.id === product?.id) {
               func(dataEl);
            }
         });
      },

      // Высчитываем итоговую сумму
      calculateSum(): void {
         self.sum = 0;
         self.data.forEach((product): void => {
            if (product.sum) {
               self.sum += product.sum;
            }
         });
      },

      // Высчитываем сколько товаров выбрано
      calculateSelected(): void {
         self.countSelected = 0;
         self.data?.forEach((product): void => {
            if (product.selected) {
               self.countSelected++;
            }
         });
      },

      // Есть ли товары, которые выбрали
      isSelectedProducts(): void {
         self.isSelected = false;
         self.data?.forEach(product => {
            if (product.selected) {
               self.isSelected = true;
            }
         });
      },

      // Очистить корзину
      clearCart(): void {
         self.data?.forEach((dataEl: Product) => {
            dataEl.amount = 0;
            dataEl.selected = false;
            dataEl.sum = 0;
         });
         self.isReceived = false;
         self.isSelected = false;
         self.countSelected = 0;
      },

      // Открыть / Закрыть окно об успешном заказе
      setIsReceived(newValue: boolean): void {
         self.isReceived = newValue;
      },

      // Добавить товар в заказ
      selectProduct(product: Product): void {
         if (!product?.selected) {
            this.setDataContainer(product, (dataEl: Product) => {
               dataEl.selected = true;
               dataEl.amount = 1;
               dataEl.sum = Number(dataEl.price);
            });
         }
         this.checkValues();
      },

      // Удалить товар из заказа или корзины
      deleteProduct(product: Product): void {
         this.setDataContainer(product, (dataEl: Product) => {
            dataEl.selected = false;
            dataEl.amount = 0;
            dataEl.sum = 0;
         });
         this.checkValues();
      },

      // Уменьшить количество товара в заказе
      minusAmount(product: Product): void {
         if (product.amount !== 1) {
            this.setDataContainer(product, (dataEl: Product) => {
               dataEl.amount -= 1;
               dataEl.sum -= Number(dataEl.price);
            });
            this.checkValues();
         } else {
            this.deleteProduct(product);
         }
      },

      // Увеличить количество товара в заказе
      plusAmount(product: Product): void {
         this.setDataContainer(product, (dataEl: Product) => {
            dataEl.amount += 1;
            dataEl.sum += Number(dataEl.price);
         });
         this.checkValues();
      },

      // Проверяем изменения после взаимодействия с товарами
      checkValues() {
         this.calculateSum();
         this.isSelectedProducts();
         this.calculateSelected();
      },
   }));
