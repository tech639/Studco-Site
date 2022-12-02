import React from 'react'
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <div>
      <div className='text-slate-100  flex justify-between align-middle p-11 px-3 lg:px-36'>
        <img src={Logo} alt='logo' className='object-cover w-3/12 lg:w-52'/>
        <button className='text-sm lg:text-3xl uppercase font-semibold border-2 p-0 lg:p-4 border-slate-100 hover:opacity-60' >✨Student Council✨</button>
        <button className='text-sm lg:text-3xl uppercase font-semibold border-2 p-0 lg:p-4 border-slate-100 hover:opacity-60'>Get Started?</button>
      </div>
    </div>
  )
}

export default Navbar
