import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import Sidebar from './Sidebar';
import { ProductContextData } from '../utils/ProductContext';
import Loading from './Loading';
import { Link, useLocation } from 'react-router-dom';
import axios from '../utils/Axios';

function Home() {
  const [products, setProducts] = useContext(ProductContextData);
  const { search } = useLocation();
  const currentCategory = decodeURIComponent(search.split("=")[1]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getCategoryProducts = async () => {
    try {
      const { data } = await axios.get(`/products/category/${currentCategory}`);
      setFilteredProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentCategory === "undefined") {
      setFilteredProducts(products);
    } else {
      getCategoryProducts();
    }
  }, [currentCategory, products]);

  return products.length > 0 ? (
    <div className='flex h-screen'>
      <Link className='bg-blue-500 hover:bg-blue-300 absolute left-[1%] top-[35%] text-white px-2 py-1 rounded-full font-semibold' to={'/'} >Go to Home</Link>
      <Sidebar className='shrink-0' />
      <div className="overflow-y-auto h-full flex w-[80%] p-2 flex-wrap gap-4">
  {filteredProducts.map((product) => (
    <Card key={product.id} product={product} />
  ))}
</div>

    </div>
  ) : (
    <Loading />
  );
}

export default Home;
