import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import { CheckOutSteps } from '../components/CheckOutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import {LoadingBox} from '../components/LoadingBox.js';
import {MessageBox} from '../components/MessageBox.js';

export function PlaceOrderScreen(props) {
    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod) {
        props.history.push('/payment');
    }

    const orderCreate = useSelector(state=>state.orderCreate);
    const {loading, success, error, order} = orderCreate;

    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12

    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );

    cart.shippingPrice = cart.itemsPrice > 1000 ? toPrice(0) : toPrice(100);
 
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice ;
    const dispatch = useDispatch();
    const placeOrderHandler = () => {

        dispatch(createOrder({...cart, orderItems: cart.cartItems}));

    };

    useEffect(()=>{

        if(success){
            props.history.push(`/order/${order._id}`);
            dispatch({type: ORDER_CREATE_RESET});
        }

    },[dispatch, order, props.history, success]);



    return (


        <div className="placeorder-screen">

            <h5>PlaceOrder</h5>

            <CheckOutSteps step1 step2 step3 step4></CheckOutSteps>

            <div className="cards-cart1">



                <div className="card-cart1">
                    <h2>Dirección de envío</h2>
                    <p>
                        <strong>Name:</strong> {cart.shippingAddress.fullName} <strong>Address: </strong> {cart.shippingAddress.address}, {cart.shippingAddress.city}.
                    </p>
                </div>


                <div className="card-cart1">
                    <h2>Método de pago</h2>
                    <p>
                        <strong>Vía:</strong> {cart.paymentMethod}
                    </p>
                </div>



                <div className="card-cart2">
                    <h2 className="titulo">Pedido</h2>

                    <div className="generation" >

                        {cart.cartItems.map((item) => (

                            <div className="generation1" key={item.product}>

                                <div className="div-img">
                                    <img src={item.image} alt={item.name} className="mini" />
                                </div>

                                <div className="textos">
                                    <h3>{item.name.substring(0, 15)}...</h3>
                                    <p>{item.qty} x ${item.price} = ${item.qty * item.price}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

                <div className="card-cart3">

                    <h2>Resumen de compra</h2>

                        <p>Productos: ${cart.itemsPrice.toFixed(2)}</p>
         
                        <p>Envío: ${cart.shippingPrice.toFixed(2)}</p>

                        <p><strong> Order Total: ${cart.totalPrice.toFixed(2)}</strong></p>
    
                    <button
                        type="button"
                        onClick={placeOrderHandler}
                        className="button"
                        disabled={cart.cartItems.length === 0}
                    >
                        Pagar
                    </button>

                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}

                </div>




            </div>

            {/* 
   
                  
                            
                          
                      
                            
              
          
 */}
        </div>
    );
}