import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { CartDetails } from '@/models/models'

export const useCartStore = defineStore('cart', () => {
  const details = ref<CartDetails[]>([])

  const totalItems = computed(() => {
    let sum = 0
    details.value.forEach(product => {
      sum += product.quantity
    })
    return sum
  })

  function addProduct(productId: number) {
    const productFound = details.value.find(product => product.id === productId)

    if (productFound) {
      productFound.quantity++
      return
    }
    details.value.push({
      id: productId,
      quantity: 1
    })
  }

  function removeProduct(productId: number) {
    const newList = details.value.filter(product => product.id !== productId)
    details.value = newList
  }
  
  function increaseProduct(productId: number) {
    const productFound = details.value.find(product => product.id === productId)
    
    if (productFound) {
      productFound.quantity++
    }
  }

  function decreaseProduct(productId: number) {
    const productFound = details.value.find(product => product.id === productId)
    
    if (productFound) {
      productFound.quantity--
    }

    if (productFound?.quantity === 0) {
      removeProduct(productFound?.id)
    }
  }

  return { details, totalItems, addProduct, increaseProduct, decreaseProduct, removeProduct }
})
