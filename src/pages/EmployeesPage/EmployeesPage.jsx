import React, { useEffect, useState } from 'react'
import { List } from '../../widgets/List'
import { employeesApi } from '../../redux/services/EmployeesService'

const EmployeesPage = () => {

  const [items, setItems] = useState([])

  const { data } = employeesApi.useGetAllQuery()

  useEffect(() => {
    setItems(data)
  }, [data])

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
      <List data={items} type={"Employees"} format={formatData}/>
    </div>
  )
}


export default EmployeesPage