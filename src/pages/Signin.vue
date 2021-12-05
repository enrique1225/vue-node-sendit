<template>
	<div class="signin">
		<v-card class="signin_card">
			<v-card-title>
				<v-spacer></v-spacer>
				<div class="signin_title">
					Log in
				</div>
				<v-spacer></v-spacer>
				<v-card-text>
					<form autocomplete="off">
						<input id="email" type="email" autocomplete="off" placeholder="E-Mail Address" class="signinform">
						<input id="password" type="password" autocomplete="off" placeholder="Password" class="signinform">
						<v-checkbox label="Remember me"></v-checkbox>						
						<button class="formbtn" @click="login()"> Login </button>
						<router-link to="/signup" style="text-decoration: none;">
							<p class="form_suggestion"> Want to sign up as a host? Click here</p>
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
	name: 'Signin',
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
				this.$store.dispatch('signin', this.profile)
			}
		},
	},
	computed: { ...mapGetters(['user']) },
}
</script>

<style scoped></style>
