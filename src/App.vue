<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import TopBar from './components/TopBar.vue';
</script>

<template>
  <v-app>
    <TopBar/>
    <v-main>
      <v-container>
        <RouterView/>
      </v-container>
    </v-main>
  </v-app>
</template>

