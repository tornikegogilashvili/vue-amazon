import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import i18n from './i18n';
import scrollAnimation from './directives/scrollAnimation';
import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App);

app.directive('scrollAnimation', scrollAnimation);

app.use(store).use(router).use(i18n).use(MotionPlugin).mount('#app');
