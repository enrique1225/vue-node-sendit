<template>
  <v-container fluid fill-height>
    <v-card class="mx-auto px-lg-1 py-5" width="600px">
      <v-card-title>
        <v-spacer></v-spacer>
        <div class="display-1">Create Event</div>
        <v-spacer></v-spacer>
        <v-card-text>
          <v-form @submit.prevent>
            <v-text-field label="What are you calling the event?" placeholder="Event name"></v-text-field>
            <v-text-field
              label="Enter the event url"
              placeholder="friendly-name"
              prefix="https://app.sendit.media/"
            ></v-text-field>
            <div class="white--text title">Intro Video</div>
            <div class="grey--text header">
              Record a brief explainer video for your custom event
              page.
            </div>

            <ClipCamera />

            <v-card-actions>
              <v-btn color="success" width="100%" @click=";(capture = false), (key += 1)">Next</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import ClipCamera from "@/components/Camera";
export default {
  name: "NewStream",
  components: { ClipCamera },
  data: () => ({
    capture: false,
    key: 0
  }),
  methods: {}
};
</script>

<style scoped></style>
