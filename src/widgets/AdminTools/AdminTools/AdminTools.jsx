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
        action={() => navigate('/employees')}
        text="Employees"
        icon="fa-regular:address-card"
      />
      <ToolSection
        action={() => navigate('/wares')}
        text="Warehouses"
        icon="fa-solid:warehouse"
      />
      <ToolSection
        action={() => navigate('/fridges')}
        text="Fridges"
        icon="carbon:temperature-frigid"
      />
      <ToolSection
        action={() => navigate('/details')}
        text="Details"
        icon="fa-solid:cogs"
      />
    </div>
  )
}

export default AdminTools