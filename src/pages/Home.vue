<template>
  <div style="height: 100%;">
    <div>
      <div>
        <v-row class="bg-image">
          <div class="overlay"></div>
          <div class="shadow-overlay"></div>
          <v-col class="home-content__main">
            <h3>Welcome to sendit</h3>
            <h1 class="mb-4"> Create live <br> online events<br> with sent it</h1>
            <button class="joinbtn" outlined to="/signup" v-if="!status.authenticated">Join Send it</button>
          </v-col>
          <div class="home-content__scroll">
              <a href="#about" class="scroll-link smoothscroll">
                  <span>See More</span>
              </a>
          </div>
          <div class="home-content__line"></div>
        </v-row>
      </div>
    </div>
      <div class="s-about">
        <v-card>
          <div class="about__line"></div>
          <v-card-title>
            <v-spacer></v-spacer>
            <div class="black--text text01">Send it</div>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <div class="text-center text02">A live video platfrom. </div>
            <div class="text-center text04"> No software required. </div>
            <v-divider color="white"></v-divider>
            <div class="text-center pa-5 text03">
              Create free and pay-to-view live streams.<br>
              Interact with viewers through realtime chat.<br>
              Accept donations towards causes you care about while you broadcast.
            </div>
            <!-- Steps -->
            <div>
              <v-row class="about-stats">
                <div class="step">
                  <div class="text-center black--text about-number">1</div>
                  <div class="text-center title white--text">
                    Easily create a webpage to <br>
                    promote your virtual event.
                  </div>
                </div>
                <v-divider vertical color="white"></v-divider>
                <div class="step">
                  <div class="text-center black--text about-number">2</div>
                  <div class="text-center title white--text">
                    Accept tip donations <br>
                    or charge entry to your stream.
                  </div>
                </div>
                <v-divider vertical color="white"></v-divider>
                <div class="step">
                  <div class="text-center black--text about-number">3</div>
                  <div class="text-center title white--text">
                    Start your send it<br>
                    livestream with 1-click.
                  </div>
                </div>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <!-- Schedule -->
      <div class="s-clients">
        <div class="text-center subhead">SEND IT NOW</div>
        <div class="mx-auto">
          <div class="text-center subcontent"> Schedule your first live stream event now! </div>
          <div class="text-center" v-if="/*!status.authenticated*/true">
            <button
              tile
              depressed
              class="signupbtn"
              to="/signup"
            >SIGN UP TO SENDIT</button>
          </div>
        </div>
      </div>
      <v-footer>
        <v-spacer></v-spacer>
        <PageFooter />
        <v-spacer></v-spacer>
      </v-footer>
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    PageFooter
  },
  computed: { ...mapGetters(["user", "status"]) }
};
</script>

<style scoped>
/* home page first section */

</style>
