<template>
	<v-container
		fill-height
		class="d-flex justify-center align-center flex-column"
	>
		<!-- SnapScan Dialog -->
		<v-dialog width="500">
			<template v-slot:activator="{ on }">
				<v-btn light v-on="on">
					SnapScan
				</v-btn>
			</template>
			<v-card light>
				<v-card-title>
					SnapScan details
				</v-card-title>
				<v-form v-model="ss_valid">
					<v-card-text>
						<v-text-field
							label="Recipient"
							v-model="recipient"
							:rules="[
								(value) =>
									!!value || 'An item name is required',
							]"
						></v-text-field>
						<v-text-field
							label="Amount"
							v-model="amount"
							type="number"
							prefix="R"
						></v-text-field>
					</v-card-text>
					<v-card-actions>
						<v-btn
							:dark="ss_valid"
							:disabled="!ss_valid"
							color="green darken-3"
							@click="submitSnap()"
						>
							Submit
						</v-btn>
					</v-card-actions>
				</v-form>
			</v-card>
		</v-dialog>
		<v-divider class="my-5"></v-divider>
		<!-- Zapper Dialog -->
		<v-dialog width="500">
			<template v-slot:activator="{ on }">
				<v-btn light v-on="on">
					Zapper
				</v-btn>
			</template>
			<v-card light>
				<v-card-title>
					Zapper details
				</v-card-title>
				<v-form>
					<v-card-text>
						<v-text-field
							label="Recipient"
							v-model="recipient"
							:rules="[
								(value) =>
									!!value || 'An item name is required',
							]"
						></v-text-field>
						<v-text-field
							label="Amount"
							v-model="amount"
							type="number"
							prefix="R"
						></v-text-field>
					</v-card-text>
				</v-form>
			</v-card>
		</v-dialog>
		<v-divider class="my-5"></v-divider>
		<!-- CreditCard Dialog -->
		<v-dialog width="500">
			<template v-slot:activator="{ on }">
				<v-btn light v-on="on">
					Credit Card
				</v-btn>
			</template>
			<v-card light>
				<v-card-title>
					PayFast details
				</v-card-title>
				<v-form
					action="https://www.payfast.co.za/eng/process"
					method="POST"
					v-model="pf_valid"
				>
					<v-card-text>
						<v-text-field
							label="Recipient"
							v-model="recipient"
							name="item_name"
							:rules="[
								(value) =>
									!!value || 'An item name is required',
							]"
						></v-text-field>
						<v-text-field
							label="Amount"
							v-model="amount"
							type="number"
							prefix="R"
							name="amount"
						></v-text-field>
						<input
							type="hidden"
							name="merchant_id"
							value="10000100"
						/>
						<input
							type="hidden"
							name="merchant_key"
							value="46f0cd694581a"
						/>
						<input
							type="hidden"
							name="return_url"
							value="http://sendit.media/return"
						/>
						<input
							type="hidden"
							name="cancel_url"
							value="http://sendit.media/cancel"
						/>
						<input
							type="hidden"
							name="notify_url"
							value="http://sendit.media/notify"
						/>
					</v-card-text>
					<v-card-actions>
						<!-- <v-btn @click="submitPayfast()"> -->
						<v-btn
							type="submit"
							tile
							depressed
							color="green darken-3"
							:disabled="!pf_valid"
							:dark="pf_valid"
						>
							Confirm
						</v-btn>
					</v-card-actions>
				</v-form>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
export default {
	name: 'Pay',
	data: () => ({
		recipient: '',
		amount: 0.0,
		pf_valid: true,
		ss_valid: true,
	}),
	methods: {
		submitSnap() {
			if (this.ss_valid) {
				window.location = `https://pos.snapscan.io/qr/TNQ1QmdA?id=${
					this.recipient
				}&amount=${this.amount * 100}`
			}
		},
	},
}
</script>

<style scoped></style>
