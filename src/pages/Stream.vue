<template>
	<div class="stream">
		<v-card class="stream_card">
			<v-card-title>
				<div>
					<p class="stream_title"> {{ stream_name }} </p>
					<p class="stream_description"> with {{ host }} </p>
				</div>
				<v-spacer></v-spacer>
				<p class="stream_date"> April 25, 2020 12:00 PM </p>
			</v-card-title>
			<!-- Stream Video -->
			<v-row>
				<v-col cols="12" lg="8" md="8" sm="12">
					<v-card-text>
						<v-container v-if="!$vuetify.breakpoint.xs" class="px-0">
							<video
								src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
								type="video/mp4"
								width="100%"
								controls
							></video>
							<v-sheet>
								<!-- <StreamCam /> -->
							</v-sheet>
						</v-container>
						<video
							v-else
							src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
							type="video/mp4"
							width="100%"
							controls
						></video>
						<!-- <StreamCam v-else /> -->
					</v-card-text>
				</v-col>
				<v-col cols="12" lg="4" md="4" sm="12">
					<v-card class="chat_stream_card">
						<!-- <v-card-title> <p class="stream_title"> Live Chat </p></v-card-title> -->
						<v-form @submit.prevent>
							<v-card-text>
								<v-card
									height="300"
									class="chat"
									style="overflow-y: auto;"
									elevation="6"
									color="#2c2c38"
								>
									<div class="total_message">
										<div class="each_message"
											v-for="(message, i) in messages"
											:key="i"
										>
											<div class="d-flex">
												<div class="mr-4 my-2">
													<img :src="message.img" class="message_icon">
												</div>
												<div class="d-flex">
													<div>
														<div class="my-2">
															<p class="message_user"> {{ message.user }} </p>
														</div>
														<div>
															<div>														
																<p class="message_content"> {{ message.msg }}</p>
															</div>
														</div>
													</div>
													<v-btn
														icon
														v-if="
															message.msg != 'deleted' &&
																message.user ==
																	user.email
														"
														@click="
															messages[i].msg = [
																'deleted',
															]
														"
													>
													</v-btn>
												</div>
											</div>
										</div>
									</div>
								</v-card>
								<v-card
									class="mx-auto pa-2 my-5"
									color="transparent"
								>
								<p class="stream_description"> Enter your message below: </p>
									<textarea
										v-model="user_message"
										auto-grow
										rows="5"
										:label="
											status.authenticated
												? 'Enter message'
												: 'Please login to send messages'
										"
										class="mx-0 message_textarea"
										append-outer-icon="mdi-send"
										
									></textarea>
									<button class="send_message" @click="send()"> Send Message </button>
								</v-card>
							</v-card-text>
						</v-form>
					</v-card>
				</v-col>
			</v-row>

			
			<!-- About Stream -->
			<v-card class="about_stream_card">
				<v-card-title>
					<div>
						<p class="stream_title"> About this stream </p>
						<p class="stream_description"> {{ stream_name }} </p>
					</div>
				</v-card-title>
			</v-card>
			<!-- Chat -->
			
			<!-- About Host -->
			<v-card class="host_stream_card">
				<v-card-title>
					<div>
						<p class="stream_title"> About the host </p>
						<p class="stream_description"> with {{ host_description }} </p>
					</div>
				</v-card-title>
			</v-card>
		</v-card>
		<v-footer app class="stream_footer">
			<div class="white--text title"> ZAR 150 to join </div>
			<v-spacer></v-spacer>
			<button class="ticket_btn"> <img src="../assets/images/rec.png" style="margin-right: 10px"> Get a ticket</button>
		</v-footer>
	</div>
</template>

<script>
import StreamCam from '@/components/Camera'
import { mapGetters } from 'vuex'
export default {
	name: 'Stream',
	components: {
		StreamCam,
	},
	data: () => ({
		host: 'xyz',
		host_description: 'A description of the host',
		stream_name: 'My First Stream',
		stream_description: 'A description of the stream',
		user_message: '',
		messages: [
			{
				id: 1,
				img: '/img/avatar01.c45acc8c.jpg',
				user: 'John Dae', 
				msg: 'Amazing Stream, had a great time watching it!', 
			},
			{
				id: 2,
				img: '/img/avatar02.9abc43c9.jpg',
				user: 'Rebecca young', 
				msg: 'Just wow!', 
			},
			{
				id: 3,
				img: 'img/avatar03.70c86e09.jpg',
				user: 'Peter Beckham', 
				msg: 'This will help me so much, thank you!', 
			}
		],
	}),
	computed: {
		...mapGetters(['user', 'status']),
	},
	methods: {
		send() {
			if (!!this.user_message && this.user_message != ' ') {
				console.log(this.user_message)
				this.messages.push({
					user: 'James Pretoria',
					img: '/img/avatar01.c45acc8c.jpg',
					msg: this.user_message,
				})
				this.user_message = ''
			}
			else{
				console.log('no')
			}
		},
	},
}
</script>

<style scoped>
.chat::-webkit-scrollbar {
	/* width: 10px;
	color: black; */
}
.stream_footer{
	padding: 2rem 10%!important;
}
</style>
