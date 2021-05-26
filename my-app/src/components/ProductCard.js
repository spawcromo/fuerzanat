import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';



export const ProductCard = ({ product }) => {

    const [qty, setQty] = useState(1)

    //USEEFFECT PARA LA ANIMACION DE LA TARJETA

    useEffect(() => {

        Aos.init({

            duration: 1500

        });

    }, []);



    const dispatch = useDispatch();
    const agregar = ()=>{

        dispatch(addToCart(product._id, qty))

    }

    console.log(product._id)

    return (

        <>
            {
                /*  animate__animated animate__backInDown animate__delay-1s */
                <div data-aos="fade-up"
                    className="card ">
                    
                
                    <img src={product.image} alt={product.name} />

            

                    <h2>{product.name}</h2>

                    <span>$ {qty * product.price}</span>

                    <div className="shop-form">

                        <select onChange={(e) => {
                            const seleccion = e.target.value;
                            setQty(seleccion);
                        }} name="select">

                            <option key={1} value={1}>1</option>
                            <option key={2} value={2}>2</option>
                            <option key={3} value={3}>3</option>
                            <option key={4} value={4}>4</option>
                            <option key={5} value={5}>5</option>
                            <option key={6} value={6}>6</option>


                        </select>


                        <button onClick={agregar} key={product.id}>Agregar</button>

                    </div>

                    

                </div>
            }
        </>
    )
}

