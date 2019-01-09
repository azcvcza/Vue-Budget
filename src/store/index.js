import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    strict: false,
    state: {
        'ACCOUNT': [],
        'BUDGET': []
    },
    actions: {
        /*
		async getData(context) {
			await context.dispatch("getPage", 2);
			context.commit("setCategories", (await Axios.get(categoriesUrl)).data);
	},*/
    },
    mutations: {
        /*
		_setCurrentPage(state, page) {
			state.currentPage = page;
	},*/
    },
    getters: {
        /*
		processedProducts: (state, getters) => {
			return state.pages[state.currentPage];
	},*/
    }
})