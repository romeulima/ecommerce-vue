<script setup lang="ts">
  import { ref } from 'vue';

  import ProductCard from './ProductCard.vue';

  import type { Product } from "../models/models";

  const products = ref<Product[]>([
  {
    id: 1,
    name: "Monitor",
    price: 56
  },
  {
    id: 2,  
    name: "Mic",
    price: 120
  },
  {
    id: 3,  
    name: "Tablet",
    price: 120
  },
  {
    id: 4,  
    name: "Phone",
    price: 120
  },
  {
    id: 5,  
    name: "Book",
    price: 120
  },
  {
    id: 6,  
    name: "Laptop",
    price: 120
  }
  ])

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="product in products" :key="product.id">
        <ProductCard  
          :id="product.id"
          :name="product.name"
          :price="product.price"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

