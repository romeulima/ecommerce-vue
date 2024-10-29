<script setup lang="ts">
  import { useCartStore } from '@/stores/cart';
  import { computed, toRef } from 'vue';
  import { RouterLink } from 'vue-router';
  
  const cartStore = useCartStore()
  
  const { increaseProduct, decreaseProduct, removeProduct } = cartStore
  
  const details = computed(() => {
    return cartStore.details
  })

</script>

<template>
  <div class="d-flex justify-center align-center" style="min-height: 80vh">
    <v-sheet
      class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 pt-6"
      elevation="4"
      min-height="250"
      width="100%"
      max-width="800"
      rounded
    >
      <div>
        <h2 class="text-h4 font-weight-black text-orange">Shopping cart</h2>
  
        <v-list v-if="details.length > 0">
          <v-list-item v-for="detail in details" :key="detail.product.id">
  
            <v-list-item-title>
              {{ detail.product.name }} 
              
              <v-btn
                class="ml-2"
                icon="mdi-minus"
                size="x-small" 
                @click="decreaseProduct(detail.product.id)"
              />
  
              Quantity: {{ detail.quantity }}
              <v-btn
                icon="mdi-plus"
                size="x-small" 
                @click="increaseProduct(detail.product.id)"
              />
  
              <v-btn
                class="ml-2"
                icon="mdi-delete"
                size="x-small" 
                @click="removeProduct(detail.product.id)"
              />
            </v-list-item-title>
          </v-list-item>
        </v-list>
        <div v-else>
          <p class="text-body-4 my-4">
            There isn't products on shopping cart
          </p>
          <RouterLink to="/" custom v-slot="{navigate}">
            <v-btn 
            color="orange" 
            variant="text"
            @click="navigate"
          >
            Go to home
          </v-btn>
          </RouterLink>
        </div>
      </div>
    </v-sheet>
  </div>
</template>