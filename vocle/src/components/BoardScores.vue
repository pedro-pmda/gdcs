<template>
  <div class="animated fadeIn ">
    <v-layout row justify-center :class="themeActual.title" class="aire">
    <h1>Top Scores</h1>
    </v-layout>
    <v-layout row>
      <v-flex row xs12 sm6 offset-sm3 class='aire elevation-14'>
        <v-list>
          <v-list-tile avatar v-for="(score,index) in scores" :key="score.index">
            <v-list-tile-content>
              <v-list-tile-title> {{index+1}} - {{ score.name }} - {{ score.score }} points</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img v-bind:src="score.avatar" />
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs1>
          <v-btn color="light-blue darken-3" fab medium dark :to="{ name: 'Menu'}">
            <v-icon>navigate_before</v-icon>
          </v-btn>
      </v-flex>
    </v-layout>

  </div>

</template>

<script>
  export default {
    name: 'BoardScores',
    props: ['themeActual', 'db'],
    data () {
      return {
        scores: []
      }
    },
    computed: {
    },
    methods: {},
    mounted: function () {
      this.$bindAsArray('scores', this.db.ref('scores').orderByChild('score').limitToLast(10),
        null, // cancel callback ,
        () => this.scores.reverse()
      )
    }
  }
</script>


<style>
  .aire {
    margin: 20px 0px 20px 0px
  }


</style>
