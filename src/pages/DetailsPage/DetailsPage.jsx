import React from 'react'
import List from '../../widgets/List/List/List'
import { detailsApi } from '../../redux/services/DetailsService'

const DetailsPage = () => {

    const { data } = detailsApi.useGetAllQuery()

    const formatData = (singleData) => {
      return {
        id: singleData.id,
        name: singleData.name + " ID: " + singleData.id,
        quantity: singleData.quantity,
        warehouseId: singleData.warehouseId
      }
    }
  
    return (
      <div className='details-page'>
        {/* <AddForm /> */}
        <List data={data} type={"Details"} format={formatData}/>
      </div>
    )
}

export default DetailsPage