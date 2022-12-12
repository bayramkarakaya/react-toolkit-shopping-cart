import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../product";
export const shoppingSlice=createSlice({
    name:"shopping",
    initialState:{
        items:products,
        total:1000000000,
        shoppingCart:[],
        yedek:[]
    },
    reducers:{
        AddToProduct:(state,action)=>{
             const sonuc = state.shoppingCart.some((item)=>{
               return item.product.id==action.payload.product.id
                
               

            })
            if(sonuc){
                state.shoppingCart.forEach((item)=>{
                    if(item.product.id ==action.payload.product.id)
                    item.count = Number(item.count)+Number(action.payload.count)     
                 })
            }
            else{
                state.shoppingCart.push({...action.payload})
            }
             
               
            
            
                
            
            state.total = state.total - action.payload.product.price * action.payload.count
        },
        SellToProduct:(state,action)=>{
            
            if(state.shoppingCart && state.shoppingCart.length>0){
               
                state.shoppingCart.forEach((item)=>{
           
                    if(item.product.id==action.payload.product.id)
                    {
                        
                        item.count = item.count-action.payload.count
                        if(item.count == action.payload.count){
                          state.shoppingCart=  state.shoppingCart.filter((urun)=>{
                              return  urun.product.id!=action.payload.product.id
                            })
                        }
                    }
                })
                state.total = state.total + action.payload.product.price * action.payload.count
            }
            
        }
    }
})
export const {AddToProduct,SellToProduct} = shoppingSlice.actions
export default shoppingSlice.reducer