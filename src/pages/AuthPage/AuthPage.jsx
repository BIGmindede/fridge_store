import React from 'react'
import Form from '../../widgets/Form/Form'
import cls from './AuthPage.module.css'
import Cookies from 'universal-cookie'

const AuthPage = ({title, fields, endpoint}) => {

  const authCookie = new Cookies()

  const handleAuthAction = async (credentials) => {
    event.preventDefault()
    const { data } = await endpoint(credentials)
    authCookie.set('jwt', data.token)
  } 

  return (
    <div className={cls['auth-page']}>
        <Form fields={fields} title={title} action={handleAuthAction}/>
    </div>
  )
}

export default AuthPage