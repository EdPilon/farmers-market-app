import { defineStore } from 'pinia';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';

export const usePickupStore = defineStore('pickup', {
  state: () => ({
    pickups: [],
    loading: false,
    error: null,
  }),

  actions: {
    async schedulePickup(pickupDetails) {
      this.loading = true;
      this.error = null;
      try {
        const docRef = await addDoc(collection(db, 'pickups'), pickupDetails);
        this.pickups.push({ id: docRef.id, ...pickupDetails });
      } catch (err) {
        this.error = err.message;
        console.error('Error scheduling pickup:', err);
      } finally {
        this.loading = false;
      }
    },
  },
});
