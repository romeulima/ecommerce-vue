<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Bar from './components/Bar.vue';
</script>

<template>
  <v-app>
    <Bar/>
    <v-main>
      <v-container>
        <RouterView/>
      </v-container>
    </v-main>
  </v-app>
</template>

