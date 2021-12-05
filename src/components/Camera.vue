<template>
	<div>
		<v-snackbar v-model="notify" :color="snackbar_color" top>
			{{ snackbar_message }}
		</v-snackbar>
		<v-dialog width="800" v-model="recorded">
			<v-card>
				<v-card-title>
					Recorded clip
				</v-card-title>
				<v-card-text>
					<video
						ref="recorded_vid"
						width="100%"
						controls
						:src="url"
					></video>
				</v-card-text>
				<v-card-actions>
					<v-btn
						color="success"
						@click=";(recorded = false), closeCamera()"
					>
						Confirm
					</v-btn>
					<v-btn
						color="error"
						@click="
							;(recorded = false),
								(notify = true),
								snack('Select play to record another video', {
									color: 'info',
								})
						"
					>
						Record again
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<video
			ref="video"
			autoplay
			width="100%"
			class="my-5 mx-auto"
			muted
		></video>
		<div
			class="d-flex justify-space-around"
			v-if="foundCamera && !video_file"
		>
			<v-btn icon @click="startRecording()">
				<v-icon>
					{{ 'mdi-play' }}
				</v-icon>
			</v-btn>
			<v-btn icon @click="stopRecording()">
				<v-icon>
					{{ 'mdi-stop' }}
				</v-icon>
			</v-btn>
		</div>
		<v-text-field
			type="file"
			label="Or upload a video file"
			accept=".mp4, .m4a, .m4v, .f4v, .f4a, .m4b, .m4r, .f4b, .mov"
			v-model="video_file"
			v-if="!url"
			clearable
		></v-text-field>
	</div>
</template>

<script>
import 'vue-media-recorder/src/assets/scss/main.scss'
import * as fs from 'fs-web'
export default {
	components: {},
	data: () => ({
		constraints: {
			audio: true,
			video: {
				facingMode: 'user',
				// width: { min: 640, ideal: 1280, max: 1920 },
				// height: { min: 480, ideal: 720, max: 1080 },
			},
		},
		recorded: false,
		url: null,
		camera: true,
		notify: false,
		snackbar_message: '',
		snackbar_color: '',
		foundCamera: false,
		video_file: null,
	}),
	methods: {
		startRecording() {
			if (!this.camera) {
				this.startCamera()
			}
			if (this.camera && this.mediaRecorder.state != 'recording') {
				this.mediaRecorder.start()
				this.snack('Recording started', { color: 'success' })
				setTimeout(this.stopRecording, 15000)
			}
		},
		pauseRecording() {
			this.mediaRecorder.pause()
			console.log(this.mediaRecorder.state)
		},
		stopRecording() {
			if (!this.recorded && this.mediaRecorder.state != 'inactive') {
				this.mediaRecorder.stop()
				this.snack('Recording stopped', { color: 'accent' })
			}
		},
		closeCamera() {
			this.tracks.forEach((track) => {
				track.stop()
			})
			this.camera = false
			this.file = new File([this.blob], 'recordedVideo.mp4', {
				type: 'video/mp4',
			})
			this.snack('Recording saved', { color: 'success' })
		},
		startCamera() {
			navigator.mediaDevices
				.getUserMedia(this.constraints)
				.then((stream) => {
					this.stream = stream
					this.camera = true
					this.foundCamera = true
					this.tracks = stream.getTracks()
					this.$refs.video.srcObject = stream
					this.mediaRecorder = new MediaRecorder(stream)
					this.chunks = []
					this.mediaRecorder.ondataavailable = (ev) => {
						this.chunks.push(ev.data)
					}
					this.mediaRecorder.onstop = (ev) => {
						this.blob = new Blob(this.chunks, { type: 'video/mp4' })
						this.chunks = []
						this.url = window.URL.createObjectURL(this.blob)
						this.video_file = null
						// this.$refs.recorded_vid.src = this.url
						this.recorded = true
					}
				})
				.catch((err) => {
					console.error(err.name)
					if (err.name == 'NotFoundError') {
						this.snack('Camera not found', { color: 'error' })
					}
				})
		},
		snack(msg, { color: col }) {
			this.notify = true
			this.snackbar_message = msg
			this.snackbar_color = col || 'success'
			// setTimeout(() => (this.notify = false), 3000)
		},
	},
	mounted() {
		this.startCamera()
		this.snack(
			'Click Play to start recording a video of 15 seconds or less',
			{ color: 'success' }
		)
	},
	watch: {},
}
</script>

<style scoped></style>
