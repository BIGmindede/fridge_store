import React from 'react'
import cls from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <div className={cls.header}>
            <div className={cls.header_module}>
                <Link to='/'>MainPage</Link>
            </div>
            <div className={cls.header_module}>
                <Link to='/register'>Register</Link>
                <span>/</span>
                <Link to='/authenticate'>Login</Link>
            </div>
        </div>
    )
}

export default Header