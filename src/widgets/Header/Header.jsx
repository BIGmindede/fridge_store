import React, { useEffect, useState } from 'react'
import cls from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const Header = () => {

    const cookies = new Cookies()
    const navigate = useNavigate()
    const [auth, setAuth] = useState(false)

    const handleLogout = () => {
        if (cookies.get("jwt")) {
            cookies.remove("jwt")
            setAuth(false)
            navigate('/')
        }
    }

    useEffect(() => {
        setAuth(cookies.get("jwt"))
    }, [cookies.get("jwt")])

    return (
        <div className={cls.header}>
            <div className={cls.header_module}>
                <Link to='/'>MainPage</Link>
            </div>
            <div className={cls.header_module}>
                {auth
                    ? <>
                        <span onClick={handleLogout}>Выйти</span>
                    </>
                    : <>
                        <Link to='/register'>Регистрация</Link>
                        <span>/</span>
                        <Link to='/authenticate'>Вход</Link>
                    </>
                }

            </div>
        </div>
    )
}

export default Header