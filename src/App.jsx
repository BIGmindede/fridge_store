import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Header from './widgets/Header/Header'
import { useLayoutEffect } from 'react'
import { AdminTools } from './widgets/AdminTools/AdminTools'
import EmployeesPage from './pages/EmployeesPage/EmployeesPage'
import WaresPage from './pages/WaresPage/WaresPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import GoodPage from './pages/GoodPage/GoodPage'
import AuthPage from './pages/AuthPage/AuthPage'
import { authApi } from './redux/services/AuthService'
import Cookies from 'universal-cookie'
import { jwtDecode } from 'jwt-decode'


function App() {
  const [enAdmTools, setEnAdmTools] = useState(false)

    const authCookie = new Cookies()

    useLayoutEffect(() => {
        // Добавить проверку на роль авторизованного пользователя
        // админ тулы - только для роли админа
        const token = authCookie.get("token")
        
    }, [])

    const [authenticate] = authApi.useAuthenticateMutation()
    const [register] = authApi.useRegisterMutation()

    const registerPageFields = {
      "name": { type: 'text', placeholder: 'Fullname'},
      "email": { type: 'email', placeholder: 'E-mail'},
      "telephone": { type: 'tel', placeholder: 'Telephone'},
      "password": { type: 'password', placeholder: 'Password'},
      "birthDate": { type: 'date', placeholder: 'XXXX-XX-XX'}
    }

    const loginPageFields = {
      "email": { type: 'email', placeholder: 'E-mail'},
      "password": { type: 'password', placeholder: 'Password'}
    }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          {enAdmTools
            ? <AdminTools />
            : <></>
          }
          <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/register'
              element={<AuthPage 
                endpoint={register}
                title='Registration'
                fields={registerPageFields} />} />
            <Route path='/authenticate'
              element={<AuthPage
                endpoint={authenticate}
                title='Login'
                fields={loginPageFields}/>} />
            <Route path='/employees' element={<EmployeesPage/>} />
            <Route path='/wares' element={<WaresPage/>} />
            <Route path='/fridges' element={<GoodPage/>} />
            <Route path='/details' element={<DetailsPage/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
