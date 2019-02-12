// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import localforage from 'localforage'

import vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
localforage.config({
    name: 'budget'
})
Vue.config.productionTip = false
Vue.use(vuetify)
    /* eslint-disable no-new */

new Vue({
    el: '#app',
    store,
    router,

    components: { App },
    template: '<App/>'
})