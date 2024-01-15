import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import vuetify from '@/vuetify';
import i18n from '@/i18n';

const app = createApp(App);

app.use(createPinia())
  .use(router)
  .use(vuetify)
  .use(i18n);

app.mount('#app');
