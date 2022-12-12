import React from 'react'
import { useSelector } from 'react-redux'
import '../assets/css/product.css'
import BuyShell from './BuyShell'
export default function ProductList() {
    const productList =useSelector((state)=>state.shopping.items)
    console.log(productList) 
  return (
    <>
      {productList && productList.map((product)=>
        <div className="col-md-3 pr-1 mt-2 border-0 product-card-row pl-0" key={product.id}>
             <div className="card product-card">
        <img className="card-img-top" src={product.img} alt="Card image cap"/>
        <div className="card-body text-success d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title text-center">{product.productName.toUpperCase()}</h5>
          <p className='text-center'>{product.price + "₺"}</p>
         <BuyShell product={product}/>
        </div>
      </div>
        </div>
      
        )}
   
    </>
  
  )
}
