import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

Vue.use(VeeValidate);
// Vue.use(VeeValidate, {
//     errorBagName: 'vErrors'
// });
// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

new Vue({
    el: '#app',
    // data: {
    //     errors: {}
    // },
    router,
    store,
    render: h => h(App)
});
