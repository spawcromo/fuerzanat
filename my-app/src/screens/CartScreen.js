import React from 'react'
import {  useSelector } from 'react-redux';

import { MessageBox } from '../components/MessageBox';
import { Link } from 'react-router-dom';
import { ProductCartScreen } from './ProductCartScreen';


export default function CartScreen(props) {

    /*    const productId = props.match.params.id;
    */


    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;





    /*     const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1; */

    /*    useEffect(() => {
           if (productId) {
               dispatch(addToCart(productId, qty))
           }
   
       }, [dispatch, productId, qty]) */



    const checkOutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }


    
    return (
        <div >

            <h1>Carrito</h1>
            {cartItems.length === 0 ? (<MessageBox>Cart is empty. <Link to="/">Volver a la tienda</Link></MessageBox>)
                :
                (
                  
                    <ul>
                        {
                          
                            cartItems.map((item) => (

                               
                                <ProductCartScreen item={item} key={item.product} />
                                

                            ))

                        }
                    </ul>

                )}


            <div>Total{/*  ({cartItems.reduce((a, c) => a + c.qty, 0)} items)  */}:
                       $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}

                <button type="button" onClick={checkOutHandler} disabled={cartItems.length === 0}>Finalizar compra</button>

            </div>




        </div>
    )
}

/* name: data.name,
image: data.image,
price: data.price,
product: data.id,
qty, */