import React from 'react'
import SideBar from '../Composants/sidebar'
import { Outlet } from 'react-router-dom'


export default function DashboardLayout() {
  return (
    <div> 
        <div className='flex h-screen'>
          <div className='w-20'>
             <SideBar/>
          </div> 
          <div  className="w-full">
           <Outlet />
          </div>
        </div>
        </div>
  )
}
