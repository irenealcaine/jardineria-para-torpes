import React from 'react'

const Filter = () => {
  return (
    <div className='bg-green-50 bg-opacity-60 shadow-2xl rounded-lg mb-4 p-4 flex md:flex-row flex-col justify-end items-center'>
      <p className='font-caveat text-2xl font-bold'>Categorías:</p>

      <div className='mt-2 md:mt-0 md:ml-2 flex flex-wrap justify-center'>
        <button className='md:mx-1 border-2 px-4 rounded-full border-green-600 bg-green-50'>Todas</button>
        <button className='md:mx-1 border-2 px-4 rounded-full border-rose-600 bg-rose-100'>Flor</button>
        <button className='md:mx-1 border-2 px-4 rounded-full border-fuchsia-600 bg-fuchsia-100'>Decorativa</button>
        <button className='md:mx-1 border-2 px-4 rounded-full border-lime-600 bg-lime-100'>Culinaria</button>
        <button className='md:mx-1 border-2 px-4 rounded-full border-orange-600 bg-orange-100'>Interior</button>
      </div>
    </div>

  )
}

export default Filter
