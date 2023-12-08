import React from 'react'
import { List } from '../../widgets/List'
import { goodsApi } from '../../redux/services/GoodsService'

const GoodPage = () => {

  const { data } = goodsApi.useGetAllQuery()
  
    const formatData = (data) => {
      return {
        id: data.id,
        name: data.name + " ID: " + data.id,
        quantity: data.quantity,
        warehouseId: data.warehouseId
      }
    }

  return (
    <div className='good-page'>
      {/* <AddForm /> */}
      <List data={data} type={"Fridges"} format={formatData}/>
    </div>
  )
}

export default GoodPage