<template>
  <nav>
    <v-toolbar app  color="rgb(254, 154, 0, 0.7)" >
      <!--<v-toolbar-side-icon class="grey--text" @click="drawer =!drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title class="text-uppercase grey--text">
       <v-img   class="shrink mr-2" transition="scale-transition"
          width="220" :src="image_src"></v-img>
      </v-toolbar-title>
      <v-btn flat @click="$router.push('/')">Home</v-btn>
      <v-btn flat @click="$router.push('about')">About Us</v-btn>
      <v-btn flat @click="$router.push('about')">Products</v-btn>
      <v-btn flat @click="$router.push('contact')">Contact Us</v-btn>
      <v-btn flat @click="$router.push('contact')">Blog</v-btn>
      <v-spacer></v-spacer>
       <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        flat
      >
        <span class="mr-2">Join the Team</span>
        <v-icon>mdi-human-greeting</v-icon>
      </v-btn>
    </v-toolbar>

    <!--<v-navigation-drawer app v-model="drawer" class='blue'>
      
      
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" route :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
     
     
      
    </v-navigation-drawer>-->
  </nav>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
       image_src: require("../assets/dotslogo.png"),
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
        { icon: "note_add", text: "Trainer", route: "/Trainer" },
        { icon: "search", text: "Alumni/Success Stories", route: "/dummy" },
         { icon: "search", text: "Collabration/Partners", route: "/dummy" },
        { icon: "search", text: "Work With Us", route: "/dummy" },
       
      ]
    };
  }
};
</script>
