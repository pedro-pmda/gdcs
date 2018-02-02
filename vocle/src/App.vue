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
      <!--
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      </transition>
      -->
      <router-view :themeActual='themeActual'></router-view>
    </v-content>

    <template>
      <v-footer class='pa-3'>
        <v-spacer></v-spacer>
        <div> Pedro Palazón - Udacity Google ScholarShip Challenge © {{ new Date().getFullYear() }}</div>
      </v-footer>
    </template>
    <!--</div>-->
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        title: 'Vuetify.js',
        themeActual: '',
        theme1: {
          toolbar: 'indigo darken-1 white--text',
          card1: 'red lighten-2 white--text',
          card2: 'green lighten-2  white--text',
          card3: 'blue lighten-2 white--text',
          title: 'grey--text text--darken-3',
          background: 'white'
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
    }
  }
</script>
