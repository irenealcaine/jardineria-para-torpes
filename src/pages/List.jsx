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
        <div className='flex md:flex-row flex-col items-center justify-center px-4 py-2'>
          {
            PlantsData.map((data, id) => {
              return (
                <div key={id} className="border shadow-xl rounded-lg md:w-1/4 w-5/6 m-1 p-2">
                  <p className='text-xl text-bold text-center'>{data.name}</p>
                  <img src={data.img} alt="" className='w-10 h-10 mx-auto' />
                  <div className='flex items-center'><img src={water} alt="" className='w-6' /> - <img src={data.water} alt="" className='w-6' /> </div>
                  <div className='flex items-center'><img src={light} alt="" className='w-6' /> - <img src={data.light} alt="" className='w-6' /></div>
                  <p className='indent-4'>{data.description}</p>
                  <div className='flex justify-center'>
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
