import React, { useRef } from 'react'
import cls from './Filters.module.css'

const Filters = ({setFilters}) => {
    const min = useRef()
    const max = useRef()
    const query = useRef()

    const handleBounds = () => {
        setFilters(`Filtered?min=${min.current.value}&max=${ma.current.value}`)
    }

    const handleSearch = () => {
        setFilters(`Searched?query=${query.current.value}`)
    }

    return (
        <div className={cls.filters}>
            <h1>Filters</h1>
            <hr />
            <button onClick={() => setFilters("")}>Clear</button>
            <button onClick={() => setFilters("/asc")}>In ascending order</button>
            <button onClick={() => setFilters("/desc")}>In descending order</button>
            <hr />
            <div className={cls.bounds}>
            <input type="number" placeholder='min' ref={min}/>
            <input type="number" placeholder='max' ref={max}/>
            </div>
            <button onClick={handleBounds}>Filter by quantity</button>
            <hr />
            <input type="text" placeholder='Name' ref={query}/>
            <button onClick={handleSearch}>Search by name</button>
        </div>
    )
}

export default Filters