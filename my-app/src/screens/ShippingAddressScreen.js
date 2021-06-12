import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions.js';
import { CheckOutSteps } from '../components/CheckOutSteps.js';

export const ShippingAddressScreen = (props) => {

    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;

    const cart = useSelector(state=>state.cart);
    const {shippingAddress} = cart;
    const {cartItems} = cart;

    if(!userInfo){
        props.history.push('/');
    }

    if(!cartItems[0]){
        props.history.push('/');
    }

 

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);

    const dispatch = useDispatch();


    const submitHandler = e => {
        e.preventDefault();
        dispatch(saveShippingAddress({ fullName, address, city }));

        props.history.push('/payment');

    };


    return (
        <div className="shipping-screen">

            <h5>Shipping</h5>

            <CheckOutSteps step1 step2></CheckOutSteps>

            <form className="form" onSubmit={submitHandler}>


                <h2>Shipping Address</h2>

                <label htmlFor="fullName">Nombre completo</label>
                <input
                    type="text"
                    id="fullName"
                    placeholder="Ricardo Sanchez"
                    value={fullName}
                    required
                    onChange={e => setFullName(e.target.value)}>
                </input>

                <label htmlFor="address">Dirección</label>
                <input
                    type="text"
                    id="address"
                    placeholder="Barrera 18"
                    value={address}
                    required
                    onChange={e => setAddress(e.target.value)}>
                </input>

                <label htmlFor="city">Departamento</label>
                <input
                    type="text"
                    id="city"
                    placeholder="Maipú"
                    value={city}
                    required
                    onChange={e => setCity(e.target.value)}>
                </input>


                <button className="button" type="submit">Continuar</button>


            </form>

        </div>
    )
}
