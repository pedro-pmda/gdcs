<template>
  <div class="animated fadeIn ">
    <v-layout row justify-center :class="themeActual.title" class="aire">
    <h1>Top Scores</h1>
    </v-layout>
    <v-layout row>
      <v-flex row xs12 sm6 offset-sm3 class='aire elevation-14'>
        <v-list>
          <v-list-tile avatar v-for="(score,index) in scores" :key="score.index" @click="">
            <v-list-tile-content>
              <v-list-tile-title> {{index+1}} - {{ score.name }} - {{ score.score }} points</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img v-bind:src="score.avatar" />
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs2>
          <v-btn color="error" fab medium dark :to="{ name: 'Menu'}">
            <v-icon>navigate_before</v-icon>
          </v-btn>
      </v-flex>
    </v-layout>

  </div>

</template>

<script>
  import firebase from 'firebase'

  /* This code is repeated in every component. I need change this */
  let config = {
    apiKey: 'AIzaSyCp7lRxidZjf1W_0ycmnx2B7f23xMUiXaQ',
    authDomain: 'vocle-6228d.firebaseapp.com',
    databaseURL: 'https://vocle-6228d.firebaseio.com',
    projectId: 'vocle-6228d',
    storageBucket: 'vocle-6228d.appspot.com',
    messagingSenderId: '696767717356'
  }
  let db = firebase.initializeApp(config).database()
  let scoresRef = db.ref('scores')
  /* snippet repeated */

  export default {
    name: 'BoardScores',
    props: ['themeActual'],
    firebase: {
      scores: scoresRef.orderByChild('score').limitToLast(5)
    },
    data () {
      return {
        mockScores: [{
          name: 'Pedro',
          avatar: 'https://api.adorable.io/avatars/132/1.png',
          score: 8000
        },
        {
          name: 'Raul',
          avatar: 'https://api.adorable.io/avatars/132/2.png',
          score: 500
        },
        {
          name: 'Aranzazu',
          avatar: 'https://api.adorable.io/avatars/132/3.png',
          score: 75
        },
        {
          name: 'Aitana',
          avatar: 'https://api.adorable.io/avatars/132/4.png',
          score: 3000
        }
        ]
      }
    },
    computed: {
    },
    methods: {},
    mounted: function () {
      /*
      for (const scoreIterated of this.mockScores) {
        console.info(`Dentro del Of ${scoreIterated}`)
        scoresRef.push(scoreIterated)
      }
      */
    }
  }
</script>


<style>
  .aire {
    margin: 20px 0px 20px 0px
  }


</style>
