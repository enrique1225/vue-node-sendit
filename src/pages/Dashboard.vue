<template>
	<v-container fluid fill-height>
		<v-card class="mx-auto px-12 py-5" width="600px">
			<v-card-title>
				<v-spacer></v-spacer>
				<div class="display-1">
					[Stream Name]
				</div>
				<v-spacer></v-spacer>
			</v-card-title>
			<div class="title text-center">
				April 25, 2020 12:00 PM
			</div>
			<div class="d-flex justify-space-between">
				<v-btn to="/stream" text>View Page</v-btn>
				<v-btn to="/creator" text>Edit Host</v-btn>
			</div>
			<div class="d-flex justify-center my-5">
				<v-btn light>Start Stream</v-btn>
			</div>
			<div class="d-flex justify-center my-5">
				<v-btn text to="/newstream">Edit Stream</v-btn>
			</div>
			<div class="text-center white--text title">
				Tickets sold
			</div>
			<div class="text-center white--text header">
				[Number]
			</div>
			<div class="text-center white--text title mt-7">
				Share Page
			</div>
			<div class="d-flex justify-center">
				<v-btn icon href="mailto:">
					<v-icon color="primary">{{ 'mdi-email' }}</v-icon>
				</v-btn>
			</div>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'Dashboard',
}
</script>

<style scoped></style>
