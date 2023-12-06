import React from 'react'
import List from '../../widgets/List/List/List'

const DetailsPage = () => {

    const data = [
      {
        "firstName": "mercedes rs6",
        "secondName": "mercedes rs6",
        "middleName": "mashina",
        "phoneNumber": "+79181848138",
        "fullName": "FullName",
        "warehouseId": 2,
        "specId": 3
      },
    ]
  
    const formatData = (data) => {
      return {
        name: data.firstName + " " + data.secondName + " " + data.middleName,
        phoneNumber: data.phoneNumber,
        fullName: data.fullName,
        warehouseId: data.warehouseId,
        specId: data.specId
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