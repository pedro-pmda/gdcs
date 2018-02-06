<template>
  <v-container fluid style="min-height: 0;" grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card :color="themeActual.card1" class="elevation-14 white--text animated flipInX" :to="{ name: 'Game1'}">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">Guess The Word</div>
                  <div>Which is the word for this definition.?. the People</div>
                  <div>TIME:20 seconds</div>
                </div>
              </v-flex>
              <v-flex xs5>
                <v-card-media src="static/img/word.svg" height="125px" contain></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card :color='themeActual.card2' class="elevation-14 white--text animated flipInX" :to="{ name: 'Game2'}">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">Guess The Definition</div>
                  <div>Wich is the word for this definition?</div>
                  <div>TIME:20 seconds</div>
                </div>
              </v-flex>
              <v-flex xs5>
                <v-card-media src="static/img/definition.svg" height="125px" contain></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card :color='themeActual.card3' class="elevation-14 white--text animated flipInX" :to="{ name: 'BoardScores'}">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">Scores</div>
                  <div>Show me who rules</div>
                </div>
              </v-flex>
              <v-flex xs5>
                <v-card-media src="static/img/scores.svg" height="125px" contain></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card color='grey' class="elevation-14 white--text animated flipInX" :to="{ name: 'Dictionary'}">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">Edit Words</div>
                  <div>Edit the vocabulary game</div>
                </div>
              </v-flex>
              <v-flex xs5>
                <v-card-media src="static/img/edit.svg" height="125px" contain></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['themeActual'],
    data () {
      return {
      }
    },
    methods: {}
  }
</script>
