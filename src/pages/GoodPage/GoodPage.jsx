import React, { useEffect, useState } from 'react'
import { List } from '../../widgets/List'
import { goodsApi } from '../../redux/services/GoodsService'
import cls from './GoodPage.module.css'

const GoodPage = () => {

  const [items, setItems] = useState([])
  const [sort, setSort] = useState("")

  const { data } = goodsApi.useGetAllQuery(sort)

  useEffect(() => {
    setItems(data)
  }, [data, sort])

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
      <div className={cls.filters}>
        <h1>Filters</h1>
        <button onClick={() => setSort("")}>Clear</button>
        <button onClick={() => setSort("/asc")}>In ascending order</button>
        <button onClick={() => setSort("/desc")}>In descending order</button>
      </div>
      <List data={items} type={"Fridges"} format={formatData}/>
    </div>
  )
}

export default GoodPage