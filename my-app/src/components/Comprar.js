import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

export const Comprar = ({props}) => {

    useEffect(()=>{

        Aos.init({duration:2000});

    },[]);

    const addToCartHandler = ()=>{
        props.history.push(`/cart`)
    }


    return (
        <div>

            <button onClick={addToCartHandler} id="comprar">
                Comprar
            </button>
            
        </div>
    )
}
