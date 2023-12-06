import React from 'react'
import { List } from '../../widgets/List'

const EmployeesPage = () => {

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
    <div className='employees-page'>
      {/* <AddForm /> */}
      <List data={data} type={"Employees"} format={formatData}/>
    </div>
  )
}


export default EmployeesPage