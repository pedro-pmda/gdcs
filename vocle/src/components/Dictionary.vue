<template>
  <div class="animated fadeIn ">

    <v-layout row justify-center :class="themeActual.title" class="aire">
      <h1>New Definition</h1>
    </v-layout>

    <v-form v-model="valid" ref="form" lazy-validation>
      <v-layout row>
        <v-flex xs10 offset-xs1>
          <v-text-field label="Word" v-model="newWord.word" required></v-text-field>
          <v-text-field label="Definition" v-model="newWord.definition" required></v-text-field>
          <!--
         <v-btn @click="submit" :disabled="!valid">
          Save
        </v-btn>
        <v-btn >Clear</v-btn>
        -->
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs1 offset-xs4 class="aire2">
          <v-btn color="error" fab medium dark @click="clear">
            <v-icon>clear</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs1 offset-xs1 class="aire2">
          <v-btn color="lime darken-3" fab medium dark @click="submit">
            <v-icon>create</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs1 offset-xs1 class="aire2">
          <v-btn color="light-blue darken-3" fab medium dark :to="{ name: 'Menu'}">
            <v-icon>navigate_before</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>

    <v-layout row justify-center :class="themeActual.title" class="aire">
      <h1>Last Words Added</h1>
    </v-layout>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <span v-for="word in words" :key="words.index">{{word.word}} &nbsp </span>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
  export default {
    name: 'Dictionary',
    props: ['themeActual', 'db'],
    firebase: {
      // dictionary: dictionaryRef.orderByChild('word')
    },
    data () {
      return {
        words: [],
        valid: true,
        newWord: {}
      }
    },
    computed: {},
    methods: {
      submit: function () {
        console.log('Que grabooooo')
        this.$firebaseRefs.words.push(this.newWord)
      },
      clear: function () { this.$refs.form.reset() }
    },
    mounted: function () {
      this.$bindAsArray('words', this.db.ref('words').orderByChild('word').limitToLast(50),
        null, // cancel callback ,
        () => console.log('Bind correct Words :-D')
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

</style>
