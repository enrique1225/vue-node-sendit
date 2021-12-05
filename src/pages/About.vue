<template>
	<div>
		<v-card flat tile class="pa-0 ma-0" color="teal lighten-1">
			<div class="s-about">
        		<v-card>
					<v-card-title>
						<v-spacer></v-spacer>
						<div class="black--text text01">Send it</div>
						<v-spacer></v-spacer>
					</v-card-title>
					<v-card-text>
						<div class="text-center text02"> About Us </div>
						<v-divider color="white"></v-divider>
						<div class="text-center pa-5 text03">
							Send it was built during the height of the COVID19 outbreak as a side project of event WiFi company
							<a href="https://www.quickconnectwireless.net/"> Quick Connect Wireless</a>. <br>
							Send it launched with the aim of assisting those struggling to make ends meet in the creative 
							and eventing economy which was highly affected due to the global pandemic. <br>
							Send it dreams to be a one stop shop for those seeking to deliver live, 
							interactive content to their audiences.
						</div>
					</v-card-text>
        		</v-card>
				<v-divider class="my-10"></v-divider>
				<div class="text-center text05 my-5">
					Our Solutions
				</div>
				<div>
					<SolutionCarousel :solutions="solutions" />
				</div>
			</div>
		</v-card>
		<v-footer color="#ffffff00">
			<v-spacer></v-spacer>
			<PageFooter />
			<v-spacer></v-spacer>
		</v-footer>
	</div>
</template>

<script>
import PageFooter from '@/components/PageFooter'
import SolutionCarousel from '@/components/SolutionCarousel'

export default {
	name: 'About',
	components: {
		PageFooter,
		SolutionCarousel,
	},
	data: () => ({
		solutions: [
			{
				icon: 'user-01.jpg',
				name: 'Virtual Classrooms',
				description:
					'Send it can build and deploy custom real-time classroom environments. Speak to us about how we can assist.',
			},
			{
				icon: 'user-02.jpg',
				name: 'Zero-rated and Reverse Billed Video',
				description:
					'Pick up the data cost of your audience by covering the cost of their mobile data to watch your live video and feed.',
			},
			{
				icon: 'user-05.jpg',
				name: 'Recieve Donations and Payments Within Video',
				description:
					'Insert a custom QR Code which viewers can scan to donate or pay.',
			},
		],
	}),
}
</script>

<style scoped>
a {
	text-decoration: none;
}
</style>
