import axios from 'axios'
import router from '../router'
import store from '../store/index'

const api = axios.create({
	baseURL: process.env.VUE_APP_ROOT_API,
})

const whitelisted = ['signup', 'signin']
api.interceptors.request.use(
	(config) => {
		const url = config.url
		if (
			!url.split('/').includes('signup') &&
			!url.split('/').includes('signin')
		) {
			config.headers['Authorization'] = `Bearer: ${
				JSON.parse(localStorage.getItem('sendit-auth')).token
			}`
		}
		// config.headers = {
		// 	'Content-Type': 'application/json;charset=utf-8',
		// }
		config.headers['Content-Type'] = 'application/json;charset=utf-8'

		return config
	},
	() => {}
)

api.interceptors.response.use(
	(response) => response,
	(error) => {
		const status = error.response ? error.response.status : null
		if (status == 401) {
			router.push('signin')
		}
		if (status == 400) {
			if (router.currentRoute.name == 'signup')
				store.dispatch('displaySnack', {
					message: 'A user with that email already exists',
					color: 'error',
					display: true,
				})
			else
				store.dispatch('displaySnack', {
					message: 'Invalid username or password',
					color: 'error',
					display: true,
				})
		}
		if (status == 500) {
			store.dispatch('displaySnack', {
				message: 'Internal server error',
				color: 'error',
				display: true,
			})
		}
		return Promise.reject(error)
	}
)

export default api
