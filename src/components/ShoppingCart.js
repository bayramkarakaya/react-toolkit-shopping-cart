import React from 'react'
import { useSelector } from 'react-redux'
export default function ShoppingCart() {
  const products = useSelector((state)=>state.shopping.shoppingCart)
 console.log(products)
  return (
    <>
    <div className='col-md-12 bg-light py-5'>
          {products && products.map((item,index)=>{
            return(
                <div className='  d-flex justify-content-center' key={index}>
                    <strong  className="text-success">{item.product.productName}</strong>&nbsp;<span className='text-danger'>{item.count}X</span>&nbsp; <span>{item.product.price * item.count + "₺"}</span>
                </div>
               
            )
          })}
          
    </div>
    </>
  )
}
