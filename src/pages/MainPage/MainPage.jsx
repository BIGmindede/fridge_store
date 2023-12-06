import React from 'react'
import { List } from '../../widgets/List'

const MainPage = () => {

  const data = [
    {
      "name": "name1",
      "quantity": 10,
      "warehouseId": 2
    },
    {
      "name": "name2",
      "quantity": 10,
      "warehouseId": 2
    },
    {
      "name": "name3",
      "quantity": 10,
      "warehouseId": 2
    },
  ]

  return (
    <div className='main-page'>
      <List data={data} type={"Fridges"} format={(data) => data}/>
    </div>
  )
}

export default MainPage