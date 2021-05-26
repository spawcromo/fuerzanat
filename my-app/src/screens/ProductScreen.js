import React, { useEffect, useState } from 'react'
/* import { productDetailesReducer } from '../reducers/productReducers' */

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProducts } from '../actions/productActions';
import { LoadingBox } from '../components/LoadingBox';
import { MessageBox } from '../components/MessageBox';

export default function ProductScreen(props) {

    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);

    const { loading, error, product } = productDetails;

    const [qty, setQty] = useState(1)


  

    useEffect(() => {
        dispatch(detailsProducts(productId));
    }, [dispatch, productId])

    const addToCartHandler = ()=>{
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

    return (
        <div className='pera'>

            <Link to="/">Volver</Link>

            {loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : <div>
                        <h1>{product.id}</h1>
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


                            <button onClick={addToCartHandler}
                              
                            key={product.id}>Agregar</button>

                        </div>



                    </div>
            }





        </div >
    )
}
