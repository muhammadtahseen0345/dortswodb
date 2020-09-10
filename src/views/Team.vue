<template>
  <div class="team">
    
   <h1 class="Subheading grey--text">Team</h1>
   <v-container>
     <v-layout row wrap>
        <v-flex xs12 sm4 offset-sm4  v-for="person in ceo" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
          <v-responsive class="pt-4">
             <v-avatar size="150">
              <img :src="person.avatar"></v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{ person.name }}</div>
            <div class="grey--text">{{ person.role }}</div>
          </v-card-text>
          <v-card-actions>
             <v-btn flat color="grey">
               <v-icon small left>message</v-icon>
             </v-btn>
          </v-card-actions>
          </v-card>  
        </v-flex>
          </v-layout>

          </v-container>
             


   <v-container class="my-30">
     <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg 3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
          <v-responsive class="pt-4">
            
            <v-avatar size="110">
              <img :src="person.avatar"></v-avatar>
          </v-responsive>
          
          <v-card-text>
            <div class="subheading">{{ person.name }}</div>
            <div class="grey--text">{{ person.role }}</div>
           
      
          </v-card-text>
          
       
          </v-card>  
        </v-flex>
          </v-layout>

          </v-container>
          <Footer />
       </div>
       </template>
       <script>
       import Footer from "./Footer.vue"
       export default {
           name: 'App',
  components: {
    Footer
  },

         data(){
           return{
             show:false,
              dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
             ceo:[
               {
                 name: 'Tehreem Umer', role:'Chief Executive Officer',avatar:'/3 (3).png'
               }
             ],
             team: [
               {
                 name: 'abcd', role:'Director',avatar:'/3 (2).png',about:'hello'},
                 {
                 name: 'abcd', role:'Director Finance',avatar:'/3 (3).png'},
               {
                 name: 'abcd', role:'Project Associate',avatar:'/3 (9).png'},
               {
                 name: 'abcd', role:'Head Education Function',avatar:'/3 (6).png'},
                  {
                 name: 'abcd', role:'Head Education Function',avatar:'/3 (6).png'},
                  {
                 name: 'abcd', role:'Head Education Function',avatar:'/3 (6).png'},
                  {
                 name: 'abcd', role:'Head Education Function',avatar:'/3 (6).png'},
                  {
                 name: 'abcd', role:'Head Education Function',avatar:'/3 (6).png'},
                  {
                 name: 'abcd', role:'Head Education Function',avatar:'/3 (6).png'},
                  {
                 name: 'abcd', role:'Head Education Function',avatar:'/3 (6).png'},
                  {
                 name: 'abcd', role:'Head Education Function',avatar:'/3 (6).png'},
                  {
                 name: 'abcd', role:'Head Admin',avatar:'/3 (7).png'}

             ]
           }
         }
       }
       </script>
            