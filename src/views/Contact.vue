<template>
<div class="contact">
  <br/>
   <v-img v-for="(item,i) in items"
      :key="i"
      :src="item.src" 
      height="600px"
      ></v-img>
    
   <v-container grid-list-md >
    <v-layout row wrap>
      <div>
      <h1> Get in touch</h1>
      <br/>
      <p>Call us now at +922123456789 , or fill out the form below, our representative will reach you out</p>
      </div> 
    </v-layout>
   </v-container>
      <!--
  <v-flex xs12 sm5 >
  
  

          <v-text-field
            v-model="last"
            label="Name*"
            
          ></v-text-field>
        
        
          <v-text-field
            v-model="last"
            label="E-Mail*"
            
          ></v-text-field>
        
         <v-textarea
          name="input-7-1"
          label="Message"
          value=""
          hint="Hint text"
        ></v-textarea>
          
         <v-btn @click="submit">submit</v-btn> 
           
        <v-card>
          <p>Subscribe to get latest updates!</p>
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mail*"
            >
          </v-text-field>
          <v-flex xs12>
          <v-btn block @click="submit">Subscribe Now</v-btn> </v-flex>
        </v-card>
     
</v-flex>--> 
 
    
    <v-container grid-list-md >
    <v-layout row wrap>
       
          
        <v-container  >
    <v-layout >
      <v-flex xs 12 sm4>
         <v-img v-for="(item,i) in items"
      :key="i"
      :src="item.src1" 
       
      ></v-img>
      </v-flex>
      <v-flex xs12 sm8>
      
           <!-- <v-flex xs>
             
            <base-subheading>Contact</base-subheading>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-avatar
                  color="light-blue"
                >
                  <v-icon
                    
                    dark
                  >
                    mdi-email-outline
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title >EMAIL</v-list-tile-title>
                <v-list-tile-sub-title >
                  ebbspak@outlook.com
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar
                  color="light-blue"
                >
                  <v-icon
                    
                    dark
                  >
                    mdi-map-marker
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>Location</v-list-tile-title>
                <v-list-tile-sub-title>
                  Karachi,Pakistan
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar
                  color="light-blue"
                >
                  <v-icon
                   
                    dark
                  >
                    mdi-phone
                  </v-icon>
                </v-list-tile-avatar>
               <span class='text--primary'>Ali Connors</span> 03451234567
                
              </v-list-tile>
            </v-list>
          
          </v-flex> -->
          <v-col cols="12" sm="10" md="8" lg="6">
     
        <v-card-text>
          
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Full Name"
            outline
            required
          ></v-text-field>
          
          
          
          <v-text-field
            ref="zip"
            v-model="zip"
            :rules="[() => !!zip || 'This field is required']"
            label="Email"
            required
            outline
          ></v-text-field>
         
          <v-text-field
            ref="state"
            v-model="state"
            :rules="[() => !!state || 'This field is required']"
            label="State/Province/Region"
            required
            outline
            ></v-text-field>
          <v-autocomplete
            ref="country"
            v-model="country"
            :rules="[() => !!country || 'This field is required']"
            :items="countries"
            label="Country"
            placeholder="Select..."
            outline
            required
          ></v-autocomplete>
           <v-textarea
           height="120px"
          outline
          name="input-7-4"
          label="Message"
        ></v-textarea>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text color="primary" @click="resetForm">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit">Submit</v-btn>
        </v-card-actions>
     
    </v-col>
      </v-flex>
    </v-layout>
        </v-container>
        
       
       
 
     
     
</v-layout>


</v-container>
 
<Footer />
 
</div>
</template>
<script>
import Footer from './Footer.vue'
  export default {
    
   name: 'App',
  components: {
    Footer
  },

    data () {
      return {
       
        center: { lat: 45.508, lng: -73.587 },
      markers: [],
      countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
      errorMessages: '',
      name: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      formHasErrors: false,
      places: [],
      currentPlace: null,
       items: [
          {
            src: require("../assets/contactheader.jpg"),
            src1: require("../assets/contactgirl.png")

          },
          
        ],
        email: '',
        
    computed: {
      form () {
        return {
          name: this.name,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          country: this.country,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        },
        methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? 'Hey! I\'m required'
          : ''

        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
      };
    }}
  
  
  </script>