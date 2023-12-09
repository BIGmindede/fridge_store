import React, { useEffect, useState } from 'react'
import { List } from '../../widgets/List'
import { goodsApi } from '../../redux/services/GoodsService'
import cls from './MainPage.module.css'

const MainPage = () => {

  const [items, setItems] = useState([])
  const [sort, setSort] = useState("")

  const { data } = goodsApi.useGetAllQuery(sort)

  useEffect(() => {
    setItems(data)
  }, [data, sort])

  return (
    <div className='main-page'>
      <div className={cls.filters}>
        <h1>Filters</h1>
        <button onClick={() => setSort("")}>Clear</button>
        <button onClick={() => setSort("/asc")}>In ascending order</button>
        <button onClick={() => setSort("/desc")}>In descending order</button>
      </div>
      <List data={items} type={"Fridges"} format={(data) => data}/>
    </div>
  )
}

export default MainPage