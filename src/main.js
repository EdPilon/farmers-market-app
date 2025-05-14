import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useAuthStore } from '@/stores/auth';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

// Initialize the authentication listener
const authStore = useAuthStore();
authStore.initAuthListener();

app.mount('#app');
