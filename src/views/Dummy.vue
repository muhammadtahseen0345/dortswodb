<template>
  <div>
     <v-img
                  :src="``"
                  :lazy-src="``"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
     
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm5>
          <h1>Invite A Trainer</h1>
          <p>
            Fill out the form to register your request to get a EBBS trainer for a session at your event. We'll get in touch with you. Session fee and complete details will be informed through email.
            For any queries, write us on hammad.ebbspk@outlook.com
          </p>
          <form>
            <v-flex xs10>
              <h2>General Information</h2>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Full Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>

              <v-text-field
                v-model="contact"
                :error-messages="contactErrors"
                :counter="11"
                label="Contact"
                required
                @input="$v.contact.$touch()"
                @blur="$v.contact.$touch()"
              ></v-text-field>

              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <!--v-text-field
            v-model="email"
            :error-messages="emailErrors"
            :rules="[rules.required, rules.email]"
            label="E-mail"
              </v-text-field>-->

              <v-text-field
                v-model="city"
                :error-messages="cityErrors"
                label="City"
                required
                @input="$v.city.$touch()"
                @blur="$v.city.$touch()"
              ></v-text-field>

              <v-text-field
                v-model="org"
                :error-messages="orgErrors"
                label="Institution/Organization"
                required
                @input="$v.org.$touch()"
                @blur="$v.org.$touch()"
              ></v-text-field>

              <h2>Session Details</h2>

              <!-- <v-text-field
      v-model="event_date"
      :error-messages="event_dateErrors"
      label="Event Date"
      required
      @input="$v.event_date.$touch()"
      @blur="$v.event_date.$touch()"
              ></v-text-field>-->

              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Event Date"
                    readonly
                    offset-y
                    append-icon="event"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false" color="blue-grey lighten-3"></v-date-picker>
              </v-menu>

              <v-text-field
                v-model="event_detail"
                :error-messages="event_detailErrors"
                label="Event Detail"
                required
                auto-grow
                @input="$v.event_detail.$touch()"
                @blur="$v.event_detail.$touch()"
              ></v-text-field>

              <v-select
                offset-y
                v-model="select"
                :items="Session_Topic"
                :error-messages="selectErrors"
                label="Session topic"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>

              <v-select
                offset-y
                v-model="select_1"
                :items="Trainer"
                :error-messages="select_1Errors"
                label="Trainers"
                required
                @change="$v.select_1.$touch()"
                @blur="$v.select_1.$touch()"
              ></v-select>

              <p>
                Trainers Profile
                <router-link to="/Trainer">Click Here</router-link>
              </p>

              <v-radio-group v-model="radioGroup">
                <v-radio v-for="n in Radio_capacity" :key="n" :label="n.capacity" :value="n"></v-radio>
              </v-radio-group>

              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>

              <v-btn @click="submit">submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-flex>
          </form>
        </v-flex>
        <v-flex 12 xs sm2>
          <v-spacer></v-spacer>
        </v-flex>

        <v-flex xs12 sm5>
          <h1>Become a Partner/Sponsor</h1>
          <p>'Bring A Change' is what we are doing. We are trying to create a multiplier effect that could increase the pace of changing lives through motivation and positivity. We have organized several programs focusing on young individuals and how to make their lives better and to set examples.If you think that our philosophy matches with you, and you want to join us together to Bring A Change. We at EBBS believes in growing day by day and to facilitate with the best.We are looking forward from you to come and work with us together and to make this aim a huge success. Upcoming programs are in the list, we'll be reaching you with ideas and updates. To know more about Partnerships and Sponsoships, email us at hammad.ebbspk@outlook.com or contact us on 0348835509</p>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
     </v-img>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import Footer from "./Footer"
export default {
    name: 'App',
  components: {
    Footer
  },

  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    contact: { required, maxLength: maxLength(11) },
    city: { required, maxLength: maxLength(20) },
    org: { required, maxLength: maxLength(20) },
    event_date: { required, maxLength: maxLength(20) },
    event_detail: { required, maxLength: maxLength(1000) },
    email: { required, email },
    select: { required },
    select_1: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    name: "",
    email: "",
    contact: "",
    city: "",
    org: "",
    event_date: "",
    event_detail: "",
    select: null,
    select_1: null,
    radioGroup: 1,

    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    /*email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'}},*/

    Radio_capacity: [
      { capacity: "50-100" },
      { capacity: "100-150" },
      { capacity: "150-200" },
      { capacity: "More Than 200" }
    ],

    Session_Topic: [
      "Leadership & Softskills",
      "Soft Skills",
      "Carrer Development",
      "Teaching Strategies",
      "Exchange Progamme Guidelines"
    ],
    Trainer: [
      "Tehreem Umer",
      "Shoaib Ahmed Siddiqui",
      "Nouman Ahmed",
      "Abdul Samad",
      "Sameer Imtiaz"
    ],
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },

    select_1Errors() {
      const errors = [];
      if (!this.$v.select_1.$dirty) return errors;
      !this.$v.select_1.required && errors.push("Item is required");
      return errors;
    },

    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    /* Contact ki data type int kerni hai*/
    contactErrors() {
      const errors = [];
      if (!this.$v.contact.$dirty) return errors;
      !this.$v.contact.maxLength &&
        errors.push("Contact # must not be longer than 11 Characters");
      !this.$v.contact.required && errors.push("Contact is required.");
      return errors;
    },

    cityErrors() {
      const errors = [];
      if (!this.$v.city.$dirty) return errors;
      !this.$v.city.maxLength &&
        errors.push("Contact # must not be longer than 11 Characters");
      !this.$v.city.required && errors.push("City is required.");
      return errors;
    },

    orgErrors() {
      const errors = [];
      if (!this.$v.org.$dirty) return errors;
      !this.$v.org.maxLength &&
        errors.push("Contact # must not be longer than 11 Characters");
      !this.$v.org.required && errors.push("Org/Inst. is required.");
      return errors;
    },

    event_dateErrors() {
      const errors = [];
      if (!this.$v.event_date.$dirty) return errors;
      !this.$v.event_date.maxLength &&
        errors.push("Contact # must not be longer than 11 Characters");
      !this.$v.event_date.required && errors.push("Please Mention Event Date");
      return errors;
    },

    event_detailErrors() {
      const errors = [];
      if (!this.$v.event_detail.$dirty) return errors;
      !this.$v.event_detail.maxLength &&
        errors.push("Contact # must not be longer than 100 Characters");
      !this.$v.event_detail.required &&
        errors.push("Please Mention Event Detail is required.");
      return errors;
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.contact = "";
      this.org = "";
      this.event_date = "";
      this.event_detail = "";

      this.select = null;
      this.select_1 = null;
      this.checkbox = false;
    }
  }
};
</script>