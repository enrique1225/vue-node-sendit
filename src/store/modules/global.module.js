const state = {
	snackbar: {
		message: '',
		color: '',
		display: false,
	},
}

const getters = {
	snackbar: (state) => {
		return state.snackbar
	},
}

const actions = {
	displaySnack: ({ commit }, payload) => {
		commit('snackbar', payload)
	},
}

const mutations = {
	snackbar: (state, payload) => {
		state.snackbar = {
			message: payload.message,
			color: payload.color,
			display: payload.display,
		}
		setTimeout(async () => {
			state.snackbar.display = false
		}, 2000)
		// state.snackbar.display = false
	},
}

export default {
	state,
	getters,
	mutations,
	actions,
}
