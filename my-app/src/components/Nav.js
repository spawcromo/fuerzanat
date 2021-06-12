import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions/userActions';
/* import { Link } from 'react-router-dom' */

export const Nav = () => {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;


    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();


    const signoutHandler = ()=>{

        dispatch(signout());

    }



    return (
        <div className="nav animate__animated animate__zoomIn">

            <a href='/'>
                <img id="logo" alt="logo" className='animate__animated animate__backInDown' src="../img/logo.png" />

            </a>

            <div className="iconos">


                <a className="cart" href="/cart">
                    <img src="../img/cart.png" alt="cart-icon" />
                    {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
                </a>

                {userInfo ? (

                    <div className="dropdown">
                        <a className="name" href="#">{userInfo.name}<i className="fa fa-caret-down"></i></a>
                        <ul className="dropdown-content">
                            <a href="#signout" onClick={signoutHandler}><span>Salir</span></a>

                        </ul>
                    </div>

                ) :
                    <a className="cart" href="/signin"><img src="../img/user.png" alt="user-icon" /></a>}

            </div>





        </div >
    )
}

/* className="animate__animated animate__backInRight animate__delay-2s" */