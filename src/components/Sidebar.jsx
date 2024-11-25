import React, { useContext } from 'react'
import { ProductContextData } from '../utils/ProductContext';
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
  const [products] = useContext(ProductContextData);
  let categories = products && products.reduce((acc, curr) => [...acc, curr.category], []);
  categories = [...new Set(categories)];
  return (
    <>
    {/* <div className='w-[20%] bg-green-400 py-5 px-2 h-screen'></div> */}
    <div className='w-64 h-screen bg-gray-800 flex flex-col py-5 px-2 text-xl'>
  <h1 className='bg-blue-700 font-semibold text-center w-full py-3 inline-block border-white text-white hover:bg-blue-500 hover:text-white ease-in duration-200 rounded-md cursor-pointer'>
    Add New Product
  </h1>
  <div className='mt-5 rounded-md h-fit border-2 border-white p-2'>
    <h1 className='text-xl font-semibold text-white'>Categories:</h1>
    <ul className='flex flex-col'>
      {categories.map((item, idx) => (
        <NavLink  key={idx} to={`/?category=${item}`} >
          <li className='cursor-pointer text-white flex items-center hover:bg-blue-600 hover:text-white pl-3 rounded-md text-lg'>
            <span className='rounded-full bg-white border border-black w-3 h-3 inline-block mr-1'></span>
            {item}
          </li>
        </NavLink>
      ))}
    </ul>
  </div>
</div>

    </>
  )
}

export default Sidebar