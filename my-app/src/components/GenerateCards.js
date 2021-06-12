
import React, { useEffect} from 'react';
import { ProductCard } from '../components/ProductCard';
import { LoadingBox } from './LoadingBox';
import { MessageBox } from './MessageBox';
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';


export function GenerateCards() {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const {loading, error, products} = productList;

  useEffect(() => {

    dispatch(listProducts());

  }, [dispatch])


  return (

    <>

      {loading ? (<LoadingBox></LoadingBox>)
        :
        error ? (<MessageBox variant="danger">{error}</MessageBox>)
          : (<div className="card-boundle ">

            {products.map((product) => {
              return (
                <ProductCard product={product} key={product._id} />
              )
            })}

          </div>)
      }



    </>

  );
}

