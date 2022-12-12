import React from 'react'
import { useSelector } from 'react-redux'
export default function Money() {
    const money = useSelector((state)=>state.shopping.total)
  return (
    <div style={{minHeight:"100px",background:"#e2e65"}} className="bg-info text-white text-center d-flex align-items-center justify-content-center my-5">{money+"₺"}</div>
  )
}
