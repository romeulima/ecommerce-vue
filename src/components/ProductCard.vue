<script setup lang="ts">
  import { useCartStore } from '@/stores/cart';
  import type { Product } from '../models/models';

  const props = defineProps<Product>();
  
  function handleClickButton() {
    const cartStore = useCartStore()

    cartStore.addProduct(props.id)
  }
</script>


<template>
  <v-card>
    <v-img
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      cover/> 

    <v-card-item>
      <v-card-title>
        {{ name }}
      </v-card-title>
    </v-card-item>

    <v-card-text>
      <p class="mb-4">Este eh um exemplo</p>
      <v-chip>
        $ {{ price }}
      </v-chip>
    </v-card-text>

    <v-card-actions>
      <v-btn 
        @click="handleClickButton"
        color="orange"
      >
        Agregar al carrito
      </v-btn>
    </v-card-actions>
  </v-card>
</template>