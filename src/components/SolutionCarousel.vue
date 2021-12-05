<template>
	<v-carousel  hide-delimiter-background>
		<v-carousel-item v-for="(solution, i) in solutions" :key="i">
			<v-sheet height="100%" color="#ffffff00">
				<v-row class="fill-height"  justify="center">
					<div class="text-center" style="width:80%;">
						<v-row justify="center">
							<v-avatar class="mb-5" width="10.4rem" height="10.4rem">
								<v-img
									:src="
										require(`../assets/images/avatars/${solution.icon}`)
									"
								></v-img>
							</v-avatar>
						</v-row>
						<div class="black--text title text-center mb-10 solution_name">
							{{ solution.name }}
						</div>
						<v-card flat  tile color="#ffffff00" class="text-center">
							<div class="white--text text-center mt-5 description_text">
								{{ solution.description }}
							</div>
						</v-card>
					</div>
				</v-row>
			</v-sheet>
		</v-carousel-item>
	</v-carousel>
</template>

<script>
export default {
	name: 'TeamCarousel',
	props: ['solutions'],
}
</script>

<style scoped>
	.description_text{
		font-size: 2.125rem !important;
		font-weight: 400;
		line-height: 2.5rem;
		letter-spacing: 0.0073529412em !important;
		font-family: "lora-regular", serif;
	}
</style>
