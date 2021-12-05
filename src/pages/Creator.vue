<template>
  <v-container fluid fill-height>
    <v-card class="mx-auto px-10 py-5" width="600px">
      <v-card-title>
        <v-spacer></v-spacer>
        <div class="display-1">Welcome!</div>
        <v-spacer></v-spacer>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              label="Tell us about yourself"
              placeholder="Your name"
              v-model="user.profile.first_name"
              :rules="[(value) => !!value || 'Name is required']"
            ></v-text-field>
            <div class="header white--text">Enter a brief bio</div>
            <v-textarea
              placeholder="People Who visit your page will see this"
              v-model="user.profile.about"
              :rules="[
								(value) =>
									!!value ||
									'A short description is required',
							]"
            ></v-textarea>
            <v-card-actions>
              <v-btn color="success" width="100%" @click="updateProfile()">Next</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Creator",
  data: () => ({}),
  computed: {
    ...mapGetters(["user", "status"])
  },
  methods: {
    updateProfile() {
      const valid = this.$refs.form.validate();
      if (valid) {
        const profile = this.user.profile;
        profile.user = this.user.id;
        this.$store.dispatch("profile", this.user.profile);
      }
    }
  }
};
</script>

<style scoped></style>
