import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {BiUpArrowAlt} from 'react-icons/bi'
import {BsChevronRight} from 'react-icons/bs'
import {BsChevronLeft} from 'react-icons/bs'
import {RxDot} from 'react-icons/rx'
import Footer from './Footer'
export default function Home() {
  const[cle,setcle]=useState({
    opacity:'1'
  })
  const[cre,setcre]=useState({
    opacity:'0.5'
  })
  const[fl,setfl]=useState({
    display:'flex'
  })
  const[hd,sethd]=useState({
    display:'none'
  })
  const left=()=>{
    setcle({
      opacity:'1'
    })
    setcre({
      opacity:'0.5'
    })
    sethd({
      display:'none'
    });
    setfl({
      display:'flex'
    })
  }
  const right=()=>{
    setcle({
      opacity:'0.5'
    })
    setcre({
      opacity:'1'
    })
    sethd({
      display:'flex'
    });
    setfl({
      display:'none'
    })
  }
  return (
    <>
      <Navbar></Navbar>
    
   <div className="slider1 flex flex-col md:flex-row md:m-1" style={fl}>
      <div className="right1" >
        <img  src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP2-859x540' className='md:h-[33rem] md:w-[80rem]'></img>
      </div>
      <div className="left1 pl-4 flex flex-col md:justify-center md:bg-[#f2f2f2] md:p-3 md:pr-44 md:pt-12 shadow-sm shadow-gray-200 md:shadow-none">
        <h1 className='text-2xl md:text-3xl md:my-3 font-semibold my-1 mt-2'>Surface Pro 9</h1>
        <p className='my-2 font-sans'>Tablet versatality and laptop power-all in one ultra portable devices</p>
        <button className="btn mt-4 mb-8 bg-[#0067b8] md:mt-3 w-28 text-white font-semibold p-2">Learn more</button>
      </div></div>
      <div className="slider2 flex flex-col md:flex-row-reverse md:m-1" style={hd}>
        <div className="right2 ">
          <img  src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP4-1399x600' className='md:h-[33rem] md:w-[80rem]'></img>
        </div>
      <div className="left2 pl-4 flex flex-col  md:justify-center md:bg-[#b3d7f9] md:p-1 md:pr-8 md:pt-12 shadow-sm
       shadow-gray-200 md:shadow-none md:pl-11">
        <h1 className='text-2xl md:text-3xl md:my-3 font-semibold my-1 mt-2'>Microsoft 365</h1>
        <p className='my-2 font-sans'>Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps</p>
        <button className="btn mt-4 mb-8 bg-[#0067b8] md:mt-3 w-32 text-white font-semibold p-2">For one person</button>
      </div>
      </div>
   <div className='flex space-x-11 justify-center  my-5'>
    <BsChevronLeft className='cursor-pointer' onClick={left}></BsChevronLeft>
    <RxDot style={cle}/>
    <RxDot style={cre}/>
    <BsChevronRight className='cursor-pointer' onClick={right}></BsChevronRight>
   </div>
   <div className="logo flex space-x-8 space-y-11 my-11 justify-center flex-col flex-wrap  ml-2 sm:flex-row ">
      <div className="item1 flex flex-col sm:mt-11">
        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40' className='w-12 mx-auto'></img>
        <a href='#' className='text-blue-700 underline font-semibold mx-auto'>Choose your Microsoft 365</a>
      </div>
      <div className="item1 flex flex-col"> 
        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-go2-link-list-120x120?wid=40&hei=40' className='w-12 mx-auto'></img>
        <a href='#' className='text-blue-700 underline font-semibold  mx-auto'>Explore Surface devices</a>
      </div>
      <div className="item1 flex flex-col">
        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/xbox-blk-logo-link-list-120x120?wid=40&hei=40' className='w-12 mx-auto'></img>
        <a href='#' className='text-blue-700 underline font-semibold mx-auto'>Buy Xbox games and consoles</a>
      </div>
      <div className="item1 flex flex-col">
        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40' className='w-12 mx-auto'></img>
        <a href='#' className='text-blue-700 underline font-semibold mx-auto'>Get Window 11</a>
      </div>
   </div>
   <div className='cards flex my-24 mx-2 justify-evenly sm:flex-wrap flex-col sm:flex-row space-y-3'>
    <div className="item1 sm:w-64 m-2">
      <img  className='w-[40rem]' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=297&hei=167&fit=crop'/>
      <h1 className='my-2 text-2xl font-semibold'>Surface Laptop 5</h1>
      <p className='mt-1 text-md font-sans mb-7'>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.</p>
      <div>
      <a href='#' className=' text-blue-700 font-semibold flex'>Learn more<MdOutlineKeyboardArrowRight className='h-11 w-7 pb-4'/></a>
      </div> 
    </div>
    <div className="item2 sm:w-64 m-2">
      <img  className='w-[40rem]' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=297&hei=167&fit=crop'/>
      <h1 className='my-2 text-2xl font-semibold'>Xbox Series X</h1>
      <p className='mt-1 text-md font-sans mb-7'>Next-gen performance in the smallest Xbox ever. </p>
     <div>
      <a href='#' className=' text-blue-700 font-semibold flex '>Shop  Xbox Series S<MdOutlineKeyboardArrowRight className='h-11 w-7 pb-4'/></a>
      </div> 
    </div>
    <div className="item3 sm:w-64 m-2">
      <img  className='w-[40rem]' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Bing-AI-Open-Preview?wid=297&hei=167&fit=crop'/>
      <h1 className='my-2 text-2xl font-semibold'>Announcing the next wave of AI innovation</h1>
      <p className='mt-1 text-md font-sans mb-7'>The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks.</p>
      <div>
      <a href='#' className=' text-blue-700 font-semibold flex'>Learn more about it<MdOutlineKeyboardArrowRight className='h-11 w-7 pb-4'/></a>
      </div> 
    </div>
    <div className="item4 sm:w-64 m-2">
      <img  className='w-[40rem]' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XGP-Game-Pass-Ultimate-Characters-06102010-1?wid=297&hei=167&fit=crop'/>
      <h1 className='my-2 text-2xl font-semibold'>Xbox Game Pass Ultimate</h1>
      <p className='mt-1 text-md font-sans mb-7'>Xbox Live Gold and hundreds of high-quality console and PC games. Play together with friends and discover your next favourite game.</p>
      <div>
      <a href='#' className=' text-blue-700 font-semibold flex'>Join now<MdOutlineKeyboardArrowRight className='h-11 w-7 pb-4'/></a>
      </div> 
    </div>
   </div>
   <div className="bigphoto my-5 mx-4 relative">
    <div className='photu relative lg:mx-9'>
    <img className='w-[105rem]' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Hero-Windows11-GlobalLaunch:VP4-1260x600'/>
    </div>
    <div className='content lg:absolute lg:top-[6rem] phot:top-[4rem] lg:text-white lg:ml-[10rem] lg:mr-[40rem] phot:mr-[30rem]'>
    <h1 className='text-2xl font-semibold my-3 px-3 mt-11 lg:text-3xl lg:pr-[5rem] '>Designed for life today-and tommorow</h1>
    <p className='mt-1 text-md font-sans px-3 mb-7 lg:pr-20'>The next-generation of games. Your goals,friends and family,Window 11 was made to bring you close everthing you love.</p>
    <button className='bg-[#0067b8] mx-3 text-white p-3 font-semibold lg:p-2'>See if your Pc is ready</button>
    </div>
   </div>
   <div>
    <h1 className='text-3xl font-semibold mt-20 mb-3 ml-12'>For business</h1>
   </div>
   <div className='cards flex mb-24 mx-2 justify-evenly sm:flex-wrap flex-col sm:flex-row space-y-3'>
    <div className="item1 sm:w-64 m-2">
      <img  className='w-[40rem]' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=297&hei=167&fit=crop'/>
      <h1 className='my-2 text-2xl font-semibold'>Surface for Business</h1>
      <p className='mt-1 text-md font-sans mb-7'>No matter what you do, there's a Surface to help you do it.</p>
      <div>
      <a href='#' className=' text-blue-700 font-semibold flex'>Shop now<MdOutlineKeyboardArrowRight className='h-11 w-7 pb-4'/></a>
      </div> 
    </div>
    <div className="item2 sm:w-64 m-2">
      <img  className='w-[40rem]' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-For-Business-Woman-Teams-Call?wid=297&hei=167&fit=crop'/>
      <h1 className='my-2 text-2xl font-semibold'>Try Microsoft 365  for free</h1>
      <p className='mt-1 text-md font-sans mb-7'>Get Microsoft Teams,secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trail. </p>
     <div>
      <a href='#' className=' text-blue-700 font-semibold flex '>Start your free trail<MdOutlineKeyboardArrowRight className='h-11 w-7 pb-4'/></a>
      </div> 
    </div>
    <div className="item3 sm:w-64 m-2">
      <img  className='w-[40rem]' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/JIC-DPS-CP01?wid=297&hei=167&fit=crop'/>
      <h1 className='my-2 text-2xl font-semibold'>Welcome to your Windows 365 Cloud PC</h1>
      <p className='mt-1 text-md font-sans mb-7'>Securely stream your Windows experience from the Microsoft cloud to  any device.</p>
      <div>
      <a href='#' className=' text-blue-700 font-semibold flex'>Get it today<MdOutlineKeyboardArrowRight className='h-11 w-7 pb-4'/></a>
      </div> 
    </div>
    <div className="item4 sm:w-64 m-2">
      <img  className='w-[40rem]' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=297&hei=167&fit=crop'/>
      <h1 className='my-2 text-2xl font-semibold'>Windows 11 for business</h1>
      <p className='mt-1 text-md font-sans mb-7'>Designed for hybrid work. Powerful for employees.Consistent for IT.Secure for all.</p>
      <div>
      <a href='#' className=' text-blue-700 font-semibold flex'>Learn more<MdOutlineKeyboardArrowRight className='h-11 w-7 pb-4'/></a>
      </div> 
    </div>
   </div>
   <div className='flex space-x-6 ml-11 my-6'>
    <h2>Follow Microsoft</h2>
   <a href='#'>
    <FaFacebookF className='h-6 w-6 '/>
    </a> 
    <a href='#'>
    <FaTwitter className='h-6 w-6'/>
    </a>
    <a href='#'>
    <BsYoutube className='h-6 w-6'/>
    </a>
   </div>
   <div className='backtotop my-20 ml-[60vw] sticky md:ml-[80vw]'>
      <button className='flex bg-gray-200 font-semibold p-2 pr-3 cursor-pointer  hover:bg-white hover:shadow-md hover:shadow-gray-200'>
        <BiUpArrowAlt className='mb-2 mr-3 w-5 h-6'/> Back to top
      </button>
   </div>
   <Footer></Footer>
    </>
  )
}
