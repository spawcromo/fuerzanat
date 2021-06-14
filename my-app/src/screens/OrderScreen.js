import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder } from '../actions/orderActions';
import { CheckOutSteps } from '../components/CheckOutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import {LoadingBox} from '../components/LoadingBox.js';
import {MessageBox} from '../components/MessageBox.js';

export function OrderScreen(props) {
 
    const orderId = props.match.params.id;
    const orderDetails = useSelector(state=> state.orderDetails);
    const {order,loading,error} = orderDetails;

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(detailsOrder(orderId));

    },[dispatch, orderId]);



    return loading ? (<LoadingBox></LoadingBox>) : 
    error ? (<MessageBox variant="danger">{error}</MessageBox>):(


        <div className="placeorder-screen">

            <h5>PlaceOrder</h5>

            <div className="cards-cart1">

                <h1>Order {order._id}</h1>

                <div className="card-cart1">
                    <h2>Dirección de envío</h2>
                    <p>
                        <strong>Name:</strong> {order.shippingAddress.fullName} <strong>Address: </strong> {order.shippingAddress.address}, {order.shippingAddress.city}.
                    </p>
                    {order.isDelivered ? <MessageBox variant="success">Enviado a {order.deliveredAt}</MessageBox>
                : <MessageBox variant="danger">No enviado</MessageBox>    
                }
                </div>


                <div className="card-cart1">
                    <h2>Método de pago</h2>
                    <p>
                        <strong>Vía:</strong> {order.paymentMethod}
                    </p>
                    {order.isPaid ? <MessageBox variant="success">Enviado a {order.paidAt}</MessageBox>
                : <MessageBox variant="danger">No pago</MessageBox>    
                }
                </div>



                <div className="card-cart2">
                    <h2 className="titulo">Pedido</h2>

                    <div className="generation" >

                        {order.orderItems.map((item) => (

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

                        <p>Productos: ${order.itemsPrice.toFixed(2)}</p>
         
                        <p>Envío: ${order.shippingPrice.toFixed(2)}</p>

                        <p><strong> Order Total: ${order.totalPrice.toFixed(2)}</strong></p>
    
       

                </div>




            </div>

            {/* 
   
                  
                            
                          
                      
                            
              
          
 */}
        </div>
    );
}