import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
export default function Cart() {


   const shoppingCart = useSelector(state => state.cart.shoppingcart)
   const shoppingCartTotalAmount = useSelector(state => state.cart.totalCartAmount)


   return (
      <div className="min-width">
         {
            shoppingCart.map(product => {
               return (<CartItem item={product} key={product.id} />)
            })
         }
         {
            shoppingCart.length < 1 ?
               <div className="cart-item">
                  <div className="p-2 d-flex justify-content-center align-items-center">
                     <div className="d-flex align-items-center">Kundvagn är tom</div>
                  </div>
                  <div className="dropdown-divider"></div>
               </div>
               : ''
         }
         <div className="p-2 d-flex justify-content-between align-items-center">
            <div>
               <div className="total-price ml-2">
                  Totalt: <span className="ml-1">{shoppingCartTotalAmount} SEK</span>
               </div>
            </div>
               <button className="btn btn-success">CHECKOUT</button>            
         </div>
      </div>
   )
}
