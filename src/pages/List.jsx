import React from 'react'
import MainHeader from '../components/MainHeader'
import { PlantsData } from '../data/PlantsData'
import water from '../assets/images/drop.svg'
import light from '../assets/images/sun.svg'

const List = () => {
  return (
    <>
      <div className="relative md:static z-0">
        <MainHeader />
        Listado
        <div className='flex md:flex-row flex-col items-center justify-center md:items-start px-4 py-2 flex-wrap'>
          {
            PlantsData.map((data, id) => {
              return (
                <div key={id} className="border shadow-xl rounded-lg md:w-80 w-full mx-2 mb-4 pt-2  bg-white">
                  <p className='text-3xl text-bold text-center py-4'>{data.name}</p>
                  <img src={data.img} alt="" className='w-full' />
                  <div className='flex justify-center mt-4'>
                    <div className='flex items-center px-4'><img src={water} alt="" className='w-6' /> - <img src={data.water} alt="" className='w-6' /> </div>
                    <div className='flex items-center px-4'><img src={light} alt="" className='w-6' /> - <img src={data.light} alt="" className='w-6' /></div>
                  </div>
                  <p className='indent-4 text-justify px-4 mt-4'>{data.description}</p>
                  <div className='flex justify-center my-4'>
                    {data.categories.map(s => (<p className='py-1 px-2 rounded-xl border-2 m-1 border-green-700'>{s}</p>))}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default List
