<template>
  <v-container fluid style="min-height: 0;" grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">Guess The Word</div>
                  <div>Which is the word for this definition.?. the People</div>
                <!--
                <v-card-actions>
                   <v-btn flat dark>Play now</v-btn>
                </v-card-actions>
                -->
                </div>
              </v-flex>
              <v-flex xs5>  
                <v-card-media src="static/img/vocabulary.svg" height="125px" contain></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card color="purple darken-2" class="white--text">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">Guess The Definition</div>
                  <div>Wich is the word for this definition?</div>
                </div>
              </v-flex>
              <v-flex xs5>
                <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/foster.jpg" height="125px" contain></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card color="cyan darken-3" class="white--text">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">Scores</div>
                  <div>Show me who rules</div>
                </div>
              </v-flex>
              <v-flex xs5>
                <v-card-media src="static/img/challenge.jpg" height="125px" contain></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
