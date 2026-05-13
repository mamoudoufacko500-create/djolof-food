
import { Icons } from '@/data/data';
import { NavLink } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className=' bg-white shadow-lg flex flex-col items-center py-6 gap-2 fixed top-0 left-0 bottom-0'>
      <div className='border-b-2'>
        <img src="logo.png" alt="" className='size-20' />
      </div>
      <div className='flex flex-col  gap-11 mt-5 '>
           {Icons.map((menu) => (
            <NavLink
              className={({ isActive }) =>
                    ` rounded-xl flex items-center justify-center text-xl transition-all
            ${
              isActive
                ? "bg-orange-500 text-white shadow-lg p-2"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500 hover:p-2"
            }`
              }
              to={menu.path}
            >
              <menu.icon className=' size-5'/>
            </NavLink>
          ))}
      </div>  
    </div>
  )
}
