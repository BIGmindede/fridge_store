import React from 'react'
import List from '../../widgets/List/List/List'
import { waresApi } from '../../redux/services/WarehousesSrvice'

const WaresPage = () => {

    const { data } = waresApi.useGetAllQuery()
  
    const formatData = (data) => {
      return {
        id: data.id,
        name: "warehouse ID: " + data.id,
        warehouse_information: data.warehouse_information,
        details_information: data.details_information
      }
    }
  
    return (
      <div className='wares-page'>
        {/* <AddForm /> */}
        <List data={data} type={"Warehouses"} format={formatData}/>
      </div>
    )
}

export default WaresPage