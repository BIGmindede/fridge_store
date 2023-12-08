import React from 'react'
import { List } from '../../widgets/List'
import { customersApi } from '../../redux/services/CustomersService'

const CustomersPage = () => {

  const { data } = customersApi.useGetAllQuery()

  const formatData = (data) => {
    return {
      id: data.id,
      name: data.secondName + " " + data.firstName + " " + data.middleName + " ID: " + data.id,
      phoneNumber: data.phoneNumber,
    }
  }

  return (
    <div className='customers-page'>
      {/* <AddForm /> */}
      <List data={data} type={"Customers"} format={formatData}/>
    </div>
  )
}


export default CustomersPage