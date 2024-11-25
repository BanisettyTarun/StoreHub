import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContextData } from '../utils/ProductContext';

function Card({product}) {
  // const [products] = useContext(ProductContextData);
  return (
    <Link
    to={`/details/${product.id}`}
    className="flex flex-col basis-[calc(20%-1rem)] min-w-[200px] py-5 px-5 border-2 border-black h-[300px] rounded-md cursor-pointer"
  >
    <div
      className="h-3/4 bg-contain hover:scale-110 bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${product.image})` }}
    ></div>
    <p className="hover:underline hover:text-blue-700 mt-5 text-sm">
      {product.title}
    </p>
  </Link>
  
  )
}

export default Card