import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomeView from '@/views/HomeView.vue';
import BrowseVendorsView from '@/views/BrowseVendorsView.vue';
import VendorDashboardView from '@/views/VendorDashboardView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import AccountView from '@/views/AccountView.vue';
import PickupScheduleView from '@/views/PickupScheduleView.vue';
import AccountCreationView from '@/views/AccountCreationView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
  {
    path: '/',
    children: [
      { path: '', name: 'Home', component: HomeView },
      { path: 'vendors', name: 'BrowseVendors', component: BrowseVendorsView },
      { path: 'vendors/:id', name: 'VendorDashboard', component: VendorDashboardView },
      { path: 'products/:id', name: 'ProductDetail', component: ProductDetailView },
      { path: 'account', name: 'Account', component: AccountView },
      { path: 'pickup-schedule', name: 'PickupSchedule', component: PickupScheduleView },
      { path: '/create-account', name: 'AccountCreation', component: AccountCreationView },
      { path: '/login', name: 'Login', component: LoginView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
