<template>
  <v-app>
    <!--<div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">-->
    <v-toolbar :class='theme1.toolbar'>
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-toolbar-title>VOCLE</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="">{{user.name}} HighScore: {{bestScore}} &nbsp</span>
      <!--<span v-model="user" class="">{{user.name}} &nbsp</span>-->
      <v-flex xs1>
        <v-avatar size="36px" slot="activator">
          <img :src="user.avatar" alt="">
        </v-avatar>
      </v-flex>
    </v-toolbar>
    <v-content :class='theme1.background'>
      <router-view :themeActual='themeActual' :db='db' :user='user'></router-view>
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
  import bus from './event-bus'

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
          background: 'white'
        },
        db: '',
        user: {},
        bestScore: ''
      }
    },
    methods: {
    },
    mounted: function () {
      this.$bindAsArray('scores', this.db.ref('scores'),
        null, // cancel callback ,
        () => console.log('Bind correct Scores :-D')
      )
    },
    created () {
      this.themeActual = this.theme1
      this.db = dbInstance
      this.user.avatar = `https://api.adorable.io/avatars/132/6.png`
      this.user.bestscore = 0
      bus.$on('newScore', (newScore) => {
        let newInsertScore = {
          name: this.user.name,
          avatar: this.user.avatar,
          score: newScore
        }
        this.$firebaseRefs.scores.push(newInsertScore)
        if (newScore > this.bestScore) this.bestScore = newScore
      })
    }
  }
</script>
