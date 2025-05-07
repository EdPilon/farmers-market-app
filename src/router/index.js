import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomeView from '@/views/HomeView.vue';
import BrowseVendorsView from '@/views/BrowseVendorsView.vue';
import VendorDashboardView from '@/views/VendorDashboardView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import RecipesView from '@/views/RecipesView.vue';
import AccountView from '@/views/AccountView.vue';
import PickupScheduleView from '@/views/PickupScheduleView.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: HomeView },
      { path: 'vendors', name: 'BrowseVendors', component: BrowseVendorsView },
      { path: 'vendors/:id', name: 'VendorDashboard', component: VendorDashboardView },
      { path: 'products/:id', name: 'ProductDetail', component: ProductDetailView },
      { path: 'recipes', name: 'Recipes', component: RecipesView },
      { path: 'account', name: 'Account', component: AccountView },
      { path: 'pickup-schedule', name: 'PickupSchedule', component: PickupScheduleView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
