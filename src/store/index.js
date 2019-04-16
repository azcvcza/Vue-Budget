import Vue from 'vue'
import Vuex from 'vuex'
import { guid } from '../util'
Vue.use(Vuex)
export default new Vuex.Store({
    strict: false,
    state: {
        accounts: {},
        budgets: {},
        ACCOUNT_NAMESPACE: 'ACCOUNT-',
        IS_ACCOUNT_ADD: true,
    },
    actions: {
        addAccount(context) {
            console.log("actions ,addAccount,data:", data)
            context.commit('ADD_ACCOUNT', { account: data })
        }
    },
    mutations: {
        ADD_ACCOUNT(state, payload) {
            let id = guid();
            payload.id = state.ACCOUNT_NAMESPACE + id;
            //state.accounts[id] = { "sss": 111, "fuck": 'bitch' };
            //console.log("payload now", payload)
            state.accounts[id] = {};
            //console.log("after being an object")
            state.accounts[id] = Object.assign({ id: id }, payload);


            //console.log("after being assigned");
            //console.log("now state.accounts", state.accounts)
        },
        ACCOUNT_STATE_CHANGE(state) {
            console.log("mutation", state.IS_ACCOUNT_ADD)
            if (state.IS_ACCOUNT_ADD == true) {
                state.IS_ACCOUNT_ADD = false;
            } else {
                state.IS_ACCOUNT_ADD = true;
            }
        }
    },
    getters: {

    },

})