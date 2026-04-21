import React from 'react'
import { ProductsType } from '@/types'


type props = {
  product: ProductsType
}

const ProductCard = ({product}: props) => {
  return (
     <div>
      <h2>{product.name}</h2>
    </div>
  )
}

export default ProductCard