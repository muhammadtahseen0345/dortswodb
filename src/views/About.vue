<template>
  <div class="about">
    <v-img v-for="(item,i) in items"
      :key="i"
      :src="item.src" 
      height="500"
      ></v-img>
     
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs5 >
         <br/>
         <br/>
         <br/>
         <h1 class="text-xs-center"> 
           Our Story
         </h1>
        
         <p>
           In this year....... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sint non assumenda repellendus doloribus consequatur neque reiciendis dolor laborum dicta cumque, aliquam asperiores hic adipisci sapiente quasi odit. Soluta, asperiores!
           ...... Context
         </p>

      </v-flex>
     <v-flex xs12 sm7>
 <v-img v-for="(item,i) in items"
      :key="i"
      :src="item.src" 
      height=auto
      ></v-img>
     </v-flex>
       <!-- <v-flex xs12 sm2><v-spacer></v-spacer></v-flex>
        <v-flex xs12 sm8 text-xs-center>
    <h1 >ABOUT US</h1>
<p>EBBS is an education organization founded in 2016 that aims to empower youth through different projects focusing the deserving youth in underprivileged areas.

EBBS vision is to inspire and educate the young generation and corporates focusing on the modern twenty first century learning strategies to improve their soft skills which will let them to pursue a successful life. Using ideas, energies and enthusiastic efforts EBBS has the aim to bring a change all over Pakistan.</p>
 <h1>OUR STORY</h1>
 <p >Our story starts from finding a solution to a problem, a problem that everyone faces but doesn’t recognize and instead keeps going into it. Our members have experienced some issues in their spots, when it comes to career, profession or any other aspect of life, some barriers which were not letting them to pursue what they wanted to, neither encouraging them to express their energy and potential hidden inside just because of the inconsiderable fears. The turning effect is of course the English Access Micro scholarship Program which pushed us to think for a channel, and we developed a platform where learning became amazing and unforgettable experience. There were some people who believed in us, supported our work, motivated and guided us and the efforts finally shinned in the form of EBBS. We have risked many times, no doubt the journey has been challenging in bits and bytes but we have made our way together as a team and that’s how we are changing failure into success. Ideas, energies and enthusiastic efforts of our members are pushing us towards continuous growth and now we have the aim to bring a change all across Pakistan. Like every success story, we too have one except for that we are improving and upgrading constantly.  </p>
        </v-flex>-->
      </v-layout>
    </v-container>
 
    <Footer />
    
</div> </template>
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