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
        text="Admin Tools"
        icon="fa-solid:tools"
      />
      <hr />
      <ToolSection
        action={() => navigate('/customers')}
        text="Customers"
        icon="bxs:shopping-bags"
      />
      <ToolSection
        action={() => navigate('/employees')}
        text="Employees"
        icon="fa6-solid:address-card"
      />
      <ToolSection
        action={() => navigate('/wares')}
        text="Warehouses"
        icon="fa-solid:warehouse"
      />
      <ToolSection
        action={() => navigate('/fridges')}
        text="Fridges"
        icon="bxs:fridge"
      />
      <ToolSection
        action={() => navigate('/pieces')}
        text="Pieces"
        icon="fa-solid:cogs"
      />
      <ToolSection
        action={() => navigate('/details')}
        text="Details"
        icon="fa-solid:cog"
      />
    </div>
  )
}

export default AdminTools