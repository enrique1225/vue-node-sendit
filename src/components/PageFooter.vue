<template>
	<footer flat tile color="#ffffff00">
		<v-row>
			<v-col justify="center" align="center">
				<v-img
					src="../assets/images/logo-s.png"
					width="140"
					class="ma-5 footerlogo"
				></v-img>
			</v-col>
		</v-row>
		<v-row>
			<!-- Left -->
			<v-col cols="12" lg="6" md="6" sm="6">
				<div class="text-center my-5">
					<v-btn text to="/about" class="footer_text">
						About
					</v-btn>
				</div>
				<div class="text-center mb-5">
					<v-btn text to="/refer" class="footer_text">
						Refer a Host
					</v-btn>
				</div>
			</v-col>
			<!-- Right -->
			<v-col cols="12" lg="6" md="6" sm="6">
				<div class="text-center my-5">
					<v-btn text to="/pricing" class="footer_text">
						Pricing
					</v-btn>
				</div>
				<div class="text-center mb-5">
					<v-btn text to="/partner" class="footer_text">
						Partner with us
					</v-btn>
				</div>
			</v-col>
		</v-row>
		<div class="text-center copyright-text">
			© Copyright SendIt 2020
		</div>
	</footer>
</template>

<script>
export default {
	name: 'PageFooter',
}
</script>

<style scoped>
	footer{
		width: 66.6%;
	}
	.footer_text{
		color: white;
		font-size: 16px;
		text-transform: inherit;
	}
	.copyright-text{
		margin-top: 3.4rem;
		text-align: center;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.2);
		font-family: "montserrat-light", sans-serif;
	}
</style>
