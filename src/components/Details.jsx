import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContextData } from '../utils/ProductContext';
import axios from '../utils/Axios';
import Loading from './Loading';

function Details() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProduct = async ()=>{
    try{
      const {data} = await axios.get(`/products/${id}`)
      console.log(data);
      setProduct(data);
    }
    catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    getProduct();
  }, [])

  // const rating = product.rating.rate;
  // const count = product.rating.count;
  return (
    product!==null ? (
      <div className='w-full h-screen flex items-center justify-center ' >
        <div className='w-[60%] h-[70%] flex items-center justify-center border-2 border-black rounded-md '>
            <div className='w-40% h-full p-10 flex items-center'>
            <img className='w-80 object-cover' src={product.image} alt="" />
            </div>
            <div className='w-[60%] py-10 flex gap-3 flex-col'>
                <h1 className='text-2xl font-bold'>{product.title}</h1>
                <h2 className='font-semibold'>{product.category}</h2>
                <h2 className='font-semibold'>$ {product.price}</h2>
                <p className='leading-5 text-sm'>{product.description}</p>
                <h3><span className='font-bold'>Rating:</span> <span className='font-semibold'>{product.rating.rate}/5</span></h3>
                <h3><span className='font-bold'>Purchased by:</span> <span className='font-semibold'> {product.rating.count}</span></h3>

                <div className='flex gap-5 mt-5'>
                <Link to='/'  className='border-2 border-blue-600 px-2 py-1 rounded-md font-semibold text-blue-600 hover:text-white hover:bg-blue-600 ease-in duration-200'>Edit</Link>
                <Link to='/' className='border-2 border-red-600 px-2 py-1 rounded-md font-semibold text-red-600 hover:text-white hover:bg-red-600 ease-in duration-200'>Delete</Link>
                </div>
            </div>
        </div>
    </div>
    ) : <Loading />
  )
}

export default Details