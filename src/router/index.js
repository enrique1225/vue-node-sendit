import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Signin from '@/pages/Signin'
import Signup from '@/pages/Signup'
import stream from '@/pages/Stream'
import About from '@/pages/About'
import Pricing from '@/pages/Pricing'
import Refer from '@/pages/Refer'
import Partner from '@/pages/Partner'
import Creator from '@/pages/Creator'
import NewStream from '@/pages/NewStream'
import StreamSchedule from '@/pages/StreamSchedule'
import Dashboard from '@/pages/Dashboard'
import Pay from '@/pages/Pay'

import store from '../store/index'

Vue.use(VueRouter)

const routes = [
	{ path: '/', redirect: '/home' },
	{ path: '/home', component: Home, name: 'home' },
	{ path: '/signin', component: Signin, name: 'signin' },
	{ path: '/signup', component: Signup, name: 'signup' },
	{ path: '/stream', component: stream, name: 'stream' },
	{ path: '/about', component: About, name: 'about' },
	{ path: '/pricing', component: Pricing, name: 'pricing' },
	{ path: '/refer', component: Refer, name: 'refer' },
	{ path: '/partner', component: Partner, name: 'partner' },
	{ path: '/creator', component: Creator, name: 'creator' },
	{ path: '/newstream', component: NewStream, name: 'newstream' },
	{
		path: '/schedulestream',
		component: StreamSchedule,
		name: 'schedulestream',
	},
	{ path: '/dashboard', component: Dashboard, name: 'dashboard' },
	{ path: '/pay', component: Pay, name: 'pay' },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

const guarded = ['newstream', 'schedulestream', 'creator']
const signedIn = ['signin', 'signup']

router.beforeEach((to, from, next) => {
	if (guarded.includes(to.name) && !store.getters.status.authenticated)
		next('/signin')
	else if (signedIn.includes(to.name) && store.getters.status.authenticated)
		next('/home')
	else next()
})

export default router
