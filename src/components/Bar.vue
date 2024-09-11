<script setup lang="ts">
  import { RouterLink, useRoute } from 'vue-router';
  import { useCartStore } from '@/stores/cart';
  import { computed } from 'vue';

  const route = useRoute()

  const totalItems = computed(() => {
    const cartStore = useCartStore()

    return cartStore.totalItems
  })

  const showBadge = computed(() => {
    return totalItems.value > 0
  })
</script>

<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar
        class="me-4 "
        color="grey-darken-1"
        size="32"
      ></v-avatar>

      <RouterLink to="/" custom v-slot="{ navigate }">
        <v-btn :active="route.name === 'home'" @click="navigate">
          Home
        </v-btn>
      </RouterLink>

      <RouterLink to="/cart" custom v-slot="{ navigate }">
        <v-badge color="orange-lighten-1" :content="totalItems" :model-value="showBadge">
          <v-btn :active="route.name === 'cart'" @click="navigate">
            Cart
          </v-btn>
        </v-badge>
      </RouterLink>
      
      <RouterLink to="/about" custom v-slot="{ navigate }">
        <v-btn :active="route.name === 'about'" @click="navigate">
          About
        </v-btn>
      </RouterLink>
      <v-spacer></v-spacer>
    </v-container>
  </v-app-bar>
</template>