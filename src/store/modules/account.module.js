import api from '@/services/'
import router from '@/router/'

import axios from 'axios'
const state = {
	status: {
		authenticated: false,
	},
	user: {
		id: null,
		email: '',
		profile: {
			first_name: '',
			about: '',
		},
		remember: false,
	},
}
const getters = {
	status: (state) => {
		return state.status
	},
	user: (state) => {
		return state.user
	},
}
const actions = {
	signin({ commit }, user) {
		api.post('/user/signin/', user).then((response) => {
			const user = response.data
			localStorage.setItem(
				'sendit-auth',
				JSON.stringify({ token: user.token })
			)
			commit('loginSuccess', user)
		})
		// .catch((error) => {
		// 	// const status = error.response ? error.response.status : null
		// 	// if (status == 400) {
		// 	// 	alert('Invalid email or password')
		// 	// } else {
		// 	// 	console.error(error)
		// 	// }
		// })
	},

	async getProducts({ commit }, type) {
		let res = await axios.get(`/api/products/${type}`)

		commit('SET_PRODUCTS', { products: res.data, type })
	},
	async signup({ commit }, user) {
		try {
			await api.post('/user/signup/', user)
			// Signin user after signup to get token
			const response = await api.post('/user/signin/', user)
			localStorage.setItem(
				'sendit-auth',
				JSON.stringify({ token: response.data.token })
			)
			commit('signupSuccess', response.data)
		} catch (error) {
			console.log(error)
		}
	},

	profile({ commit }, profile) {
		// Identify user profile being created
		api.post('/user/profile/', profile)
			.then((response) => {
				console.log(response)
				commit('profileSuccess', response)
			})
			.catch((err) => {
				console.error(err)
			})
	},
	logout({ commit }) {
		commit('logout')
	},
}
const mutations = {
	loginSuccess(state, user) {
		state.status = { authenticated: true }
		state.user = { ...state.user, id: user.id }
		router.push('/home')
	},
	signupSuccess(state, user) {
		state.status = { authenticated: true }
		state.user = { ...state.user, id: user.id }
		router.push('/creator')
	},
	profileSuccess(state, data) {
		state.user.profile = data
		router.push('/newstream')
	},
	logout(state) {
		if (!state.user.remember) {
			;(state.status = {
				authenticated: false,
			}),
				(state.user = {
					id: null,
					email: '',
					profile: {
						first_name: '',
						about: '',
					},
					remember: false,
				})
		}
		router.replace(
			'/home',
			() => {},
			() => {}
		)
	},
}

export default {
	state,
	getters,
	mutations,
	actions,
}
