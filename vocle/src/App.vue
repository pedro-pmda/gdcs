<template>
  <v-app>
    <!--<div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">-->
    <v-toolbar color="pink">
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-toolbar-title class="white--text">VOCLE</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="white--text">My Best Score: 120 &nbsp</span>
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
    <v-content>
      <router-view/>
    </v-content>

    <template>
      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div> Pedro Palazón - Udacity Google ScholarShip Challenge © {{ new Date().getFullYear() }}</div>
      </v-footer>
    </template>
    <!--</div>-->
  </v-app>
</template>

<script>
  import Firebase from 'firebase'

  let config = {
    apiKey: 'AIzaSyCp7lRxidZjf1W_0ycmnx2B7f23xMUiXaQ',
    authDomain: 'vocle-6228d.firebaseapp.com',
    databaseURL: 'https://vocle-6228d.firebaseio.com',
    projectId: 'vocle-6228d',
    storageBucket: 'vocle-6228d.appspot.com',
    messagingSenderId: '696767717356'
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()
  let scores = db.ref('scores')

  export default {
    name: 'App',
    firebase: {
      scores: scores
    },
    data () {
      return {
        title: 'Vuetify.js'
      }
    },
    created () {
      /*
      let primero = {
        'nombre': 'Pedro',
        'score': 150,
        'avatar': 'https://api.adorable.io/avatars/132/1.png'
      }
      scores.push(primero)
      */
    }
  }
</script>
