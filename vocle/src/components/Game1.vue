<template>
  <div class="animated fadeIn ">
    <v-layout row justify-center :class="themeActual.title" class="aire">
      <h1>Challenge</h1>
      <h1>Score: {{score}}</h1>
      <h3>{{challenge.defintion}}</h3>
    </v-layout>

    <v-layout row>
      <v-flex xs6>

      </v-flex>
    </v-layout>



  </div>
</template>

<script>
  export default {
    name: 'Game1',
    props: ['themeActual', 'db', 'time'],
    firebase: {
      // dictionary: dictionaryRef.orderByChild('word')
    },
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
        challenge: ''
      }
    },
    computed: {},
    methods: {
      selectWords: function () {
        for (let index = 0; index < 4; index++) {
          let selected = this.words[this.random(this.words.length)]
          this.options.push(selected)
          this.words = this.words.filter(function (i) {
            return i !== this.selected
          })
        }
        [this.option1, this.option2, this.option3, this.option4] = this.options
        this.challenge = this.options[this.random(4)]
        return this.challenge
      },
      random: function (i) {
        return Math.random() * i
      },
      checkResponse: function (defintionResponse) {
        if (this.challenge.definition === this.definitionResponde) {
          this.scores += 5
          this.selectWords()
          return true
        } else {
          this.selectWords()
          return false
        }
      }
    },
    mounted: function () {
      this.$bindAsArray('words', this.db.ref('words'),
        null, // cancel callback ,
        () => console.log('Bind correct Words :-D')
      )
      setTimeout(function () {
        this.gameover = true
      }, 60000)

      this.selectWords()
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

</style>
