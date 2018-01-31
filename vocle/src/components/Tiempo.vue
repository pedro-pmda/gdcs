<template>
 <v-container fluid class="pa-0">
    
     <v-toolbar-title><span>How many minutes do you play?</span></v-toolbar-title>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <div class="text-xs-center">
          <v-card flat>
            <v-card-text>
              <div>
                <v-btn color="primary" fab large dark>
                  3'
                </v-btn>
              </div>
              <div>
                <v-btn color="warning" fab large dark>
                  5'
                </v-btn>
              </div>
              <div>
                <v-btn color="error" fab large dark>
                  7'
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-flex>      
    </v-layout>
  </v-container></template>

<script>
  export default {
    data () {
      return {
        allowedTimesHours: [],
        allowedTimesMinutes: [5, 7, 10]
      }
    },
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>