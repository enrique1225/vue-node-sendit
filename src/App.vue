<template>
	<div id="app" class="bg-image">
		<v-app class="bg-nostyle">
			<v-snackbar top :color="snackbar.color" v-model="snackbar.display">
				{{ snackbar.message }}
			</v-snackbar>
			<v-navigation-drawer app right v-model="nav">
				<v-expand-x-transition>
					<v-list nav dense>
						<v-list-item>
							<v-list-item-content>
								<v-list-item-title class="navtitle"
									>Navigation</v-list-item-title
								>
							</v-list-item-content>
						</v-list-item>
						<v-divider></v-divider>
						<v-list-item
							v-for="(link, i) in navLinks"
							@click="getHeaderColor(link)"
							:key="link.name"
							link
							class="mb-5"
							:to="link.to"
							:hidden="
								(link.name == 'Login' ||
									link.name == 'Signup') &&
									status.authenticated ||
									(link.name == 'Stream' && getEnvMode == 'development')
							"
						>
							<v-list-item-content>
								<v-list-item-title>{{
									link.name
								}}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-group
							v-for="(group, y) in linkGroups"
							:key="group.name"
							:hidden="
								group.name == 'Profile' && !status.authenticated
							"
						>
							<template v-slot:activator>
								<v-list-item-title>{{
									group.name
								}}</v-list-item-title>
							</template>
							<v-list-item
								link
								v-for="(sub, x) in group.sub"
								:key="sub.title"
								@click="$store.dispatch(sub.action)"
							>
								<v-list-item-title>{{
									sub.title
								}}</v-list-item-title>
							</v-list-item>
						</v-list-group>
					</v-list>
				</v-expand-x-transition>
			</v-navigation-drawer>
			<v-app-bar app flat class="headerColor" :class="hbc">
				<router-link to="/home">
					<img src="./assets/images/logo-s.png" class="logo"/>
				</router-link>
				<v-spacer></v-spacer>
				<v-app-bar-nav-icon
					@click="nav = !nav"
					class="mr-10"
					v-if="!$vuetify.breakpoint.xs"
				></v-app-bar-nav-icon>
				<v-app-bar-nav-icon
					@click="nav = !nav"
					v-else
				></v-app-bar-nav-icon>
			</v-app-bar>
			<v-content>
				<router-view />
			</v-content>
		</v-app>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'App',
	data: () => ({
		selectedItem: null,
		hbc:"",
		nav: false,
		navLinks: [
			{ name: 'Home', color:'transparent', to: '/home' },
			{ name: 'Login', color:'headerColor01', to: '/signin' },
			{ name: 'Signup', color:'headerColor01', to: '/signup' },
			{ name: 'About', color:'headerColor02', to: '/about' },
			{ name: 'Pricing', color:'headerColor02', to: '/pricing' },
			{ name: 'Refer a host', color:'headerColor02', to: '/refer' },
			{ name: 'Partner with us', color:'headerColor02', to: '/partner' },
			{ name: 'Stream', color:'headerColor03', to: '/stream' },
		],
		linkGroups: [
			// {
			// 	name: 'Streams',
			// 	sub: [{ title: 'My Streams' }, { title: 'Subscribed Streams' }],
			// },
			{
				name: 'Profile',
				sub: [{ title: 'Logout', action: 'logout' }],
			},
		],
	}),
	computed: {
		...mapGetters(['user', 'status', 'snackbar']),
	},
	created() {
		// this.$vuetify.theme.dark = true
		this.$store.dispatch('displaySnack', {
			message: '',
			color: '',
			display: false,
		})
	},

	methods: {
		getAppBarColor() {
			switch (this.$route.name) {
				case 'about':
					return 'teal darken-1'
				case 'pricing':
					return 'teal darken-1'
				case 'refer':
					return 'teal darken-1'
				case 'partner':
					return 'teal darken-1'
				default:
					return ''
			}
		},
		getEnvMode() {
			return process.env.NODE_ENV
		},
		showNavbar: function(){
			this.nav = !this.nav;
		},
		getHeaderColor: function(link){
			this.showNavbar();
			this.hbc = link.color;
		}
	},
}
</script>

<style scoped>
@import './assets/css/sendit.css';
.v-content{
	padding: 0!important;
}
.bg-nostyle {
	background: none !important;
}
.logo{
	width: 80px;
    height: 46px;
    margin-left: 24px;
    margin-top: 10px;
}
.navtitle{
	font-family: "montserrat-semibold", sans-serif;
    font-size: 12px!important;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: .25rem;
    margin-bottom: 2.8rem;
    margin-top: .9rem;
    color: #64a29d;
}
.headerColor{
	background-color: transparent!important;
}
.headerColor01{
	background-color: rgb(13, 13, 21)!important;
}
.headerColor02{
	background-color: #538e89!important;
}
.headerColor03{
	background-color: #111111!important;
}
.theme--light.v-btn.v-btn--icon {
    color: white!important;
}
</style>
