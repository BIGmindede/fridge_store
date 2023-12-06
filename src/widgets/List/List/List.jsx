import React from 'react'
import ListItem from '../ListItem/ListItem'
import cls from './List.module.css'

const List = ({data, type, format}) => {

    return (
        <div className={cls.list}>
            <div>
                <h1>{type}</h1><hr />
            </div>
            <div>
                {data.map((item, index) =>
                    <div>
                        <ListItem key={index} type={type}
                            data={format({
                                id: item.name + index,
                                ...item
                            })}
                        />
                    </div>    
                )}
            </div>
        </div>
    )
}

export default List