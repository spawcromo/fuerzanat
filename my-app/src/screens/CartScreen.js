import React from 'react'
import { useSelector } from 'react-redux';

import { MessageBox } from '../components/MessageBox';
import { Link } from 'react-router-dom';
import { ProductCardCart } from '../components/ProductCardCart';


export default function CartScreen(props) {




    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    if (!userInfo) {
        props.history.push('/signin');
    }

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const checkOutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }




    return (
        < >

            <div className="cart-screen">

                <p>Carrito</p>
                {cartItems.length === 0 ? (<MessageBox>El carrito está vacío. <Link to="/">Volver a la tienda</Link></MessageBox>)
                    :
                    (

                        <div className="cards-cart">
                            {

                                cartItems.map((item) => (


                                    <ProductCardCart item={item} key={item.product} />


                                ))

                            }
                        </div>

                    )}


                <div className="price">Total{/*  ({cartItems.reduce((a, c) => a + c.qty, 0)} items)  */}:
           $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}

                    <button className="button" type="button" onClick={checkOutHandler} disabled={cartItems.length === 0}>Finalizar compra</button>

                </div>

            </div>




        </>
    )
}
