<template>
  <v-app>
    <!--<div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">-->
    <v-toolbar color="pink">
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-toolbar-title class="white--text">VOCLE</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="white--text">My Best Score: 120 &nbsp</span>
      <v-flex xs1>
        <v-avatar size="36px" slot="activator">
          <img src="https://lh3.googleusercontent.com/-FDa3Zfo4b4g/AAAAAAAAAAI/AAAAAAAAAAA/ACSILjXPtzCJizlXySx8a7YQp9PxqaXUng/mo/photo.jpg?sz=46"
            alt="">
        </v-avatar>
      </v-flex>
      <!--
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      -->
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>

    <template>
      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div> Pedro Palazón - Udacity Google ScholarShip Challenge © {{ new Date().getFullYear() }}</div>
      </v-footer>
    </template>
    <!--</div>-->
  </v-app>
</template>

<!--
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    -->

<!--
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
-->

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    name: 'App',
    created () {
    }
  }
</script>
