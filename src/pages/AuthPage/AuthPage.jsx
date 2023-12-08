import React from 'react'
import Form from '../../widgets/Form/Form'
import cls from './AuthPage.module.css'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

const AuthPage = ({title, fields, endpoint}) => {

  const authCookie = new Cookies()

  const navigate = useNavigate()

  const handleAuthAction = async (credentials) => {
    event.preventDefault()
    const { data } = await endpoint(credentials)
    if (data) {
      authCookie.set('jwt', data.token)
      navigate('/')
    }
  } 

  return (
    <div className={cls['auth-page']}>
        <Form fields={fields} title={title} action={handleAuthAction}/>
    </div>
  )
}

export default AuthPage