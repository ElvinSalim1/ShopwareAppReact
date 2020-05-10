import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from '../cart/Cart'

export default function Navbar() {

    let cartQuantity = useSelector(state => state.cart.totalCartQuantity)

    return (
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color fixed-top">
            <Link to="/products" className="navbar-brand mb-1"><i></i>ShopWare</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto nav-flex-icons ">
                  <li className="nav-item dropdown"><a href="!#" className="nav-link mr-4" type="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                      {cartQuantity} 
                      <i className="fas fa-shopping-cart"></i>
                      </a>
                      <div id="shopping-cart" className="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
                        <Cart />
                      </div>
                  </li>
                </ul>
            </div>
        </nav>
    )
}

