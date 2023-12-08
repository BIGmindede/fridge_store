import React from 'react'
import { List } from '../../widgets/List'
import { goodsApi } from '../../redux/services/GoodsService'

const MainPage = () => {

  const { data } = goodsApi.useGetAllQuery()

  return (
    <div className='main-page'>
      <List data={data} type={"Fridges"} format={(data) => data}/>
    </div>
  )
}

export default MainPage