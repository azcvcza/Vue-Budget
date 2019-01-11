import Vue from 'vue'
import Vuex from 'vuex'
import { guid } from '../util';
Vue.use(Vuex);
export default new Vuex.Store({
    strict: false,
    accounts: {},
    budgets: {},
    actions: {
        addAccount(context) {
            context.commit('ADD_ACCOUNT', { account: data })
        }
    },
    mutations: {
        ADD_ACCOUNT(state, payload) {
            let id = guid();
            state.accounts[id] = Object.assign({ id: id }, payload.account)
        },
    },
    getters: {}
})