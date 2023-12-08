import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Cookies from 'universal-cookie'
import { jwtDecode } from 'jwt-decode'
import Header from './widgets/Header/Header'
import { AdminTools } from './widgets/AdminTools/AdminTools'
import MainPage from './pages/MainPage/MainPage'
import EmployeesPage from './pages/EmployeesPage/EmployeesPage'
import WaresPage from './pages/WaresPage/WaresPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import GoodPage from './pages/GoodPage/GoodPage'
import AuthPage from './pages/AuthPage/AuthPage'
import CustomersPage from './pages/CustomersPage/CustomersPage'
import { authApi } from './redux/services/AuthService'
import './App.css'
import PiecesPage from './pages/PiecesPage/PiecesPage'


function App() {
  const [enAdmTools, setEnAdmTools] = useState(false)

    const authCookie = new Cookies()

    useLayoutEffect(() => {
        const token = authCookie.get("jwt")
        if (token) {
          const { role } = jwtDecode(token)
          console.log(role)
          if (role === "ADMIN") setEnAdmTools(true)
        }
      // test only line
      setEnAdmTools(true)
    }, [])

    const [authenticate] = authApi.useAuthenticateMutation()
    const [register] = authApi.useRegisterMutation()

    const registerPageFields = {
      "username": { type: 'text', placeholder: 'username'},
      "email": { type: 'email', placeholder: 'E-mail'},
      "password": { type: 'password', placeholder: 'Password'},
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
            <Route path='/customers' element={<CustomersPage/>} />
            <Route path='/employees' element={<EmployeesPage/>} />
            <Route path='/wares' element={<WaresPage/>} />
            <Route path='/fridges' element={<GoodPage/>} />
            <Route path='/pieces' element={<PiecesPage/>} />
            <Route path='/details' element={<DetailsPage/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
