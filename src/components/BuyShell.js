import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddToProduct,SellToProduct} from '../redux/features/shoppingSlice'
export default function BuyShell({product}) {
    const [urunAdet,setUrunAdet] = useState(0)
    const dispatch = useDispatch()
    const onChangeHandle=(e)=>{
        setUrunAdet(e.target.value)
    }
  return (
    <div className='d-flex justify-content-center'>
        <button  className='btn btn-sm btn-success mr-2' onClick={()=>{dispatch(AddToProduct({product:product,count:urunAdet}));setUrunAdet(0)}}>Buy</button>
        <input className="mr-2 w-25 h-100 form-control" value={urunAdet}  type="number" onChange={onChangeHandle} min={0}/>
        <button className='btn btn-sm btn-danger' onClick={()=>{dispatch(SellToProduct({product:product,count:urunAdet})); setUrunAdet(0)}}>Shell</button>
    </div>
  )
}
