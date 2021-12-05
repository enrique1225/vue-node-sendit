<template>
	<div>
		<div class="refer">
			<v-container>
				<div class="text-center subhead my-5">
					REFER A HOST
				</div>
				<v-divider color="#d9d9d9"></v-divider>
					<v-row align="center">
						<v-col cols="12" lg="6" md="6" sm="6">
							<div class="refer_title">
								What is this?
							</div>
							<div class="refer_content">
								Nominate those you know or follow to host a live stream!
							</div>
						</v-col>
						<v-col cols="12" lg="6" md="6" sm="6">
							<v-form class="mt-7">
								<div class="refer_form">
									<label class="refer_label"> Your Name </label>
									<input type="text" placeholder="John Dae" class="refer_input">
								</div>
								<div class="refer_form">
									<label class="refer_label"> Your email </label>
									<input type="email" placeholder="text@mailbox.com" class="refer_input">
								</div>
								<div class="refer_form">
									<label class="refer_label"> Share a social media link of the person you're referring </label>
									<input type="email" placeholder="https://www.instagram.com/thisisbillgates/" class="refer_input">
								</div>								
								<button type="submit" class="refer_btn"> SUBMIT </button>
							</v-form>
						</v-col>
					</v-row>
			</v-container>
		</div>
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
	name: 'Refer',
	components: {
		PageFooter,
	},
}
</script>

<style scoped></style>
