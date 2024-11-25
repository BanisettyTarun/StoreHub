import React from 'react'
import LoadingGif from '../assets/LoadingGif.svg';
function Loading() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <img className='w-40' src={LoadingGif} alt="Loading" />
    </div>
  )
}

export default Loading