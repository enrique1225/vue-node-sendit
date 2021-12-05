import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Camera from '@/components/vue-camera'

import * as fs from 'fs-web'

// Object.defineProperty(Vue.prototype, '$fs', { value: fs })
Vue.prototype.$fs = fs

Vue.config.productionTip = false
Vue.component('camera', Camera)

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app')
