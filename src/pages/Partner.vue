<template>
	<div>
		<v-parallax src="../assets/images/contact-bg.jpg" height="100vh">
			<div class="partner">
				<div class="partner_container">
					<div class="text-center subhead my-5">
						CONTACT US
					</div>
					<div class="mx-auto">
						<div class="text-center partner_subcontent"> 
							Get in touch to discuss your custom 
							requirements.
						</div>
					</div>
					<div>
						<v-row class="partner_card">
							<!-- Contact Form -->
							<v-col cols="12" lg="8" md="8" sm="12" class="ma-0 pa-0">
								<v-card class="contact_form">
									<v-form class="pa-7">
										<div class="contact_title">
											SEND US A MESSAGE
										</div>
										<v-text-field
											label="Your Name"
										></v-text-field>
										<v-text-field
											label="Your Email"
											type="email"
										></v-text-field>
										<v-text-field
											label="Subject"
										></v-text-field>
										<v-textarea
											label="Your Message"
										></v-textarea>
										<button type="submit" class="partner_btn"> SUBMIT </button>
									</v-form>
								</v-card>
							</v-col>
							<!-- Details -->
							<v-col cols="12" lg="4" sm="12" class="ma-0 pa-0">
								<v-card class="contact_info">
									<div class="contact_title">
										CONTACT INFO
									</div>
									<!-- Location -->
									<div class="title contactinfo_title mb-3 mt-10">
										Where to find us
									</div>
									<div class="subtitle-1 grey--text mb-3">
										77 Commissioner Street
									</div>
									<div class="subtitle-1 grey--text mb-3">
										Johannesburg
									</div>
									<div class="subtitle-1 grey--text mb-3">
										South Afrcia
									</div>
									<!-- Email -->
									<div class="title contactinfo_title mb-3 mt-10">
										Email us
									</div>
									<div class="subtitle-1 grey--text mb-3">
										info@sendit.media
									</div>
									<!-- Call -->
									<div class="title contactinfo_title mb-3 mt-10">
										Call us
									</div>
									<div class="subtitle-1 grey--text mb-3">
										Phone: (+27) 84 867 4449
									</div>
								</v-card>
							</v-col>
						</v-row>
					</div>
				</div>
			</div>
		</v-parallax>
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
	name: 'Partner',
	components: {
		PageFooter,
	},
}
</script>

<style scoped></style>
