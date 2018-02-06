<template>
  <div class="animated fadeIn">

      <v-layout row justify-center :class="themeActual.title" class="aire">
        <h1>Score: {{score}}</h1>
      </v-layout>

      <v-layout row wrap>
      <v-flex xs4 offset-xs4>
        <v-card color="grey" class="white--text">
          <v-card-title primary-title>
            <div class="headline">{{challenge.word}}</div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs10 offset-xs1 @click='checkResponse(option1)'>
        <v-card class="white--text mt-5 mb-4" color="deep-orange accent-3"  >
          <v-card-title primary-title>
            <div class="headline">{{option1.definition}}</div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs10 offset-xs1 @click='checkResponse(option2)'>
        <v-card class="white--text mb-4"  color="pink accent-3" dark large >
          <v-card-title primary-title>
            <div class="headline">{{option2.definition}}</div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs10 offset-xs1 @click='checkResponse(option3)'>
         <v-card class="white--text mb-4"  color="blue accent-4" dark large >
          <v-card-title primary-title>
            <div class="headline">{{option3.definition}}</div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs10 offset-xs1 @click='checkResponse(option4)'>
         <v-card class="white--text mb-4"  color="lime darken-4" dark large>
          <v-card-title primary-title>
            <div class="headline">{{option4.definition}}</div>
          </v-card-title>
        </v-card>
      </v-flex>
      </v-layout>

  <v-layout row justify-center>
      <v-dialog v-model="gameover" persistent max-width="350">
        <v-card text>
          <v-card-title class="display-3 middle">Game Over</v-card-title>
          <v-card-title class="display-4 middle">{{ score }} <span class="display-3">Points</span> </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="initGame()" dark large>Play Again</v-btn>
            <v-btn color="warning"  :to="{ name: 'Menu'}" dark large> Exit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
 </div>
</template>

<script>
  import bus from '../event-bus'

  export default {
    name: 'Game1',
    props: ['themeActual', 'db'],
    data () {
      return {
        words: [],
        valid: true,
        score: 0,
        options: [],
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        gameover: false,
        challenge: '',
        wordSelected: ''
      }
    },
    computed: {},
    methods: {
      selectWords: function () {
        this.options = []
        let wordsCopy = this.words.slice()
        for (let index = 0; index < 4; index++) {
          this.wordSelected = wordsCopy[this.random(wordsCopy.length)]
          this.options.push(this.wordSelected)
          this.remove(wordsCopy, this.wordSelected)
        }
        [this.option1, this.option2, this.option3, this.option4] = this.options
        this.challenge = this.options[this.random(4)]
        return this.challenge
      },
      random: function (i) {
        return Math.trunc(Math.random() * i)
      },
      remove: function (array, element) {
        const index = array.indexOf(element)
        if (index !== -1) {
          array.splice(index, 1)
        }
      },
      checkResponse: function (option) {
        if (this.challenge.word === option.word) {
          this.score += 5
          this.selectWords()
          return true
        } else {
          this.selectWords()
          return false
        }
      },
      initGame: function () {
        this.score = 0
        this.gameover = false
        this.selectWords()
        let self = this
        setTimeout(function () {
          bus.$emit('newScore', self.score)
          return (self.gameover = true)
        }, this.time)
      }
    },
    created: function () {
      this.time = 20000
      this.$bindAsArray('words', this.db.ref('words'),
        null, // cancel callback ,
        () => this.initGame()
      )
    }
  }
</script>
<style>
  .aire {
    margin: 20px 0px 20px 0px
  }

  .aire2 {
    margin: 0px 10px 0px 0px
  }

  .option {
    height: 150px;
  }

  .middle {
    text-align: center !important;
  }
</style>
