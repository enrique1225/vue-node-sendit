import Vuex from 'vuex'
import Vue from 'vue'
import account from './modules/account.module'
import stream from './modules/stream.module'
import global from './modules/global.module'

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
})
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		account,
		stream,
		global,
	},
	plugins: [vuexLocal.plugin],
})
