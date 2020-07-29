import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'babel-polyfill';
import '@/icons'; // icon
import 'amfe-flexible'
import '@/permission';
import {
    Uploader,
    Button,
    Slider,
    Circle
} from 'vant';

Vue.use(Uploader)
    .use(Button)
    .use(Slider)
    .use(Circle);
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')