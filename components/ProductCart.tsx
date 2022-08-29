import React, { useState } from 'react'
import Dropdown from './dropdown'

export const ProductCart = ({product}:any) => {
    const [total, setTotal] = useState(0)
  // useEffect(()=>{
  //   console.log(total);
    
  // },[total])
  const Subtotal = (x: string,t :any) => {
     let c = +x * t
    return setTotal(c)    
  }
  return (
    <div><li key={product.id} className="flex py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-full w-full object-cover object-center"
      />
    </div>

    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href={product.href}>
              {product.name}
            </a>
          </h3>
          <p className="ml-4">{total? "$"+ total:"$"+ product.price }</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          {product.color}
        </p>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">
          <Dropdown
            onChange={(e) => {
               Subtotal(product.price, +e )
            }}
            values={Array.from(
              Array(product.availableQty),
              (_, i) => i + 1

            )}
          />
        </p>

        <div className="flex">
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </li></div>
  )
}

export default ProductCart
