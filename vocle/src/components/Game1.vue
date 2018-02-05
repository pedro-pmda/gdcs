<template>
  <div class="animated fadeIn">

    <<!-- div v-if="!gameover"> -->
      <v-layout row justify-center :class="themeActual.title" class="aire">
        <h1>Challenge </h1>
        <h1>Score: {{score}}</h1>
      </v-layout>

      <v-flex xs12>
        <v-card color="cyan darken-2" class="white--text">
          <v-card-title primary-title>
            <div class="headline">{{challenge.definition}}</div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-layout class="mt-5">
        <v-flex xs6 class='ml-1 mr-1'>
          <div>
            <v-btn class="btn--block option" color="deep-orange accent-3" dark large @click='checkResponse(option1)'>{{option1.word}}</v-btn>
          </div>
        </v-flex>
        <v-flex xs6 class='ml-1 mr-1'>
          <div>
            <v-btn class="btn--block option" color="pink accent-3" dark large @click='checkResponse(option2)'>{{option2.word}}</v-btn>
          </div>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs6 class='ml-1 mr-1'>
          <div>
            <v-btn class="btn--block option" color="blue accent-4" dark large @click='checkResponse(option3)'>{{option3.word}}</v-btn>
          </div>
        </v-flex>
        <v-flex xs6 class='ml-1 mr-1'>
          <div>
            <v-btn class="btn--block option" color="lime darken-4" dark large @click='checkResponse(option4)'>{{option4.word}}</v-btn>
          </div>
        </v-flex>
      </v-layout>
    <!--</div>
   <div v-else>
        <h1>Game Over</h1>

   </div>-->

  <v-layout row justify-center>
      <v-dialog v-model="gameover" persistent max-width="350">
        <v-card>
          <v-card-title class="headline">Game Over</v-card-title>
          <v-card-title class="headline">{{ score }}</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="initGame()">Play Again</v-btn>
            <v-btn color="green darken-1" flat :to="{ name: 'Menu'}"> Exit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
 </div>
</template>

<script>
  export default {
    name: 'Game1',
    props: ['themeActual', 'db', 'time'],
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
        for (let index = 0; index < 4; index++) {
          this.wordSelected = this.words[this.random(this.words.length)]
          this.options.push(this.wordSelected)
          /*
          this.words = this.words.filter(function (i) {
            return (i !== wordSelected)
          })
          */
        }
        [this.option1, this.option2, this.option3, this.option4] = this.options
        this.challenge = this.options[this.random(4)]
        return this.challenge
      },
      random: function (i) {
        return Math.trunc(Math.random() * i)
      },
      checkResponse: function (option) {
        if (this.challenge.definition === option.definition) {
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
          return (self.gameover = true)
        }, this.time)
      }
    },
    mounted: function () {
      this.time = 5000
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
    height: 120px;
  }

</style>
