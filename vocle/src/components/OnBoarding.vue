<template>
  <div class="animated fadeIn ">

    <v-layout row justify-center :class="themeActual.title" class="mt-5">
      <h1>Welcome to Vocle</h1>
    </v-layout>
    <v-layout row justify-center :class="themeActual.title" class="mb-5">
      <h2>The best way to <span color="indigo--text">voc</span>abulary learn</h2>
    </v-layout>
    <v-layout row justify-center :class="themeActual.title" class="mt-5 mb-5">
        <v-avatar size=80 ><img :src="user.avatar" alt="user.name">
    </v-avatar>
    </v-layout>

    <v-form v-model="valid" ref="form" lazy-validation>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          <v-text-field label="Please, put your nick" v-model="user.name" required :error-messages="nameErrors" ></v-text-field>
        </v-flex>

        <v-flex xs6 offset-xs3>
          <v-btn class="btn--block mt-5" color="primary" dark large :to="{ name: 'Menu'}">
           Play
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
  // import bus from '../event-bus'

  export default {
    valid: true,
    name: 'Dictionary',
    props: ['themeActual', 'db', 'user'],
    data () {
      return {
      }
    },
    methods: {
    },
    mounted: function () {

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
