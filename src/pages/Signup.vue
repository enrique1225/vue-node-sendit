<template>
	<div class="signin">
		<v-card class="signin_card">
			<v-card-title>
				<v-spacer></v-spacer>
				<div class="signin_title">
					Sign Up
				</div>
				<v-spacer></v-spacer>
				<v-card-text>
					<form autocomplete="off">
						<input id="email" type="email" autocomplete="off" placeholder="E-Mail Address" class="signinform">
						<input id="password" type="password" autocomplete="off" placeholder="Password" class="signinform">
						<button class="formbtn" @click="signup()"> Sign Up </button>
						<router-link to="/signin" style="text-decoration: none;">
							<p class="form_suggestion">Already have an account? Click here</p>
						</router-link>
					</form>
				</v-card-text>
			</v-card-title>
		</v-card>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'Signup',
	data: () => ({
		profile: {
			email: '',
			password: '',
		},
		rules: {
			required: (value) => !!value || 'This is a required field',
		},
		showPass: false,
	}),
	methods: {
		login() {
			var valid = this.$refs.form.validate()
			if (valid) {
				this.$store.dispatch('signup', this.profile)
			}
		},
	},
	computed: { ...mapGetters(['user']) },
}
</script>

<style scoped></style>
