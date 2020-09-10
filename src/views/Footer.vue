<template>
<div class="footer">
<v-footer
    id="footer"
    class="justify-center align-center py-4"
    color="blue darken-3"
    dark
    height="auto"
  >
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <h5 class="mb-3">
            <v-layout
              align-center
              column
              justify-center
            >
              <v-img
                contain
                height="100px"
                :src = "image_src"
                width="100px"
              />
            </v-layout>
          </h5>
        </v-flex>
        <v-flex xs12>
          <v-layout justify-center mb-3>
            <a
              v-for="(social, i) in socials"
              :key="i"
              :href="social.href"
              :title="social.title"
              class="mx-3"
              target="_blank"
              rel="noopener"
            >
              <v-icon
                dark
                v-text="social.icon"
              />
            </a>
          </v-layout>
        </v-flex>
        <v-flex
          xs12
          sm8
          md5
          mx-auto
        >
          <v-form
            action="https://www.getrevue.co/profile/vuetify/add_subscriber"
            method="post"
            name="revue-form"
            target="_blank"
          >
            <v-text-field
              id="member_email"
              v-model="email"
              class="v-text-field--rounded"
              color="secondary"
              type="email"
              name="member[email]"
              solo
              flat
              hide-details
              label="Email Address"
            >
              <template v-slot:append>
                <v-btn
                  type="submit"
                  color="secondary"
                  name="member[subscribe]"
                  value="Subscribe"
                  @click="email = ''"
                >
                  Subscribe
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
          <div class="text-xs-center caption">
            Subscribe to get <strong>Latest</strong> updates
                     </div>
        </v-flex>
        <v-flex xs12 />
        <!--<v-flex
          xs12
          my-5
          text-xs-center
        >
          
        </v-flex>-->
        <v-flex xs12>
          <v-layout
            column
            text-xs-center
          >
            <div>
            <!--  Released under the&nbsp;
              <a
                href="https://opensource.org/licenses/MIT"
                class="grey--text text--lighten-1"
                rel="noopener"
                target="_blank"
              >
                MIT License
              </a>-->
              <div class="mb-3">
                Copyright &copy; 2019-{{ (new Date()).getFullYear() }} DORTS Inc.
              </div>
              <a
                class="grey--text text--lighten-1"
                target="_blank"
                rel="noopener"
                href="https://www.iubenda.com/privacy-policy/76325752"
              >
                Privacy Policy
              </a>
              &nbsp;•&nbsp;
              <a
                class="grey--text text--lighten-1"
                target="_blank"
                rel="noopener"
                href="https://www.iubenda.com/privacy-policy/76325752/cookie-policy"
              >
                Cookie Policy
              </a>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</div>
  </template>

<script>
  export default {
  
     
    data: () => ({
      image_src: require("../assets/dotslogo.png"),
      drawer:false,
      email:'',
         socials: [
        {
          icon: 'mdi-facebook',
          href: 'https://www.facebook.com/ebbs.org/',
          title: 'Facebook'
        },
        
        {
          icon: 'mdi-instagram',
          href: 'https://www.instagram.com/ebbsorg/',
          title: 'Instagram'
        },
        {
          icon: 'mdi-youtube',
          href: 'https://www.youtube.com/channel/UCKZ6MTDGFMwg4w0PZjOfNvA',
          title: 'Youtube'
        },
        {
          icon: 'mdi-twitter',
          href: 'https://twitter.com/ebbsorg',
          title: 'Twitter'
        },
        
        
      ]
    
    })
  }
  </script>