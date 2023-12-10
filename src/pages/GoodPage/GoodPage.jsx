import React, { useEffect, useRef, useState } from 'react'
import { List } from '../../widgets/List'
import { goodsApi } from '../../redux/services/GoodsService'
import Filters from '../../widgets/Filters/Filters'

const GoodPage = () => {

  const [items, setItems] = useState([])
  const [filters, setFilters] = useState("")

  const { data } = goodsApi.useGetAllQuery(filters)

  useEffect(() => {
    setItems(data)
  }, [data, filters])

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
      <List data={items} type={"Fridges"} format={formatData}/>
      <Filters setFilters={setFilters}></Filters>
    </div>
  )
}

export default GoodPage