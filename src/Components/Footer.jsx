import React from 'react'
import {FaGlobeAmericas} from 'react-icons/fa'

export default function Footer() {
  return (
    <>
    <div className="container pr-[2vw] mx-auto pl-[2vw] w-[23rem] sm:w-[40rem] md:w-[49rem] lg:w-[68rem] xl:w-[76rem] flex text-center flex-col md:flex-row md:flex-wrap justify-evenly bg-gray-50
     text-xs font-sans text-gray-500">
    <div className='list1 mt-8'>
    <ul className='space-y-4'>
    <li  className='text-lg font-serif text-gray-600'>What's new</li>
    <li className='hover:underline cursor-pointer'>Microsoft 365</li>
    <li className='hover:underline cursor-pointer'>Games</li>
    <li className='hover:underline cursor-pointer'>Surface Pro 9</li>
    <li className='hover:underline cursor-pointer'>Surface Laptop 5</li>
    <li className='hover:underline cursor-pointer'>Surface Laptop Studio</li>
    <li className='hover:underline cursor-pointer'>Surface Laptop Go 2</li>
    <li className='hover:underline cursor-pointer'>Windows 11 apps</li>
    </ul>
        </div>
        <div className='list2 mt-8'>
    <ul className='space-y-4'>
    <li  className='text-lg font-serif text-gray-600'>Microsoft Store</li>
    <li className='hover:underline cursor-pointer'>Account profile</li>
    <li className='hover:underline cursor-pointer'>Download Center</li>
    <li className='hover:underline cursor-pointer'>Microsoft Store Support</li>
    <li className='hover:underline cursor-pointer'>Returns</li>
    <li className='hover:underline cursor-pointer'>Order tracking</li>
    </ul>
        </div>
        <div className='list3 mt-8'>
    <ul className='space-y-4'>
    <li  className='text-lg font-serif text-gray-600'>Education</li>
    <li className='hover:underline cursor-pointer'>Microsoft in education</li>
    <li className='hover:underline cursor-pointer'>Devices for education</li>
    <li className='hover:underline cursor-pointer'>Microsoft Teams for Education</li>
    <li className='hover:underline cursor-pointer'>Microsoft 365 Education</li>
    <li className='hover:underline cursor-pointer'>Office Education</li>
    <li className='hover:underline cursor-pointer'>Educator training and development</li>
    <li className='hover:underline cursor-pointer'>Deals for students and parents</li>
    <li className='hover:underline cursor-pointer'>Azure for students</li>
    </ul>
        </div>
        <div className='list4 mt-8'>
    <ul className='space-y-4'>
    <li  className='text-lg font-serif text-gray-600'>Business</li>
    <li className='hover:underline cursor-pointer'>Microsoft Cloud</li>
    <li className='hover:underline cursor-pointer'>Microsoft Security</li>
    <li className='hover:underline cursor-pointer'>Azure</li>
    <li className='hover:underline cursor-pointer'>Dynamics 365</li>
    <li className='hover:underline cursor-pointer'>Microsoft 365</li>
    <li className='hover:underline cursor-pointer'>Microsoft Advertising</li>
    <li className='hover:underline cursor-pointer'>Microsoft Industry</li>
    <li className='hover:underline cursor-pointer'>Microsoft Teams</li>
    </ul>
        </div>
        <div className='list5 mt-8'>
    <ul className='space-y-4'>
    <li  className='text-lg font-serif text-gray-600'>Developer's & IT</li>
    <li className='hover:underline cursor-pointer'>Developer Center</li>
    <li className='hover:underline cursor-pointer'>Documentation</li>
    <li className='hover:underline cursor-pointer'>Microsoft Learn</li>
    <li className='hover:underline cursor-pointer'>Microsoft Tech Community</li>
    <li className='hover:underline cursor-pointer'>Azure Marketplace</li>
    <li className='hover:underline cursor-pointer'>AppSource</li>
    <li className='hover:underline cursor-pointer'>Microsoft Power Platform</li>
    <li className='hover:underline cursor-pointer'>Visual Studio</li>
    </ul>
        </div>
        <div className='list6 mt-8'>
    <ul className='space-y-4'>
    <li className='text-lg font-serif text-gray-600'>Company</li>
    <li className='hover:underline cursor-pointer'>Careers</li>
    <li className='hover:underline cursor-pointer'>About Microsoft</li>
    <li className='hover:underline cursor-pointer'>Company news</li>
    <li className='hover:underline cursor-pointer'>Privacy at Microsoft</li>
    <li className='hover:underline cursor-pointer'>Investors</li>
    <li className='hover:underline cursor-pointer'>Security</li>
    <li className='hover:underline cursor-pointer'>Sustainabilit</li>
    </ul>
        </div>

    </div>
    <div className='bg-gray-50 pt-11 mx-auto  w-[23rem] sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[76rem] '>

    <div className='lg:flex pb-6 '>
        <div className='lg:flex ml-14 space-x-14 font-sans text-xs space-y-3'>
        <div className='lg:flex block hover:underline cursor-pointer'><FaGlobeAmericas className='h-5 w-7'/>English(India)</div>
        <div className='block pb-2 hover:underline cursor-pointer'>Your Privacy choices</div>
        </div>
        <div className='ml-[15vw] lg:text-xs font-sans text-[10px] xl:[20vw]'>
        <ul className='flex space-x-2 lg:space-x-4 flex-wrap'>
        <li className='hover:underline cursor-pointer'>Contact </li>
        <li className='hover:underline cursor-pointer'>Microsoft </li>
        <li className='hover:underline cursor-pointer'>Privacy </li>
        <li className='hover:underline cursor-pointer'>Terms of use </li>
        <li className='hover:underline cursor-pointer'>Trademarks </li>
        <li className='hover:underline cursor-pointer'>About our ads </li>
        <li className='hover:underline cursor-pointer'>© Microsoft 2023</li>
        </ul>
        </div>
    </div>
    </div>
    </>
  )
}
