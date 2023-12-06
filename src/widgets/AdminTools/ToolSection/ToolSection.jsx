import React from 'react'
import cls from './ToolSection.module.css'
import { Icon } from '@iconify/react';

const ToolSection = ({action, text, icon}) => {

    return (
        <div onClick={action}>
            <div className={cls.icon}>
                <Icon icon={icon} style={{fontSize: "20px"}}/>
            </div>
            <div>{text}</div>
        </div>
        
    )
}

export default ToolSection