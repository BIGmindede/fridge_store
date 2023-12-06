import React from 'react'
import { Link } from 'react-router-dom'
import cls from './ListItem.module.css'

const ListItem = ({data, type}) => {

  const other = Object.keys(data).filter(key => key !== "name" && key !== "id")

  return (
    <Link className={cls.listitem} to={`/${type}/${data.id}`}>
      <div className={cls.img}>
        img
      </div>
      <div className={cls.info}>
        <div>{data.name}</div>
        <div className={cls.other}>
          {other.map(item => 
            <div>{item}: {data[item]}</div>  
          )}
        </div>
      </div>
    </Link>
  )
}

export default ListItem