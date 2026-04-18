import React from 'react'
import { ProductsType } from '@/types'

const ProductCard = ({product}: {product: ProductsType}) => {
  return (
     <div>
      <h2>{product.name}</h2>
      <p>{product.shortDescription}</p>
      <p>${product.price}</p>
    </div>
  )
}

export default ProductCard