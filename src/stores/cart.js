import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(item) {
      this.items.push(item);
    },
    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
  },
});