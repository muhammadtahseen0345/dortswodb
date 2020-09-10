<template>

  <div class="Dashboard">
  <!--<v-img
                  :src="``"
                  :lazy-src="``"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
     -->
    <!--<v-carousel >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    > 
   </v-carousel-item></v-carousel>-->
   <v-img v-for="(item,i) in items"
      :key="i"
      :src="item.src" 
      height="500"
      ></v-img>
    
      
 <v-container >
    <v-layout>
      <v-flex xs4 >
         <v-card
          :elevation="n - 10"
          height="200"
          width="350"
        >
         </v-card>
      </v-flex>

     <v-flex xs8 >
       <br/>
       <br/>
      Dorts Corporation is a technology company leading ventures to simplify and create luxury comfort for customers by providing them online platforms with commitment to operational thinking and long term executions leading to make life easy, happy and reliable    
     </v-flex>
    </v-layout>
  </v-container>
  <div class="text-xs-center">
    <h1>LATEST  TECH  UPDATE</h1>
  </div>
  <v-divider
            class="mx-auto"
            style="width: 800px; "
          />
<br/>
<v-container >
    <v-layout>
<v-flex xs12 sm6>
 <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="blue darken-3" text>Share</v-btn>

      <v-btn
        color="rgb(254, 154, 0, 0.7)"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>


</v-flex>
<v-flex xs12 sm6>
 <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn
        color="rgb(254, 154, 0, 0.7)"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show1 = !show1"
      >
        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show1">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>


</v-flex>
    </v-layout>
</v-container>

<Footer/>

  <!--</v-img>-->
  </div>
  
</template>
<script>
  import Footer from './Footer.vue'
  

 export default {
  videoId: 'https://youtu.be/foT-z4bymb0',
     name: 'App',
  components: {
    Footer,
    
  },

     
    data: () => ({
      show: false,
      show1: false,
      drawer:false,
      email:'',
      links:[
          {icon:'person', text:'Shortcuts'
         }
        ],
      
      admins: [
        /*['Team', 'people_outline'],*/
        {icon:'people_outline', text:'Team', route:'/team'
         },
         {icon:'people_outline', text:'Trainer', route:'/trainer'
         }
        /*['Trainers', 'settings']*/
      ],

     

      cruds: [
        /*['Work With Us', 'add'],
        ['Collabrations/Partners', 'insert_drive_file'],
        ['Alumni/Success Stories', 'update'],*/
        {icon:'add', text:'Work With Us', route:'/Work'
         },
         {icon:'people_outline', text:'Trainer', route:'/trainer'
         }
      ],
      
      items: [
          {
            src: require("../assets/dortstitle.jpg")
          },
          
        ],
        methods: {
      next () {
        alert('You clicked next!')
      },
      method (url) {
      this.videoId = this.$youtube.getIdFromURL(url)
      this.startTime = this.$youtube.getTimeFromURL(url)
    }
    }
      
       
    })
  }
</script>
<style lang="stylus">

  #footer
    a
      opacity: .8
      text-decoration: none
      &:hover
        color: #FFF
        opacity: 1
    .v-text-field--rounded
      margin-bottom: 16px
      .v-input__slot
        border-radius: 28px
      .v-text-field__slot,
      .v-label
        padding-left: 8px
      .v-btn
        margin: 0
        border-top-right-radius: 28px
        border-bottom-right-radius: 28px
        box-shadow: none
        height: 48px
        margin-right: -12px
        padding-top: 2px
</style>