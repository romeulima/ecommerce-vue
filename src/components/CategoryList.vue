<script setup lang="ts">
  import type { Category } from '@/models/models';
  import { ref } from 'vue';

  const categories = ref<Category[]>([
    {
      id: 1,
      name: "Music"
    },
    {
      id: 2,
      name: "Tech"
    },
    {
      id: 3,
      name: "Books"
    }
  ])
</script>

<template>
  <v-sheet rounded="lg">
    <v-list rounded="lg">
      <v-list-item
        v-for="category in categories"
        :key="category.id"
        link>
        <v-list-item-title>
          {{ category.name }}
        </v-list-item-title>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list-item
        color="grey-lighten-4"
        link>
        <v-list-item-title>
          Order by price  
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>