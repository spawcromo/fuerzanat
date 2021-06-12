import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import { CheckOutSteps } from '../components/CheckOutSteps'

export const PaymentMethodScreen = (props) => {

    const cart = useSelector(state=>state.cart);
    const {shippingAddress} =cart;


    if(!shippingAddress.address){
        props.history.push('/shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState('mercadopago');

    const dispatch =useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');

    }
    return (

        <div className="payment-screen">

            <h5>Payment</h5>

            <CheckOutSteps step1 step2 step3></CheckOutSteps>

            <form className="form" onSubmit={submitHandler}>


            

                {/* <input type="radio" id="mercadopago" value="mercadopago" name="paymentMethod" required checked onChange={e => setPaymentMethod(e.target.value)}>

                </input> */}


                <img src="../img/mercado.svg" alt="logo de mercadopago"></img>
                {/* <label htmlFor="mercadopago">Mercadopago</label> */}

                <button className="button" type="submit">Continuar</button>


            </form>
        </div>
    )
}
