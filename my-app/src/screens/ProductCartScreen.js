import React, { useState } from 'react'
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



export const ProductCartScreen = ({ item }) => {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;
    const [qty2, setQty2] = useState(cartItems.qty);



    const qty = cartItems[cartItems.indexOf(item)]?.qty;


    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => {

        dispatch(removeFromCart(id));

    };



    return (
        <>

            <li key={item.product}>

                <div>
                    <img src={item.image} alt={item.name} className="mini"/>
                </div>

                <div>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                </div>

                <div>
                    <select value={item.qty} name="select" onChange={e => {

                        dispatch(
                            addToCart(item.product, Number(e.target.value)))

                        const seleccion = e.target.value;
                        setQty2(seleccion);


                    }


                    }>
                        <option key={1} value={1}>1</option>
                        <option key={2} value={2}>2</option>
                        <option key={3} value={3}>3</option>
                        <option key={4} value={4}>4</option>
                        <option key={5} value={5}>5</option>
                        <option key={6} value={6}>6</option>


                    </select>
                </div>

                <div>

                    ${qty2 ? (item.price * qty2) : (item.price * qty)}




                </div>

                <div>
                    <button type="button" onClick={() => removeFromCartHandler(item.product)}>
                        Delete
                     </button>
                </div>


                


            </li>



        </>
        
    )
   
}
