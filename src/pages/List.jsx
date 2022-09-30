import React from 'react'
import Card from '../components/Card'
import Filter from '../components/Filter'
import MainHeader from '../components/MainHeader'
import { PlantsData } from '../data/PlantsData'


const List = () => {
  return (
    <>
      <div className="relative md:static z-0 bg-grass py-4 md:p-6">
        <MainHeader />
        <Filter />
        <Card />
      </div>
    </>
  )
}

export default List
