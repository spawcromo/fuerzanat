import React from 'react'
import { useSelector } from 'react-redux'
/* import { Link } from 'react-router-dom' */

export const Nav = () => {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;



    return (
        <div className="nav animate__animated animate__zoomIn">

            <a href='/'>
                <img id="logo" alt="logo" className='animate__animated animate__backInDown' src="../img/logo.png" />
            </a>

            <div className="iconos">


                <a className="cart" href="/cart"><img src="../img/cart.png" alt="cart-icon" />
                    {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
                </a>


                <a className="cart" href="/login"><img src="../img/user.png" alt="user-icon" /></a>

            </div>





        </div >
    )
}

/* className="animate__animated animate__backInRight animate__delay-2s" */