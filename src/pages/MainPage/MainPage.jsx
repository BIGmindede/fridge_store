import React, { useEffect, useState } from 'react'
import { List } from '../../widgets/List'
import { goodsApi } from '../../redux/services/GoodsService'
import Filters from '../../widgets/Filters/Filters'

const MainPage = () => {

  const [items, setItems] = useState([])
  const [filters, setFilters] = useState("")

  const { data } = goodsApi.useGetAllQuery(filters)

  useEffect(() => {
    setItems(data)
  }, [data, filters])

  return (
    <div className='main-page'>
      <List data={items} type={"Fridges"} format={(data) => data}/>
      <Filters setFilters={setFilters}></Filters>
    </div>
  )
}

export default MainPage