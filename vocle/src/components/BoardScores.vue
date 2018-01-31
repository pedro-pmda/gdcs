<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-list>
        <v-list-tile avatar v-for="score in scores" v-bind:key="item.title" @click="">
          <v-list-tile-action>
            <v-icon v-if="item.icon" color="pink">star</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="score.nombre"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <img v-bind:src="score.avatar" />
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    name: 'BoardScores',
    data () {
      return {
        /*
        items: [{
          name: 'Pedro Palazón',
          avatar: 'https://api.adorable.io/avatars/132/1.png',
          score:  '150'
        },
        {
          title: '2.-Travis Howard',
          avatar: 'https://api.adorable.io/avatars/132/2.png'
        },
        {
          title: '3.-Ali Connors',
          avatar: 'https://api.adorable.io/avatars/132/3.png'
        },
        {
          title: '4.-Cindy Baker',
          avatar: 'https://api.adorable.io/avatars/132/4.png'
        }
        ]
        */
      }
    },
    methods: {

    },
    created: function () {
    // scores.push(items[0]);
    }
  }
</script>
