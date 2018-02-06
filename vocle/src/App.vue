<template>
  <v-app>
    <!--<div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">-->
    <v-toolbar :class='theme1.toolbar'>
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-toolbar-title>VOCLE</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="">My Best Score: 120 &nbsp</span>
      <v-flex xs1>
        <v-avatar size="36px" slot="activator">
          <img src="https://lh3.googleusercontent.com/-FDa3Zfo4b4g/AAAAAAAAAAI/AAAAAAAAAAA/ACSILjXPtzCJizlXySx8a7YQp9PxqaXUng/mo/photo.jpg?sz=46"
            alt="">
        </v-avatar>
      </v-flex>
      <!--
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      -->
    </v-toolbar>
    <v-content :class='theme1.background'>
      <router-view :themeActual='themeActual' :db='db'></router-view>
    </v-content>
    <template>
      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>Udacity Google Challenge - Pedro Palazón {{ new Date().getFullYear() }}</div>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
  import dbInstance from './config/firebaseConfig'

  export default {
    name: 'App',
    data () {
      return {
        title: 'Vuetify.js',
        themeActual: '',
        theme1: {
          toolbar: 'indigo darken-1 white--text',
          card1: 'lime darken-1 white--text',
          card2: 'cyan lighten-1  white--text',
          card3: 'pink darken-1 white--text',
          title: 'grey--text text--darken-3',
          background: 'white',
          db: ''
        }

      }
    },
    methods: {
      modoNoche: function () {
        this.themeActual = this.theme1
      }
    },
    created () {
      this.themeActual = this.theme1
      this.db = dbInstance
    }
  }
</script>
