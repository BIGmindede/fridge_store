import React from 'react'
import cls from './AdminTools.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToolSection } from '../AdminTools'

const AdminTools = () => {
  const [opened, setOpened] = useState()

  const navigate = useNavigate()

  return (
    <div className={[cls.admintools, opened ? cls.opened : cls.closed].join(" ")}>
      <ToolSection
        action={() => setOpened(!opened)}
        text="Интерфейс админа"
        icon="fa-solid:tools"
      />
      <hr />
      <ToolSection
        action={() => navigate('/customers')}
        text="Покупатели"
        icon="bxs:shopping-bags"
      />
      <ToolSection
        action={() => navigate('/employees')}
        text="Работники"
        icon="fa6-solid:address-card"
      />
      <ToolSection
        action={() => navigate('/wares')}
        text="Склады"
        icon="fa-solid:warehouse"
      />
      <ToolSection
        action={() => navigate('/fridges')}
        text="Холодильники"
        icon="bxs:fridge"
      />
      <ToolSection
        action={() => navigate('/pieces')}
        text="Части"
        icon="fa-solid:cogs"
      />
      <ToolSection
        action={() => navigate('/details')}
        text="Детали"
        icon="fa-solid:cog"
      />
    </div>
  )
}

export default AdminTools