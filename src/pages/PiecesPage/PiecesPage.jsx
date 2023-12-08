import React from 'react'
import List from '../../widgets/List/List/List'
import { piecesApi } from '../../redux/services/PiecesService'

const PiecesPage = () => {

    const { data } = piecesApi.useGetAllQuery()

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
        <List data={data} type={"Pieces"} format={formatData}/>
      </div>
    )
}

export default PiecesPage