<template>
	<v-container fluid fill-height>
		<v-card class="mx-auto px-10 py-5" width="600px">
			<v-card-title>
				<v-spacer></v-spacer>
				<div class="display-1">
					Schedule your first stream
				</div>
				<v-spacer></v-spacer>
				<v-card-text>
					<v-form @submit.prevent>
						<div class="header white--text">
							About this stream
						</div>
						<v-textarea
							placeholder="Describe what people can expect from your stream"
							:rules="[
								(value) =>
									!!value || 'A description is required',
							]"
						></v-textarea>
						<!-- Schedule -->
						<div class="white--text title">
							<v-form v-model="form_valid">
								<!-- Start -->
								<div class="d-flex">
									<!-- Start date -->
									<v-menu
										:close-on-content-click="false"
										:return-value.sync="date.start_date"
										v-model="start_date_menu"
										ref="ref_start_date"
									>
										<template v-slot:activator="{ on }">
											<v-text-field
												label="Start Date"
												v-on="on"
												v-model="date.start_date"
												:autocomplete="false"
												:rules="[
													(value) =>
														!!value ||
														'A start date is required',
												]"
											></v-text-field>
										</template>
										<v-date-picker
											v-model="date.start_date"
										>
											<v-btn
												@click="
													$refs.ref_start_date.save(
														date.start_date
													)
												"
												tile
												dark
												text
											>
												Confirm
											</v-btn>
											<v-btn
												@click="start_date_menu = false"
												tile
												dark
												text
											>
												Cancel
											</v-btn>
										</v-date-picker>
									</v-menu>

									<!-- Start time -->
									<v-menu
										:close-on-content-click="false"
										:return-value.sync="date.start_time"
										v-model="start_time_menu"
										ref="ref_start_time"
									>
										<template v-slot:activator="{ on }">
											<v-text-field
												label="Start Time"
												v-on="on"
												v-model="date.start_time"
												:autocomplete="false"
												:rules="[
													(value) =>
														!!value ||
														'A start time is required',
												]"
											></v-text-field>
										</template>
										<v-time-picker
											v-model="date.start_time"
										>
											<v-btn
												@click="
													$refs.ref_start_time.save(
														date.start_time
													)
												"
												tile
												dark
												text
											>
												Confirm
											</v-btn>
											<v-btn
												@click="start_time_menu = false"
												tile
												dark
												text
											>
												Cancel
											</v-btn>
										</v-time-picker>
									</v-menu>
								</div>

								<!-- End -->
								<div class="d-flex">
									<!-- End date -->
									<v-menu
										:close-on-content-click="false"
										:return-value.sync="date.end_date"
										v-model="end_date_menu"
										ref="ref_end_date"
									>
										<template v-slot:activator="{ on }">
											<v-text-field
												label="End Date"
												v-on="on"
												v-model="date.end_date"
												:autocomplete="false"
												:rules="[
													(value) =>
														!!value ||
														'An end date is required',
												]"
											></v-text-field>
										</template>
										<v-date-picker v-model="date.end_date">
											<v-btn
												@click="
													$refs.ref_end_date.save(
														date.end_date
													)
												"
												tile
												dark
												text
											>
												Confirm
											</v-btn>
											<v-btn
												@click="end_date_menu = false"
												tile
												dark
												text
											>
												Cancel
											</v-btn>
										</v-date-picker>
									</v-menu>

									<!-- End time -->
									<v-menu
										:close-on-content-click="false"
										:return-value.sync="date.end_time"
										v-model="end_time_menu"
										ref="ref_end_time"
									>
										<template v-slot:activator="{ on }">
											<v-text-field
												label="End Time"
												v-on="on"
												v-model="date.end_time"
												:autocomplete="false"
												:rules="[
													(value) =>
														!!value ||
														'An end time is required',
												]"
											></v-text-field>
										</template>
										<v-time-picker v-model="date.end_time">
											<v-btn
												@click="
													$refs.ref_end_time.save(
														date.end_time
													)
												"
												tile
												dark
												text
											>
												Confirm
											</v-btn>
											<v-btn
												@click="start_time_menu = false"
												tile
												dark
												text
											>
												Cancel
											</v-btn>
										</v-time-picker>
									</v-menu>
								</div>
							</v-form>
						</div>
						<!-- Pricing -->
						<div class="white--text title">
							Pricing
						</div>
						<div class="d-flex flex-column">
							<v-radio-group v-model="paid">
								<v-radio label="free" :value="false"></v-radio>
								<v-radio label="paid" :value="true"></v-radio>
							</v-radio-group>
							<v-text-field
								v-if="paid"
								label="Enter amount"
								placeholder="00.00"
								prefix="R"
								v-model="amount"
								:rules="[
									(value) =>
										!!value || 'An amount is required',
									(v) =>
										v > 0 ||
										'The amount must be greater than 0',
								]"
							></v-text-field>
						</div>
						<v-card-actions>
							<v-btn
								color="success"
								width="100%"
								to="/dashboard"
								:disabled="!form_valid"
							>
								Next
							</v-btn>
						</v-card-actions>
					</v-form>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'StreamSchedule',
	data: () => ({
		paid: false,
		amount: 0.0,
		date: {
			start_date: '',
			end_date: '',
			start_time: '',
			end_time: '',
		},
		start_date_menu: false,
		end_date_menu: false,
		start_time_menu: false,
		end_time_menu: false,
		form_valid: false,
	}),
}
</script>

<style scoped></style>
