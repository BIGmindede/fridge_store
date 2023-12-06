import React from 'react'
import { List } from '../../widgets/List'

const GoodPage = () => {

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
    <div className='good-page'>
      {/* <AddForm /> */}
      <List data={data} type={"Fridges"} format={(data) => data}/>
    </div>
  )
}

export default GoodPage