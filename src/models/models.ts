export interface Product {
  id: number
  name: string
  price: number
}

export interface CartDetails{
  product: Product
  quantity: number
}

export interface Category{
  id: number
  name: string
}