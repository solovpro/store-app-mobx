import { types } from 'mobx-state-tree';

import { Product } from '../types/types';

import product1 from '../assets/img/product-1.png';
import product2 from '../assets/img/product-2.png';
import product3 from '../assets/img/product-3.png';
import product4 from '../assets/img/product-4.png';
import product5 from '../assets/img/product-5.png';
import product6 from '../assets/img/product-6.png';
import product7 from '../assets/img/product-7.png';
import product8 from '../assets/img/product-8.png';
import product9 from '../assets/img/product-9.png';
import product10 from '../assets/img/product-10.png';

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
      data: types.optional(types.array(dataModel), [
         {
            id: 1,
            img: product1,
            name: 'Товар1',
            price: '50',
            selected: false,
            amount: 0,
            sum: 0,
         },
         {
            id: 2,
            img: product2,
            name: 'Товар2',
            price: '100',
            selected: false,
            amount: 0,
            sum: 0,
         },
         {
            id: 3,
            img: product3,
            name: 'Товар3',
            price: '150',
            selected: false,
            amount: 0,
            sum: 0,
         },
         {
            id: 4,
            img: product4,
            name: 'Товар4',
            price: '200',
            selected: false,
            amount: 0,
            sum: 0,
         },
         {
            id: 5,
            img: product5,
            name: 'Товар5',
            price: '250',
            selected: false,
            amount: 0,
            sum: 0,
         },
         {
            id: 6,
            img: product6,
            name: 'Товар6',
            price: '300',
            selected: false,
            amount: 0,
            sum: 0,
         },
         {
            id: 7,
            img: product7,
            name: 'Товар7',
            price: '350',
            selected: false,
            amount: 0,
            sum: 0,
         },
         {
            id: 8,
            img: product8,
            name: 'Товар8',
            price: '400',
            selected: false,
            amount: 0,
            sum: 0,
         },
         {
            id: 9,
            img: product9,
            name: 'Товар9',
            price: '450',
            selected: false,
            amount: 0,
            sum: 0,
         },
         {
            id: 10,
            img: product10,
            name: 'Товар10',
            price: '500',
            selected: false,
            amount: 0,
            sum: 0,
         },
      ]), // Данные о товарах
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
