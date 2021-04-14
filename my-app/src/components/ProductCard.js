import React, { useState } from 'react';

export const ProductCard = ({ product }) => {

    const [qty, setQty] = useState(product.price[0])

    
    
    console.log(product)

    return (

        <>
            {
                
                <div className="card">

                    <img src={product.image} alt={product.name} />

                    <h2>{product.name}</h2>

                    <span>$ {qty}</span>

                    <form className="shop-form">

                    <select onChange={(e) => {
                        const seleccion = e.target.value;
                        setQty(seleccion);
                    }} name="select">

                        <option value={product.price[0]}>{product.quant[0]}</option>
                        <option value={product.price[1]}>{product.quant[1]}</option>
                        <option value={product.price[2]}>{product.quant[2]}</option>


                    </select>


                    <button>Agregar</button>

                    </form>

                </div>
            }
        </>
    )
}

