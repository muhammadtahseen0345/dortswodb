<template>
  <v-app class="blue-lighten">
    
    <app-navigation></app-navigation>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  data() {
    return {
      //
    };
  },
  components: {
    appNavigation: Navbar
  }
};
</script>
