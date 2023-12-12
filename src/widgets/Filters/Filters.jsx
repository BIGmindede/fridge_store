import React, { useRef } from 'react'
import cls from './Filters.module.css'

const Filters = ({setFilters}) => {
    const min = useRef()
    const max = useRef()
    const query = useRef()

    const handleBounds = () => {
        setFilters(`Filtered?min=${min.current.value}&max=${max.current.value}`)
    }

    const handleSearch = () => {
        setFilters(`Searched?query=${query.current.value}`)
    }

    return (
        <div className={cls.filters}>
            <h1>Фильтр</h1>
            <hr />
            <button onClick={() => setFilters("")}>Отчистить</button>
            <button onClick={() => setFilters("/asc")}>По возрастранию</button>
            <button onClick={() => setFilters("/desc")}>По убыванию</button>
            <hr />
            <div className={cls.bounds}>
            <input type="number" placeholder='мин' ref={min}/>
            <input type="number" placeholder='макс' ref={max}/>
            </div>
            <button onClick={handleBounds}>Фильтр по кол-ву</button>
            <hr />
            <input type="text" placeholder='Name' ref={query}/>
            <button onClick={handleSearch}>Поиск по имени</button>
        </div>
    )
}

export default Filters