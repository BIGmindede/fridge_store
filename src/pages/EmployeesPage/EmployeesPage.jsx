import React from 'react'
import { List } from '../../widgets/List'
import { employeesApi } from '../../redux/services/EmployeesService'

const EmployeesPage = () => {

  const { data } = employeesApi.useGetAllQuery()

  const formatData = (data) => {
    return {
      id: data.id,
      name: data.secondName + " " + data.firstName + " " + data.middleName + " ID: " + data.id,
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