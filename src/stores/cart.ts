import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { CartDetails, Product } from '@/models/models'

export const useCartStore = defineStore('cart', () => {
  const details = ref<CartDetails[]>([])

  const totalItems = computed(() => {
    return details.value.reduce((total, currentValue) => {
      return total + currentValue.quantity
    }, 0)
  })

  function addProduct(product: Product) {
    const productFound = details.value.find(p => p.product.id === product.id)

    if (productFound) {
      productFound.quantity++
      return
    }
    details.value.push({
      product: product,
      quantity: 1
    })
  }

  function removeProduct(productId: number) {
    details.value = details.value.filter(p => p.product.id !== productId)
  }
  
  function increaseProduct(productId: number) {
    const productFound = details.value.find(p => p.product.id === productId)
    
    if (productFound) {
      productFound.quantity++
    }
  }

  function decreaseProduct(productId: number) {
    const productFound = details.value.find(p => p.product.id === productId)
    
    if (productFound) {
      productFound.quantity--

      if (productFound.quantity === 0) {
        removeProduct(productId)
      }
    }
  }

  return { details, totalItems, addProduct, increaseProduct, decreaseProduct, removeProduct }
})
