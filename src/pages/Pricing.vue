<template>
	<div>
		<v-card flat tile class="pa-0 ma-0">
			<div class="s-pricing">
				<div class="text-center subhead"> Our Pricing</div>
				<div class="mx-auto">
					<div class="text-center subcontent"> 
						Send it provides everything required <br>
						to earn money through live <br> streaming
					</div>
				</div>
				<v-divider color="white"></v-divider>

				<v-row class="pricing-stats">
					<div class="pricing_card">
						<img class="service_icon" src="../assets/images/megaphone_icon.png">
						<div class="service_text"> 
							Send it is <br>
							currently free for <br>
							free broadcasts
						</div>
						<button tile depressed class="price_btn" to="/price"> Get Early Access </button>
					</div>
					<div class="pricing_card">
						<img class="service_icon" src="../assets/images/square_icon.png">
						<div class="service_text"> 
							Included
						</div>
						<div class="service_list">
							<p> <img src="../assets/images/tick.png"> <span> Custom landing page </span> </p>
							<p> <img src="../assets/images/tick.png"> <span> 1,0000 attendees per event </span> </p>
							<p> <img src="../assets/images/tick.png"> <span> Weekly payouts </span> </p>
						</div>
					</div>
					<div class="pricing_card">
						<img class="service_icon" src="../assets/images/earth_icon.png">
						<div class="service_text"> 
							Payments
						</div>
						<p class="service_content">
							We charge a 5% facilitation fee for managing payment receipts. This includes credit card payment fees
						</p>
					</div>
				</v-row>
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
export default {
	name: 'Pricing',
	components: {
		PageFooter,
	},
}
</script>

<style scoped></style>
