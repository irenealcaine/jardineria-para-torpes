import React from 'react'
import Card from '../components/Card'
import MainHeader from '../components/MainHeader'


const List = () => {
  return (
    <>
      <div className="relative md:static z-0 bg-grass py-4 md:p-6">

        <MainHeader />

        <div className='bg-green-50 bg-opacity-60 shadow-2xl rounded-lg mb-4 p-4 flex md:flex-row flex-col justify-end items-center'>
          <p className='font-caveat text-2xl font-bold'>Categorías:</p>

          <div className='mt-2 md:mt-0 md:ml-2 flex flex-wrap justify-center'>
            <button className='md:mx-1 border-2 px-4 rounded-full border-green-600 bg-green-50'>Todas</button>
            <button className='md:mx-1 border-2 px-4 rounded-full border-rose-600 bg-rose-200'>Flor</button>
            <button className='md:mx-1 border-2 px-4 rounded-full border-fuchsia-600 bg-fuchsia-200'>Aromática</button>
            <button className='md:mx-1 border-2 px-4 rounded-full border-lime-600 bg-lime-200'>Culinaria</button>
            <button className='md:mx-1 border-2 px-4 rounded-full border-orange-600 bg-orange-200'>Interior</button>
          </div>
        </div>


        <div className='bg-green-50 bg-opacity-60 shadow-2xl flex md:flex-row flex-col items-center justify-center md:items-start md:px-4 md:py-2 p-0.5 flex-wrap gap-5 rounded-lg'>
          <Card />
        </div>

      </div>
    </>
  )
}

export default List
