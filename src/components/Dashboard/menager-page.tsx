import React from 'react'
import DashboardLayout from '../Layout/dashboard-layout'
import DashboardTabs from '../Composants/Dashboardtabs'

export default function MenagerPage() {
  return (
    <div>
          <div className="flex h-screen items-center justify-center ">
        <header>
          <h1>Manager Dashboard</h1>
           <DashboardTabs />
        </header>
      </div>
    </div>
  )
}
