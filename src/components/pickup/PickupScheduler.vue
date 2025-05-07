<template>
    <div class="pickup-scheduler">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Schedule Your Pickup</h2>
      
      <!-- Date Selection -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Select a Date</h3>
        
        <div class="grid grid-cols-7 gap-2">
          <button
            v-for="date in availableDates"
            :key="date.dateString"
            @click="selectDate(date)"
            class="p-3 rounded-lg text-center transition-colors"
            :class="{
              'bg-gray-100 hover:bg-gray-200': !isDateSelected(date),
              'bg-green-500 text-white': isDateSelected(date)
            }"
            :disabled="!date.available"
          >
            <div class="text-xs mb-1">{{ date.dayName }}</div>
            <div class="font-semibold">{{ date.day }}</div>
          </button>
        </div>
      </div>
      
      <!-- Time Slot Selection -->
      <div v-if="selectedDate" class="mb-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Select a Time Slot</h3>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          <button
            v-for="slot in availableTimeSlots"
            :key="slot.id"
            @click="selectTimeSlot(slot)"
            class="p-3 rounded-lg text-center transition-colors"
            :class="{
              'bg-gray-100 hover:bg-gray-200': !isTimeSlotSelected(slot),
              'bg-green-500 text-white': isTimeSlotSelected(slot),
              'opacity-50 cursor-not-allowed': !slot.available
            }"
            :disabled="!slot.available"
          >
            <div>{{ slot.time }}</div>
            <div class="text-xs mt-1" :class="isTimeSlotSelected(slot) ? 'text-green-100' : 'text-gray-500'">
              {{ slot.available ? `${slot.spotsLeft} spots left` : 'Full' }}
            </div>
          </button>
        </div>
      </div>
      
      <!-- Pickup Notes -->
      <div v-if="selectedTimeSlot" class="mb-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Add Notes (Optional)</h3>
        
        <textarea
          v-model="pickupNotes"
          placeholder="Special instructions for pickup (e.g., I'll be in a red car)"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          rows="3"
        ></textarea>
      </div>
      
      <!-- Pickup Contact -->
      <div v-if="selectedTimeSlot" class="mb-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-3">4. Contact Information</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              id="phone"
              v-model="contactPhone"
              type="tel"
              placeholder="(123) 456-7890"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              v-model="contactEmail"
              type="email"
              placeholder="you@example.com"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      
      <!-- Summary and Confirmation -->
      <div v-if="selectedTimeSlot" class="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Pickup Summary</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <div class="text-sm text-gray-600">Date</div>
            <div class="font-medium">{{ formatDate(selectedDate.date) }}</div>
          </div>
          
          <div>
            <div class="text-sm text-gray-600">Time</div>
            <div class="font-medium">{{ selectedTimeSlot.time }}</div>
          </div>
          
          <div>
            <div class="text-sm text-gray-600">Items</div>
            <div class="font-medium">{{ cartItemCount }} items</div>
          </div>
          
          <div>
            <div class="text-sm text-gray-600">Vendors</div>
            <div class="font-medium">{{ uniqueVendorCount }} vendors</div>
          </div>
        </div>
        
        <div v-if="weatherForecast" class="mt-2 p-2 bg-blue-50 rounded-md">
          <div class="flex items-center">
            <span class="text-blue-600 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
              </svg>
            </span>
            <span class="text-sm">
              Weather forecast: {{ weatherForecast.condition }}, {{ weatherForecast.temperature }}°F
            </span>
          </div>
        </div>
      </div>
      
      <!-- Buttons -->
      <div class="flex justify-end">
        <button
          @click="clearSelection"
          class="mr-4 px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        
        <button
          @click="confirmPickup"
          class="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          :disabled="!canConfirm"
        >
          Confirm Pickup
        </button>
      </div>
      
      <!-- Confirmation Modal -->
      <div 
        v-if="showConfirmationModal" 
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg p-6 max-w-md w-full">
          <div class="text-center">
            <div class="text-green-500 flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-2">Pickup Scheduled!</h3>
            <p class="text-gray-600 mb-4">
              Your pickup has been scheduled for {{ formatDate(selectedDate?.date) }} at {{ selectedTimeSlot?.time }}.
            </p>
            
            <p class="text-sm text-gray-500 mb-6">
              You'll receive a confirmation email shortly with details. Please be on time!
            </p>
            
            <button
              @click="closeConfirmation"
              class="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useCartStore } from '@/stores/cart';
  import { usePickupStore } from '@/stores/pickup';
  import { useAuthStore } from '@/stores/auth';
  import { useWeatherStore } from '@/stores/weather';
  import dayjs from 'dayjs';
  
  const router = useRouter();
  const cartStore = useCartStore();
  const pickupStore = usePickupStore();
  const authStore = useAuthStore();
  const weatherStore = useWeatherStore();
  
  // State
  const availableDates = ref([]);
  const availableTimeSlots = ref([]);
  const selectedDate = ref(null);
  const selectedTimeSlot = ref(null);
  const pickupNotes = ref('');
  const contactPhone = ref('');
  const contactEmail = ref('');
  const showConfirmationModal = ref(false);
  
  // Generate available dates (next 7 days)
  const generateDates = () => {
    const dates = [];
    const today = dayjs();
    
    for (let i = 0; i < 7; i++) {
      const date = today.add(i, 'day');
      dates.push({
        date: date,
        dateString: date.format('YYYY-MM-DD'),
        day: date.format('D'),
        dayName: date.format('ddd'),
        available: true // In real app, check with backend for market days
      });
    }
    
    availableDates.value = dates;
  };
  
  // Generate time slots based on selected date
  const generateTimeSlots = (date) => {
    // In a real app, these would come from the backend
    const slots = [
      { id: 1, time: '9:00 AM - 10:00 AM', available: true, spotsLeft: 8 },
      { id: 2, time: '10:00 AM - 11:00 AM', available: true, spotsLeft: 5 },
      { id: 3, time: '11:00 AM - 12:00 PM', available: true, spotsLeft: 3 },
      { id: 4, time: '12:00 PM - 1:00 PM', available: true, spotsLeft: 7 },
      { id: 5, time: '1:00 PM - 2:00 PM', available: true, spotsLeft: 10 },
      { id: 6, time: '2:00 PM - 3:00 PM', available: false, spotsLeft: 0 }
    ];
    
    // If it's a weekend, add more slots
    const isWeekend = date.day() === 0 || date.day() === 6;
    if (isWeekend) {
      slots.push(
        { id: 7, time: '3:00 PM - 4:00 PM', available: true, spotsLeft: 12 },
        { id: 8, time: '4:00 PM - 5:00 PM', available: true, spotsLeft: 15 }
      );
    }
    
    availableTimeSlots.value = slots;
  };
  
  // Methods
  const selectDate = (date) => {
    selectedDate.value = date;
    selectedTimeSlot.value = null;
    generateTimeSlots(date.date);
    
    // Get weather forecast for the selected date
    weatherStore.getWeatherForecast(date.dateString);
  };
  
  const selectTimeSlot = (slot) => {
    if (slot.available) {
      selectedTimeSlot.value = slot;
    }
  };
  
  const isDateSelected = (date) => {
    return selectedDate.value && selectedDate.value.dateString === date.dateString;
  };
  
  const isTimeSlotSelected = (slot) => {
    return selectedTimeSlot.value && selectedTimeSlot.value.id === slot.id;
  };
  
  const formatDate = (date) => {
    if (!date) return '';
    return date.format('dddd, MMMM D, YYYY');
  };
  
  const clearSelection = () => {
    selectedDate.value = null;
    selectedTimeSlot.value = null;
    pickupNotes.value = '';
  };
  
  const confirmPickup = async () => {
    if (!canConfirm.value) return;
    
    try {
      await pickupStore.schedulePickup({
        userId: authStore.currentUserId,
        date: selectedDate.value.dateString,
        timeSlot: selectedTimeSlot.value.id,
        items: cartStore.items,
        notes: pickupNotes.value,
        contactPhone: contactPhone.value,
        contactEmail: contactEmail.value || authStore.user?.email
      });
      
      // Show confirmation modal
      showConfirmationModal.value = true;
      
      // Clear cart (or mark items as scheduled)
      cartStore.clearCart();
    } catch (error) {
      console.error('Error scheduling pickup:', error);
      // Show error notification
    }
  };
  
  const closeConfirmation = () => {
    showConfirmationModal.value = false;
    router.push('/account/pickups');
  };
  
  // Computed properties
  const cartItemCount = computed(() => {
    return cartStore.items.reduce((total, item) => total + item.quantity, 0);
  });
  
  const uniqueVendorCount = computed(() => {
    const vendorIds = new Set(cartStore.items.map(item => item.vendorId));
    return vendorIds.size;
  });
  
  const canConfirm = computed(() => {
    return (
      selectedDate.value &&
      selectedTimeSlot.value &&
      cartStore.items.length > 0 &&
      (contactPhone.value || (authStore.user && authStore.user.email))
    );
  });
  
  const weatherForecast = computed(() => {
    return weatherStore.forecast;
  });
  
  // Lifecycle hooks
  onMounted(() => {
    generateDates();
    
    // Pre-fill contact information if user is logged in
    if (authStore.user) {
      contactEmail.value = authStore.user.email;
      contactPhone.value = authStore.userProfile?.phone || '';
    }
  });
  </script>