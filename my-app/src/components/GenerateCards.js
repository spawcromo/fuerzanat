
import { ProductCard } from '../components/ProductCard';
import data from '../data';

export function GenerateCards() {


  return (

    <>

      <div className="card-boundle animate__animated animate__backInDown animate__delay-1s">

        {data.products.map((product) => {
          return (
            <ProductCard product={product} key={product.id} />
          )
        })}

      </div>

    </>

  );
}

