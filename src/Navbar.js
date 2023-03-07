import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full lg:px-12 sm:px-7 px-4 flex justify-between h-24 gap-10'>
      <div className="text-center w-[40%] my-auto flex">
        <img src='/img/piai.png' className='z-50 w-[79px] h-[24px] my-auto mr-3 sm:hidden'/>
        <ul className="hidden sm:flex">     
          <img src='/img/Union.png' className='z-50 w-[48px] h-[34px] my-auto mr-3'/>
          <li className='sm:p-3 md:p-5 text-[#9497A1] text-[14px] font-bold'>Home</li>
          <li className='sm:p-3 md:p-5 text-[#9497A1] text-[14px] font-bold'>Dashboard</li>
          <li className='sm:p-3 md:p-5 text-[#9497A1] text-[14px] font-bold'>Blog</li>
          <li className='sm:p-3 md:p-5 text-[#9497A1] text-[14px] font-bold'>AboutUs</li>
          <li className='sm:p-3 md:p-5 text-[#99EFD0] text-[14px] font-bold'>Contactus</li>
        </ul>
      </div>  
      <div className='my-auto w-[20%] lg:flex hidden justify-end gap-4 p-3'>
        <button className="border font-bold text-[#F2994A] py-2 px-8 border-[#F2994A] rounded-md">
          Login
        </button>
        <button className=" font-bold py-2 px-10 text-[#FFFFFF] bg-[#F2994A] rounded-md">
          Signup
        </button>
      </div>
      <div className='hidden sm:flex items-center gap-5 lg:hidden'>
        <img src='/img/contact.png' className='w-[20px] h-[20px]' />
        <img src='/img/alert.png' className='w-[20px] h-[20px]'/>
        <img src='/img/close.png' className='w-[20px] h-[20px]'/>
      </div>
      <div className='sm:hidden flex items-center'>
        <img src='/img/menu.png' />
      </div>
    </div>
  )
}

export default Navbar;